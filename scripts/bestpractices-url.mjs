// Print bestpractices.dev links that propose the answers in
// .bestpractices.json whose status differs from what's saved on the site.
// Open each link, review the highlighted fields, and save: nothing is written
// until you do. Saved justifications are kept unless you pass --justifications.
// A level with many changes is split over several links, because the site
// refuses very long URLs (HTTP 414); save each one in turn.
// Usage: node scripts/bestpractices-url.mjs [--level silver] [--justifications]
// Levels: passing, silver, gold (the metal series) and baseline-1, baseline-2,
// baseline-3 (OSPS Baseline), each read from the official criteria lists.
import { readFileSync } from 'node:fs';
import { parseArgs } from 'node:util';

// The project's id on bestpractices.dev, set once the project is registered
const PROJECT = null;

if (PROJECT === null) {
  console.error(
    'speccer is not registered on bestpractices.dev yet: set PROJECT in scripts/bestpractices-url.mjs'
  );
  process.exit(1);
}

// Well below the length at which the site starts refusing a URL
const MAX_URL_LENGTH = 6000;
const { values } = parseArgs({
  options: {
    level: { type: 'string', default: 'silver' },
    justifications: { type: 'boolean', default: false }
  }
});
const answers = JSON.parse(
  readFileSync(new URL('../.bestpractices.json', import.meta.url), 'utf8')
);
const CRITERIA_BASE =
  'https://raw.githubusercontent.com/ossf/best-practices-badge/main/criteria/';
// Each level's heading in the official criteria file, and how its criteria are
// indented under it
const LEVELS = {
  passing: { file: 'criteria.yml', heading: /^- '0':/ },
  silver: { file: 'criteria.yml', heading: /^- '1':/ },
  gold: { file: 'criteria.yml', heading: /^- '2':/ },
  'baseline-1': { file: 'baseline_criteria.yml', heading: /^baseline-1:/ },
  'baseline-2': { file: 'baseline_criteria.yml', heading: /^baseline-2:/ },
  'baseline-3': { file: 'baseline_criteria.yml', heading: /^baseline-3:/ }
};
const level = LEVELS[values.level];

if (!level) {
  console.error(
    `Unknown level "${values.level}"; use one of ${Object.keys(LEVELS).join(', ')}`
  );
  process.exit(1);
}

/** The criteria in the chosen level, from the official criteria list. */
const levelCriteria = async () => {
  const res = await fetch(`${CRITERIA_BASE}${level.file}`);

  if (!res.ok) {
    console.error(`Couldn't read ${level.file}: HTTP ${res.status}`);
    process.exit(1);
  }

  const names = new Set();

  let inside = false;

  for (const line of (await res.text()).split('\n')) {
    // A level heading starts at the left margin; the next one ends the level
    if (/^\S/.test(line)) inside = level.heading.test(line);
    else if (inside) {
      const criterion = line.match(/^ {6}(?:- )?([a-z][a-z0-9_]*):\s*$/);

      if (criterion) names.add(criterion[1]);
    }
  }

  return names;
};
// Fields from another level are ignored by the site, so leave them out
const criteria = await levelCriteria();
const inLevel = (name) => criteria.has(name);
const response = await fetch(
  `https://www.bestpractices.dev/projects/${PROJECT}.json`
);

if (!response.ok) {
  console.error(`Couldn't read project ${PROJECT}: HTTP ${response.status}`);
  process.exit(1);
}

const project = await response.json();
// Baseline answers are read back under their original ids:
// osps_qa_07_01_status is returned as OSPS-QA-07.01_status
const originalId = (field) =>
  field.replace(
    /^osps_([a-z]{2})_(\d{2})_(\d{2})_/,
    (_, category, number, section) =>
      `OSPS-${category.toUpperCase()}-${number}.${section}_`
  );
const saved = new Proxy(project, {
  get: (target, field) => target[field] ?? target[originalId(String(field))]
});
const changed = [];

let reworded = 0;

for (const [key, value] of Object.entries(answers)) {
  if (!key.endsWith('_status')) continue;

  const name = key.slice(0, -'_status'.length);

  if (!inLevel(name)) continue;

  const justification = answers[`${name}_justification`];

  if (saved[key] === value) {
    if (saved[`${name}_justification`] === justification) continue;

    // Same answer, different wording: keep the saved text unless asked
    if (!values.justifications) {
      reworded++;
      continue;
    }
  }

  changed.push({
    name,
    status: value,
    justification,
    line: `${name}: ${saved[key] ?? '?'} → ${value}`
  });
}

const note =
  reworded > 0
    ? `\n${reworded} more answers match but are worded differently; pass --justifications to propose that wording too.`
    : '';

if (changed.length === 0) {
  console.log(`Project ${PROJECT} already matches .bestpractices.json.${note}`);
  process.exit(0);
}

const EDIT_URL = `https://www.bestpractices.dev/en/projects/${PROJECT}/${values.level}/edit?`;
/**
 * The edit link for some answers. Proposals only fill blank fields unless
 * forced, so the statuses that differ are forced (their justifications follow)
 * and show as changes to review.
 */
const linkFor = (batch) => {
  const params = new URLSearchParams();

  for (const { name, status, justification } of batch) {
    params.set(`${name}_status`, status);
    params.set(`${name}_justification`, justification);
  }

  params.set('overrides', batch.map(({ name }) => `${name}_status`).join(','));

  return `${EDIT_URL}${params}`;
};
// Fill each link with answers until the next one would make it too long
const links = [];

let batch = [];

for (const answer of changed) {
  if (batch.length > 0 && linkFor([...batch, answer]).length > MAX_URL_LENGTH) {
    links.push(linkFor(batch));
    batch = [];
  }

  batch.push(answer);
}

links.push(linkFor(batch));

console.log(`${changed.length} answers differ from the saved project:\n`);
for (const { line } of changed) console.log(`  ${line}`);
console.log(
  links.length === 1
    ? '\nReview and save them here:\n'
    : `\nReview and save them in ${links.length} steps, one link at a time:\n`
);
links.forEach((link, index) =>
  console.log(links.length === 1 ? link : `${index + 1}. ${link}\n`)
);
console.log(note);
