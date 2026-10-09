import {
  expect,
  test as base,
  type Locator,
  type Page
} from '@playwright/test';

export { expect };

type Box = { x: number; y: number; width: number; height: number };

/**
 * Playwright `test` with two automatic additions for every test:
 *
 * - Requests to other origins are aborted. The dev pages load fonts, styles
 *   and scripts from external sites that only make the tests slow and flaky.
 * - Uncaught errors, `console.error` calls and failed local requests make the
 *   test fail, so a page that renders but throws is still caught.
 */
export const test = base.extend<{ pageErrors: string[] }>({
  pageErrors: [
    async ({ page, baseURL }, use) => {
      const origin = new URL(baseURL as string).origin;
      const isLocal = (url: string) => url.startsWith(origin);
      const errors: string[] = [];

      await page.route(
        (url) => !isLocal(url.href),
        (route) => route.abort()
      );

      page.on('pageerror', (error) =>
        errors.push(`pageerror: ${error.message}`)
      );
      page.on('console', (message) => {
        // Blocked external requests are reported as "Failed to load resource"
        if (
          message.type() === 'error' &&
          !message.text().startsWith('Failed to load resource')
        )
          errors.push(`console.error: ${message.text()}`);
      });
      page.on('response', (response) => {
        if (isLocal(response.url()) && response.status() >= 400)
          errors.push(`${response.status()}: ${response.url()}`);
      });

      await use(errors);

      expect(errors, 'errors on the page').toEqual([]);
    },
    { auto: true }
  ]
});

/**
 * The elements speccer generated for a target, linked through the target's
 * `data-speccer-element-id` and the generated elements' `data-speccer-id`.
 */
export const annotationsFor = async (target: Locator): Promise<Locator> => {
  // Set asynchronously when speccer runs, so wait for it
  await expect(target).toHaveAttribute('data-speccer-element-id', /.+/);

  const id = await target.getAttribute('data-speccer-element-id');

  return target.page().locator(`[data-speccer-id="${id}"]`);
};

/**
 * The bounding box of an element, in viewport coordinates.
 */
export const box = async (locator: Locator): Promise<Box> => {
  const result = await locator.boundingBox();

  expect(result, 'element has a bounding box').not.toBeNull();

  return result as Box;
};

/**
 * Waits until `actual` covers the same box as `expected`, within `tolerance`
 * pixels on each side.
 */
export const expectSameBox = async (
  actual: Locator,
  expected: Locator,
  tolerance = 1
): Promise<void> => {
  await expect
    .poll(async () => {
      const a = await box(actual);
      const e = await box(expected);

      return Math.max(
        Math.abs(a.x - e.x),
        Math.abs(a.y - e.y),
        Math.abs(a.width - e.width),
        Math.abs(a.height - e.height)
      );
    })
    .toBeLessThanOrEqual(tolerance);
};

/**
 * Waits until speccer has run: at least one generated element exists, and the
 * generated elements and their positions have stopped changing.
 *
 * Elements are added first and positioned a few animation frames later, so
 * waiting for the number of elements alone is not enough.
 */
export const waitForSpeccer = async (page: Page): Promise<void> => {
  const generated = page.locator('.ph-speccer.speccer');
  // Inline styles hold the positions, `d` the shape of SVG paths
  const snapshot = () =>
    generated.evaluateAll((els) =>
      els
        .map((el) => `${el.getAttribute('style')}${el.getAttribute('d')}`)
        .join('|')
    );

  await expect(generated.first()).toBeAttached();

  let previous: string | undefined;

  await expect
    .poll(
      async () => {
        const current = await snapshot();
        const stable = current === previous;

        previous = current;

        return stable;
      },
      { intervals: [250], timeout: 15_000 }
    )
    .toBe(true);
};
