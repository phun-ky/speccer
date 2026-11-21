import { expect, test, waitForSpeccer } from './fixtures';

// https://github.com/phun-ky/speccer/issues/557
//
// speccer() removes the annotations right away, but draws over several
// frames, so a second call while a draw is in progress must not leave the
// first call's annotations on the page as well.
const TARGETS = [
  'data-speccer="pin left"',
  'data-speccer="pin top text" data-speccer-title="Title"',
  'data-speccer="pin bracket curly bottom"',
  'data-speccer="pin parent right"',
  'data-speccer="measure width bottom"',
  'data-speccer="typography right"',
  'data-speccer="mark"',
  'data-speccer="spacing"',
  'data-speccer="grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px"'
];
const PAGE = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Overlapping draws</title>
    <link href="/speccer.css" rel="stylesheet" />
    <style>div { margin: 48px; padding: 16px; width: 240px; }</style>
  </head>
  <body>
    <main data-speccer="pin-area" style="padding: 160px">
      ${TARGETS.map((attributes, i) => `<div id="t${i}" ${attributes}><span>${i}</span><span>${i}</span></div>`).join('\n')}
    </main>
    <svg class="ph-speccer" id="ph-speccer-svg" xmlns="http://www.w3.org/2000/svg">
      <path class="ph-speccer path original" id="ph-speccer-path" fill="none"
        stroke-width="1" stroke="currentColor" />
    </svg>
    <script type="module">
      import speccer, { modes, removeSpeccer } from '/speccer.esm.js';

      window.speccer = speccer;
      window.modes = modes;
      window.removeSpeccer = removeSpeccer;
    </script>
  </body>
</html>`;

declare global {
  interface Window {
    modes: { lazy: () => void; rerenderLazy: () => void };
    removeSpeccer: () => void;
  }
}

/** How many of each kind of annotation the page has, like "pin": 4 */
const countByKind = (page: import('@playwright/test').Page) =>
  page.locator('.ph-speccer.speccer').evaluateAll((els) =>
    els.reduce<Record<string, number>>((counts, el) => {
      const kind = `${el.tagName.toLowerCase()}.${[...el.classList].sort().join('.')}`;

      counts[kind] = (counts[kind] ?? 0) + 1;

      return counts;
    }, {})
  );

test.describe('overlapping draws', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('**/overlapping-draws.html', (route) =>
      route.fulfill({ contentType: 'text/html', body: PAGE })
    );
    // Tall enough for lazy loading to draw every target right away
    await page.setViewportSize({ width: 1280, height: 4000 });
    await page.goto('/overlapping-draws.html');
    await page.waitForFunction(() => typeof window.speccer === 'function');
  });

  const cases: [string, () => Promise<void> | void][] = [
    [
      'speccer() twice in one frame',
      () => {
        window.speccer();
        window.speccer();
      }
    ],
    [
      'speccer() again a frame later',
      async () => {
        window.speccer();
        await new Promise(requestAnimationFrame);
        window.speccer();
      }
    ],
    [
      'rerenderLazy() while lazy draws are in progress',
      async () => {
        window.modes.lazy();

        // The observers start drawing a frame later; overlap those draws
        for (let i = 0; i < 2; i++) await new Promise(requestAnimationFrame);

        window.modes.rerenderLazy();
      }
    ]
  ];

  for (const [name, draw] of cases) {
    test(`${name} draws every annotation once`, async ({ page }) => {
      await page.evaluate(() => window.speccer());
      await waitForSpeccer(page);

      const once = await countByKind(page);

      expect(Object.keys(once).length).toBeGreaterThan(8);

      await page.evaluate(draw);
      await waitForSpeccer(page);

      expect(await countByKind(page)).toEqual(once);
    });
  }

  test('removeSpeccer() while speccer() is drawing leaves nothing', async ({
    page
  }) => {
    await page.evaluate(() => {
      window.speccer();
      window.removeSpeccer();
    });
    await page.waitForTimeout(800);

    expect(await countByKind(page)).toEqual({});
  });
});
