import { annotationsFor, box, expect, test, waitForSpeccer } from './fixtures';

import type { Locator, Page } from '@playwright/test';

const TEXT_PINS = ['top', 'right', 'bottom', 'left']
  .map((side) => `[data-speccer="pin ${side} text"]`)
  .join(', ');

/**
 * Checks that the centre of every text pin is outside its pin-area on the
 * requested side, and lined up with its target along that side.
 *
 * Top pins are placed a fixed distance above the pin-area, so a tall pin can
 * overlap its edge a little; hence the centre rather than the edge.
 */
const expectTextPinsBesideTheirPinArea = async (page: Page) => {
  const targets = page.locator(TEXT_PINS);

  expect(await targets.count()).toBeGreaterThan(0);

  for (const target of await targets.all()) {
    const area = (await target.getAttribute('data-speccer')) as string;
    const pinArea: Locator = target.locator(
      'xpath=ancestor::*[@data-speccer="pin-area"][1]'
    );
    const a = await box(pinArea);
    const t = await box(target);
    const p = await box(await annotationsFor(target));

    const center = { x: p.x + p.width / 2, y: p.y + p.height / 2 };
    const vertical = area.includes('top') || area.includes('bottom');

    if (area.includes('top')) expect(center.y, area).toBeLessThan(a.y);
    else if (area.includes('bottom'))
      expect(center.y, area).toBeGreaterThan(a.y + a.height);
    else if (area.includes('left')) expect(center.x, area).toBeLessThan(a.x);
    else expect(center.x, area).toBeGreaterThan(a.x + a.width);

    expect(
      vertical
        ? Math.abs(center.x - (t.x + t.width / 2))
        : Math.abs(center.y - (t.y + t.height / 2)),
      `${area}: lined up with the target`
    ).toBeLessThanOrEqual(2);
  }
};

test.describe('pin text', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/pin-text.html');
    await waitForSpeccer(page);
  });

  test('shows the title and description of the target', async ({ page }) => {
    const targets = page.locator(TEXT_PINS);

    for (const target of await targets.all()) {
      const pin = await annotationsFor(target);
      const title = (await target.getAttribute('data-speccer-title')) as string;
      const description = await target.getAttribute('data-speccer-description');

      await expect(pin.locator('.title')).toHaveText(title);

      if (description)
        // Line breaks are written as \n in the attribute
        await expect(pin.locator('.description')).toContainText(
          description.split('\\n')[0]
        );
    }
  });

  test('places text pins beside their pin-area', async ({ page }) => {
    await expectTextPinsBesideTheirPinArea(page);
  });

  // https://github.com/phun-ky/speccer/issues/368
  test('places text pins correctly when re-rendered on a scrolled page', async ({
    page
  }) => {
    await page.locator('#pin-text-top-bottom').scrollIntoViewIfNeeded();
    expect(await page.evaluate(() => window.scrollY)).toBeGreaterThan(0);

    // Tag the current pins, so we can tell when they have been replaced
    await page
      .locator('.ph-speccer.speccer.pin.text')
      .evaluateAll((els) => els.forEach((el) => (el.dataset.stale = 'true')));

    // Resizing re-renders all annotations, at the current scroll position
    await page.setViewportSize({ width: 1100, height: 720 });
    await expect(page.locator('[data-stale]')).toHaveCount(0);
    await waitForSpeccer(page);

    expect(await page.evaluate(() => window.scrollY)).toBeGreaterThan(0);
    await expectTextPinsBesideTheirPinArea(page);
  });
});
