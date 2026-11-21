import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test, { after, describe } from 'node:test';

const script = new URL('../check-site.mjs', import.meta.url).pathname;
const dir = mkdtempSync(join(tmpdir(), 'check-site-'));

after(() => rmSync(dir, { recursive: true, force: true }));

/** A small accessible page under the base /s/, with `body` added to it. */
const page = (body = '') => `<!doctype html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Fixture</title>
    <link rel="icon" href="data:," />
  </head>
  <body>
    <main>
      <h1 id="top">Fixture</h1>
      <p><a href="/s/#top">Home</a></p>
      ${body}
    </main>
  </body>
</html>
`;
// One page per breakage, and the check that must catch it
const broken = {
  'external-font': [
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Work+Sans" />',
    'network'
  ],
  'missing-image': ['<img src="/s/missing.png" alt="Missing" />', 'network'],
  contrast: ['<p style="color: #bbbbbb">Too faint to read</p>', 'axe'],
  'broken-anchor': ['<p><a href="/s/#nowhere">Nowhere</a></p>', 'links'],
  'broken-link': ['<p><a href="/s/missing">Missing</a></p>', 'links'],
  overflow: ['<div style="width: 2000px">Too wide</div>', 'overflow']
};

writeFileSync(join(dir, 'index.html'), page());

for (const [name, [body]] of Object.entries(broken)) {
  writeFileSync(join(dir, `${name}.html`), page(body));
}

describe('scripts/check-site.mjs', () => {
  const result = spawnSync('node', [script, dir, '--base', '/s/'], {
    encoding: 'utf8',
    timeout: 240_000
  });
  /** The checks that failed on a page, from the script's report. */
  const failedChecks = (name) =>
    new Set(
      [
        ...result.stderr.matchAll(
          new RegExp(`^✗ /s/${name} \\[(\\w+)\\]`, 'gm')
        )
      ].map((match) => match[1])
    );

  test('checks every page and exits 1 when any has a problem', () => {
    assert.match(result.stdout, /^7 page\(s\) in .+: \d+ problem\(s\)$/m);
    assert.equal(result.status, 1, result.stderr);
  });

  test('passes a clean page', () => {
    assert.deepEqual([...failedChecks('')], [], result.stderr);
  });

  for (const [name, [, check]] of Object.entries(broken)) {
    test(`catches ${name} with the ${check} check`, () => {
      assert.ok(failedChecks(name).has(check), result.stderr);
    });
  }
});
