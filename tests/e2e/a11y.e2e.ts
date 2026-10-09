import { expect, test, waitForSpeccer } from './fixtures';

test.describe('a11y', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/a11y.html');
    await waitForSpeccer(page);
  });

  test('numbers the tab stops in each container from 1', async ({ page }) => {
    const containers = await page
      .locator('[data-speccer="a11y tabstops"]')
      .count();
    const numbers = await page
      .locator('.ph-speccer.speccer.tabstops')
      .evaluateAll((els) =>
        els.map((el) => Number(el.getAttribute('data-speccer-a11y-tabstops')))
      );
    // Split the numbers into runs of 1, 2, 3, … – one run per container
    const runs = numbers.reduce<number[][]>((all, n) => {
      if (n === 1) all.push([]);
      all.at(-1)?.push(n);

      return all;
    }, []);

    expect(numbers.length).toBeGreaterThan(0);
    expect(runs).toHaveLength(containers);

    for (const run of runs)
      expect(run).toEqual(run.map((_, index) => index + 1));
  });

  test('labels each heading with its level', async ({ page }) => {
    const headings = await page
      .locator('[data-speccer="a11y headings"] :is(h1, h2, h3, h4, h5, h6)')
      .evaluateAll((els) => els.map((el) => el.tagName));

    expect(headings.length).toBeGreaterThan(0);
    await expect(page.locator('.ph-speccer.speccer.headings')).toHaveText(
      headings
    );
  });

  test('shows the keys of each keyboard shortcut', async ({ page }) => {
    const shortcuts = await page
      .locator('[data-speccer-a11y-shortcut]')
      .evaluateAll((els) =>
        els.map((el) =>
          (el.getAttribute('data-speccer-a11y-shortcut') as string)
            .split('+')
            .map((key) => key.trim())
        )
      );
    const holders = page.locator('.ph-speccer.speccer.shortcut-holder');

    await expect(holders).toHaveCount(shortcuts.length);

    for (const [index, keys] of shortcuts.entries()) {
      await expect(holders.nth(index).locator('kbd')).toHaveText(keys);
      // Modifier keys are styled differently
      await expect(holders.nth(index).locator('kbd.modifier')).toHaveCount(
        keys.filter((key) => ['ctrl', 'shift', 'alt', 'cmd'].includes(key))
          .length
      );
    }
  });

  test('shows the autocomplete value of each field', async ({ page }) => {
    const values = await page
      .locator('[data-speccer="a11y autocomplete"] [autocomplete]')
      .evaluateAll((els) =>
        els.map((el) => `autocomplete="${el.getAttribute('autocomplete')}"`)
      );

    expect(values.length).toBeGreaterThan(0);
    await expect(page.locator('.ph-speccer.speccer.autocomplete')).toHaveText(
      values
    );
  });
});

test.describe('a11y landmarks', () => {
  test('labels each landmark with its element and role', async ({ page }) => {
    await page.goto('/demo.html');
    await waitForSpeccer(page);

    const landmarks = page.locator('.ph-speccer.speccer.landmark');

    await expect(landmarks.first()).toBeAttached();

    for (const text of await landmarks.allTextContents())
      expect(text).toMatch(/^<[a-z]+ role="[a-z]+">$/);
  });
});
