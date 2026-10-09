import { annotationsFor, expect, test, waitForSpeccer } from './fixtures';

import type { Locator } from '@playwright/test';

/**
 * The number of tracks in the target's computed grid-template-columns/rows.
 */
const tracks = (target: Locator, property: 'columns' | 'rows') =>
  target.evaluate(
    (el, p) =>
      getComputedStyle(el)[
        p === 'columns' ? 'gridTemplateColumns' : 'gridTemplateRows'
      ].split(' ').length,
    property
  );

test.describe('grid', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/grid.html');
    await waitForSpeccer(page);
  });

  test('shows one item per row for "grid rows"', async ({ page }) => {
    const target = page.locator('#grid-example');
    const annotations = await annotationsFor(target);

    await expect(target).toHaveAttribute('data-speccer', 'grid rows');
    await expect(annotations).toHaveClass(/speccer-grid-row-container/);
    await expect(annotations.locator('.speccer-grid-row-item')).toHaveCount(
      await tracks(target, 'rows')
    );
    await expect(page.locator('.speccer-grid-container')).toHaveCount(0);
  });

  test('toggles columns and rows on and off', async ({ page }) => {
    const target = page.locator('#grid-example');
    const toggleColumns = page.locator('#toggle-columns');

    // grid rows -> grid (both)
    await toggleColumns.click();
    await expect(target).toHaveAttribute('data-speccer', 'grid');
    await expect(page.locator('.speccer-grid-item')).toHaveCount(
      await tracks(target, 'columns')
    );
    await expect(page.locator('.speccer-grid-row-item')).toHaveCount(
      await tracks(target, 'rows')
    );

    // grid -> no grid
    await toggleColumns.click();
    await expect(target).not.toHaveAttribute('data-speccer');
    await expect(
      page.locator('.speccer-grid-container, .speccer-grid-row-container')
    ).toHaveCount(0);
  });
});
