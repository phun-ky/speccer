// Write a CycloneDX software bill of materials for the package to stdout: the
// runtime dependencies from npm's SBOM, plus every package a build inlines,
// found from the built source maps (only the UMD build for script tags may
// inline its dependencies). An inlined package that is also a dependency is
// marked as bundled; one that isn't is added with its version and hash from
// the lockfile. Run after `npm run build`.
import { execFileSync } from 'node:child_process';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const DIST = join(ROOT, 'dist');
const lock = JSON.parse(readFileSync(join(ROOT, 'package-lock.json'), 'utf8'));
const sbom = JSON.parse(
  execFileSync('npm', ['sbom', '--sbom-format', 'cyclonedx', '--omit', 'dev'], {
    cwd: ROOT,
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024
  })
);
// A package URL encodes the scope and name separately: pkg:npm/%40scope/name@1.0.0
const purlOf = (name, version) =>
  `pkg:npm/${name
    .split('/')
    .map((part) => encodeURIComponent(part))
    .join('/')}@${version}`;
const bundled = new Set();

for (const file of readdirSync(DIST).filter((name) => name.endsWith('.map'))) {
  for (const source of JSON.parse(readFileSync(join(DIST, file), 'utf8'))
    .sources) {
    const match = source.match(/node_modules\/((?:@[^/]+\/)?[^/]+)\//);

    if (match) bundled.add(match[1]);
  }
}

const subject = sbom.metadata.component['bom-ref'];
const refs = [];

sbom.components ??= [];

for (const name of [...bundled].sort()) {
  const entry = lock.packages[`node_modules/${name}`];

  if (!entry) {
    console.error(`${name} is bundled but not in package-lock.json.`);
    process.exit(1);
  }

  const BUNDLED = { name: 'cdx:npm:package:bundled', value: 'true' };
  const declared = sbom.components.find(
    (component) =>
      component.name === name && component.version === entry.version
  );

  if (declared) {
    declared.properties = [...(declared.properties ?? []), BUNDLED];
    continue;
  }

  const purl = purlOf(name, entry.version);
  const [algorithm, digest] = entry.integrity.split('-');

  sbom.components.push({
    'bom-ref': purl,
    type: 'library',
    name,
    version: entry.version,
    scope: 'required',
    purl,
    ...(entry.license && {
      licenses: [{ license: { id: entry.license } }]
    }),
    hashes: [
      {
        alg: algorithm.replace('sha', 'SHA-'),
        content: Buffer.from(digest, 'base64').toString('hex')
      }
    ],
    properties: [BUNDLED],
    externalReferences: [{ type: 'distribution', url: entry.resolved }]
  });
  refs.push(purl);
}

const root = sbom.dependencies.find(({ ref }) => ref === subject);

root.dependsOn = [...new Set([...(root.dependsOn ?? []), ...refs])];

for (const ref of refs) sbom.dependencies.push({ ref, dependsOn: [] });

console.log(JSON.stringify(sbom, null, 2));
