import { annotationsFor, expect, test, waitForSpeccer } from './fixtures';

// https://github.com/phun-ky/speccer/issues/487
//
// Values speccer reads from the page are shown as text. Each payload counts
// in `window.__xss` if it is ever parsed as HTML: a `data:,` image fails to
// load, so its `onerror` runs without a request to the test server.
const PAYLOAD = '<img src="data:," onerror="window.__xss++">';
const CSS_PAYLOAD = '<img src=data:, onerror=window.__xss++>';

const PAGE = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>untrusted content</title>
    <script>window.__xss = 0;</script>
    <link href="/speccer.css" rel="stylesheet" />
  </head>
  <body>
    <main>
      <section data-speccer="pin-area" style="padding: 160px">
        <div id="title" data-speccer="pin top text"
          data-speccer-title='${PAYLOAD}'
          data-speccer-description='${PAYLOAD}\\n<b>second line</b>'>target</div>
        <div id="symbol" data-speccer="pin bottom">target</div>
      </section>
      <section data-speccer="pin-area" data-speccer-literals="<>&">
        <div id="literal" data-speccer="pin right">target</div>
      </section>
      <form data-speccer="a11y autocomplete">
        <input id="autocomplete" autocomplete='${PAYLOAD}' />
      </form>
      <div data-speccer="a11y landmark">
        <nav id="landmark" role='${PAYLOAD}'>nav</nav>
      </div>
      <p id="typography" data-speccer="typography right"
        style='font-family: "${CSS_PAYLOAD}", serif'>typography</p>
      <p id="typography-syntax" data-speccer="typography syntax right"
        style='font-family: "${CSS_PAYLOAD}", serif'>typography</p>
    </main>
    <script src="/speccer.js"></script>
    <svg class="ph-speccer" id="ph-speccer-svg" xmlns="http://www.w3.org/2000/svg">
      <path class="ph-speccer path original" id="ph-speccer-path" fill="none"
        stroke-width="1" stroke="currentColor" />
    </svg>
  </body>
</html>`;

test.describe('untrusted content', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('**/untrusted-content.html', (route) =>
      route.fulfill({ contentType: 'text/html', body: PAGE })
    );
    await page.goto('/untrusted-content.html');
    await waitForSpeccer(page);
  });

  test('never renders markup from the page', async ({ page }) => {
    expect(await page.evaluate(() => window.__xss)).toBe(0);
    await expect(page.locator('.ph-speccer img, .ph-speccer b')).toHaveCount(0);
  });

  test('shows pin titles and descriptions as text', async ({ page }) => {
    const pin = await annotationsFor(page.locator('#title'));

    await expect(pin.locator('.title')).toHaveText(PAYLOAD);
    await expect(pin.locator('.description')).toHaveText(
      `${PAYLOAD}<b>second line</b>`
    );
    // \n in the description still becomes a line break
    await expect(pin.locator('.description br')).toHaveCount(1);
  });

  test('shows literals as text', async ({ page }) => {
    await expect(await annotationsFor(page.locator('#literal'))).toHaveText(
      '<'
    );
  });

  test('shows a11y values as text', async ({ page }) => {
    await expect(page.locator('.ph-speccer.speccer.autocomplete')).toHaveText(
      `autocomplete="${PAYLOAD}"`
    );
    await expect(page.locator('.ph-speccer.speccer.landmark')).toHaveText(
      `<nav role="${PAYLOAD}">`
    );
  });

  test('shows typography values as text', async ({ page }) => {
    for (const id of ['typography', 'typography-syntax'])
      await expect(await annotationsFor(page.locator(`#${id}`))).toContainText(
        `"${CSS_PAYLOAD}"`
      );
  });
});

declare global {
  interface Window {
    __xss: number;
  }
}
