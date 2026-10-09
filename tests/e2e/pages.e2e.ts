import { readdirSync } from 'node:fs';

import { expect, test, waitForSpeccer } from './fixtures';

const DEV_PAGES = readdirSync('dev').filter((file) => file.endsWith('.html'));

test.describe('dev navigation', () => {
  test('links to every page in dev/', async ({ page }) => {
    await page.goto('/index.html');

    const links = await page
      .getByRole('navigation', { name: 'Dev pages' })
      .getByRole('link')
      .evaluateAll((els) =>
        els.map((el) => (el as HTMLAnchorElement).pathname.slice(1))
      );

    expect([...links].sort()).toEqual([...DEV_PAGES].sort());
  });

  for (const path of DEV_PAGES) {
    test(`${path}: marks itself as the current page`, async ({ page }) => {
      await page.goto(`/${path}`);

      await expect(
        page
          .getByRole('navigation', { name: 'Dev pages' })
          .locator('[aria-current="page"]')
      ).toHaveAttribute('href', `/${path}`);
    });
  }
});

// Every dev page that renders annotations on load
const PAGES = [
  'index.html',
  'a11y.html',
  'demo.html',
  'grid.html',
  'mark.html',
  'measure.html',
  'pin.html',
  'pin-align-parent.html',
  'pin-text.html',
  'spacing.html',
  'themes.html',
  'typography.html',
  'modes.html'
];

for (const path of PAGES) {
  test.describe(path, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(`/${path}`);
      await waitForSpeccer(page);
    });

    test('has a title', async ({ page }) => {
      await expect(page).toHaveTitle(/@phun-ky\/speccer/);
    });

    test('has unique ids in its markup', async ({ page }) => {
      // Speccer derives the ids of generated elements from the target's id,
      // so duplicates in the page mix up annotations between targets
      const ids = await page
        .locator('[id]:not(.ph-speccer)')
        .evaluateAll((els) => els.map((el) => el.id));
      const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);

      expect(duplicates).toEqual([]);
    });

    test('links every annotated target to its generated elements', async ({
      page
    }) => {
      const ids = await page
        .locator('[data-speccer-element-id]')
        .evaluateAll((els) =>
          els.map((el) => el.getAttribute('data-speccer-element-id') as string)
        );

      for (const id of ids) {
        expect(id).not.toBe('');
        await expect(
          page.locator(`[data-speccer-id="${id}"]`).first(),
          `generated element for ${id}`
        ).toBeAttached();
      }
    });

    test('does not generate duplicate ids', async ({ page }) => {
      // Grid and a11y annotations have no id, so this can be empty
      const ids = await page
        .locator('.ph-speccer.speccer[id]')
        .evaluateAll((els) => els.map((el) => el.id));

      expect(new Set(ids).size).toBe(ids.length);
    });
  });
}
