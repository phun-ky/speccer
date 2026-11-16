// Check .bestpractices.json: every status is valid and has a justification.
// Then check that every file, page and heading linked from it and from
// security-insights.yml exists, so neither can go stale when a document moves.
import { existsSync, readFileSync } from 'node:fs';

const ROOT = new URL('../', import.meta.url);
const REPO = 'https://github.com/phun-ky/speccer/blob/main/';
const SITE = 'https://speccer.dev/';
const STATUSES = new Set(['Met', 'Unmet', 'N/A', '?']);
const answers = JSON.parse(
  readFileSync(new URL('.bestpractices.json', ROOT), 'utf8')
);
const problems = [];
// GitHub's heading anchors: lowercase, punctuation dropped, spaces to hyphens
const slug = (heading) =>
  heading
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N} _-]/gu, '')
    .replace(/ /g, '-');
const anchorsIn = (file) =>
  new Set(
    readFileSync(file, 'utf8')
      .split('\n')
      .filter((line) => /^#{1,6} /.test(line))
      .map((line) => slug(line.replace(/^#+ /, '')))
  );
/** The local file a link points to, or undefined for other sites. */
const localFile = (url) => {
  if (url.startsWith(REPO)) return url.slice(REPO.length);

  if (url.startsWith(SITE)) {
    const page = url.slice(SITE.length).replace(/\/$/, '');

    return existsSync(new URL(`docs/${page}.md`, ROOT))
      ? `docs/${page}.md`
      : `docs/${page}${page ? '/' : ''}index.md`;
  }
};
/** Report every repository file, docs page or heading in `text` that's missing. */
const checkLinks = (label, text) => {
  for (const url of text.match(/https:\/\/[^\s)]+/g) ?? []) {
    const [target, anchor] = url.replace(/[.,;]$/, '').split('#');
    const file = localFile(target);

    if (!file) continue;

    const path = new URL(file, ROOT);

    if (!existsSync(path)) {
      problems.push(`${label}: ${url} points to ${file}, which doesn't exist`);
    } else if (anchor && file.endsWith('.md') && !anchorsIn(path).has(anchor)) {
      problems.push(`${label}: ${url} has no heading #${anchor} in ${file}`);
    }
  }
};

for (const [key, value] of Object.entries(answers)) {
  if (key.endsWith('_status')) {
    const name = key.slice(0, -'_status'.length);

    if (!STATUSES.has(value))
      problems.push(`${key}: invalid status "${value}"`);

    if (!answers[`${name}_justification`]?.trim()) {
      problems.push(`${name}: status without a justification`);
    }
  } else if (key.endsWith('_justification')) {
    checkLinks(key, value);
  } else {
    problems.push(`${key}: not a _status or _justification field`);
  }
}

checkLinks(
  'security-insights.yml',
  readFileSync(new URL('security-insights.yml', ROOT), 'utf8')
);

if (problems.length > 0) {
  console.error('.bestpractices.json or security-insights.yml has problems:\n');
  for (const problem of problems) console.error(`  - ${problem}`);
  process.exit(1);
}

console.log(
  `.bestpractices.json (${Object.keys(answers).length / 2} answers) and security-insights.yml: all links resolve.`
);
