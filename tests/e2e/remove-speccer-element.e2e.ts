import { annotationsFor, expect, test, waitForSpeccer } from './fixtures';

// https://github.com/phun-ky/speccer/issues/548
//
// One removed and one kept target per feature, so removing one can't take
// the other's annotations with it.
const TARGETS = {
  pin: 'data-speccer="pin left"',
  'pin-text': 'data-speccer="pin top text"',
  'pin-curly': 'data-speccer="pin bracket curly bottom"',
  measure: 'data-speccer="measure width bottom"',
  typography: 'data-speccer="typography right"',
  mark: 'data-speccer="mark"',
  spacing: 'data-speccer="spacing"',
  grid: 'data-speccer="grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px"'
};
const target = (id: string, attributes: string) =>
  `<div id="${id}" ${attributes}><span>${id}</span><span>${id}</span></div>`;
const PAGE = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>removeSpeccerElement</title>
    <link href="/speccer.css" rel="stylesheet" />
    <style>div { margin: 48px; padding: 16px; width: 240px; }</style>
  </head>
  <body>
    <main data-speccer="pin-area" style="padding: 160px">
      ${Object.entries(TARGETS)
        .map(
          ([id, attributes]) =>
            target(id, attributes) + target(`${id}-kept`, attributes)
        )
        .join('\n')}
    </main>
    <svg class="ph-speccer" id="ph-speccer-svg" xmlns="http://www.w3.org/2000/svg">
      <path class="ph-speccer path original" id="ph-speccer-path" fill="none"
        stroke-width="1" stroke="currentColor" />
    </svg>
    <script type="module">
      import speccer, { removeSpeccerElement } from '/speccer.esm.js';

      window.removeSpeccerElement = removeSpeccerElement;
      speccer();
    </script>
  </body>
</html>`;

declare global {
  interface Window {
    removeSpeccerElement: (el: HTMLElement) => void;
  }
}

test.describe('removeSpeccerElement', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('**/remove-speccer-element.html', (route) =>
      route.fulfill({ contentType: 'text/html', body: PAGE })
    );
    await page.goto('/remove-speccer-element.html');
    await waitForSpeccer(page);
  });

  for (const id of Object.keys(TARGETS)) {
    test(`removes the annotations of a ${id} target only`, async ({ page }) => {
      const removed = page.locator(`#${id}`);
      const kept = page.locator(`#${id}-kept`);
      const shapes = (el: string) =>
        page.locator(
          `#ph-speccer-svg [data-start-el="${el}"], #ph-speccer-svg [data-el="${el}"]`
        );
      const keptAnnotations = await annotationsFor(kept);
      const keptCount = await keptAnnotations.count();
      const keptShapes = await shapes(`${id}-kept`).count();

      await expect(await annotationsFor(removed)).not.toHaveCount(0);

      // Text pins have a line, curly brackets a path of their own
      if (id === 'pin-text' || id === 'pin-curly')
        expect(await shapes(id).count()).toBeGreaterThan(0);

      await removed.evaluate((el) =>
        window.removeSpeccerElement(el as HTMLElement)
      );

      await expect(await annotationsFor(removed)).toHaveCount(0);
      await expect(shapes(id)).toHaveCount(0);
      await expect(keptAnnotations).toHaveCount(keptCount);
      await expect(shapes(`${id}-kept`)).toHaveCount(keptShapes);
      await expect(page.locator('#ph-speccer-path')).toBeAttached();
    });
  }
});
