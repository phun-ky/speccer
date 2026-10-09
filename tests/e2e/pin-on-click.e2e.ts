import { annotationsFor, box, expect, expectSameBox, test } from './fixtures';

import type { Page } from '@playwright/test';

/**
 * Picks an option in the form, through its label like a user would.
 */
const choose = (page: Page, id: string) =>
  page.locator(`label[for="${id}"]`).click();

// This page uses pin.pinElement() from the ESM build instead of data-speccer
test.describe('pin on click', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/pin-on-click.html');
  });

  test('pins a box when clicked, and unpins it when clicked again', async ({
    page
  }) => {
    const target = page.locator('.ph.box').first();

    await target.click();
    await expect(target).toHaveClass(/\bis-specced\b/);

    const pin = await annotationsFor(target);

    await expect(pin).toHaveText('🥰');
    // Pins go on top by default. The pin is positioned after it is added, so
    // wait for it to get there
    await expect
      .poll(async () => {
        const p = await box(pin);

        return p.y + p.height;
      })
      .toBeLessThanOrEqual((await box(target)).y + 1);

    await target.click();
    await expect(target).not.toHaveClass(/\bis-specced\b/);
    await expect(pin).toHaveCount(0);
  });

  test('uses the position chosen in the form', async ({ page }) => {
    const target = page.locator('.ph.box').first();

    await choose(page, 'pin-position-bottom');
    await target.click();

    const pin = await annotationsFor(target);
    const t = await box(target);

    await expect
      .poll(async () => (await box(pin)).y)
      .toBeGreaterThanOrEqual(t.y + t.height - 1);
  });

  test('encloses the box when "enclose" is chosen', async ({ page }) => {
    const target = page.locator('.ph.box').first();

    await choose(page, 'pin-type-enclose');
    await target.click();

    const pin = await annotationsFor(target);

    await expect(pin).toHaveClass(/\benclose\b/);
    await expectSameBox(pin, target);
  });

  test('draws and removes curly brackets', async ({ page }) => {
    const target = page.locator('.ph.box').first();
    const paths = async () =>
      page
        .locator(
          `#ph-speccer-svg path[data-start-el="${await target.getAttribute('id')}"]`
        )
        .count();

    await choose(page, 'pin-type-bracket');
    await choose(page, 'pin-curly');
    await target.click();

    await expect(await annotationsFor(target)).toHaveClass(/\bcurly\b/);
    await expect.poll(paths).toBe(2);

    await target.click();
    await expect.poll(paths).toBe(0);
  });
});
