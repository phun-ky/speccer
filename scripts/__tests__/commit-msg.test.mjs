import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test, { after, describe } from 'node:test';

const hook = new URL('../../.githooks/commit-msg', import.meta.url).pathname;
const dir = mkdtempSync(join(tmpdir(), 'commit-msg-'));

after(() => rmSync(dir, { recursive: true, force: true }));

/** Run the hook on a message, as git and CI do: with the message in a file. */
const runHook = (message) => {
  const file = join(dir, 'COMMIT_EDITMSG');

  writeFileSync(file, message);

  return spawnSync(hook, [file], { encoding: 'utf8' });
};

describe('.githooks/commit-msg', () => {
  const rejected = {
    'Copilot trailer from the web editor':
      'Update docs/.vitepress/theme/custom.css\n\nCo-authored-by: Copilot <175728472+Copilot@users.noreply.github.com>\n',
    'Claude trailer':
      'feat: 🎸 add a thing\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n',
    'Anthropic address alone':
      'fix: 🐛 a thing\n\nReviewed-by: x <noreply@anthropic.com>\n',
    'Generated with footer':
      'fix: 🐛 a thing\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n',
    'written by an AI tool': 'docs: ✏️ a page\n\nWritten by ChatGPT.\n',
    'made by AI': 'docs: ✏️ a page\n\nMade by AI\n',
    'Cursor trailer':
      'chore: 🤖 a chore\n\nCo-authored-by: Cursor Agent <cursoragent@cursor.com>\n'
  };
  const accepted = {
    'signed-off commit':
      'fix: 🐛 publish the built files\n\nSigned-off-by: Jane Doe <jane@example.com>\n',
    'human co-author':
      'feat: 🎸 a thing\n\nCo-authored-by: Jane Doe <jane@example.com>\n',
    'subject that only mentions Copilot':
      'docs: ✏️ explain how Copilot suggestions are reviewed\n',
    'a word that starts with ai': 'chore: 🤖 made with aiohttp in mind\n',
    // Both lines below would be rejected without the stripping in the hook
    "git's comment lines": 'fix: 🐛 a thing\n# Generated with Claude Code\n',
    'the diff below the scissors line (git commit -v)':
      'fix: 🐛 a thing\n# ------------------------ >8 ------------------------\ndiff --git a/x b/x\n+  "Co-Authored-By: Claude <noreply@anthropic.com>"\n'
  };

  for (const [name, message] of Object.entries(rejected)) {
    test(`rejects ${name}`, () => {
      const { status, stderr } = runHook(message);

      assert.equal(status, 1, stderr);
      assert.match(stderr, /AI attribution isn't allowed/);
    });
  }

  for (const [name, message] of Object.entries(accepted)) {
    test(`accepts ${name}`, () => {
      const { status, stderr } = runHook(message);

      assert.equal(status, 0, stderr);
    });
  }
});
