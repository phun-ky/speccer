import {
  annotationsFor,
  box,
  expect,
  expectSameBox,
  test,
  waitForSpeccer
} from './fixtures';

import type { Locator, Page } from '@playwright/test';

/**
 * The pin-areas whose pins all have the given type, e.g. `bracket curly`.
 * Pins without a type are matched by `pin left|top|bottom|right`.
 */
const areasWith = (page: Page, type: string): Locator =>
  page.locator('[data-speccer="pin-area"]').filter({
    has: page.locator(
      type ? `[data-speccer^="pin ${type} "]` : '[data-speccer="pin left"]'
    )
  });

/**
 * The visible content of a pin: its text, or the counter shown by brackets
 * and enclosures.
 */
const literalOf = async (pin: Locator): Promise<string> =>
  (await pin.getAttribute('data-pin-counter')) ??
  (await pin.textContent()) ??
  '';

/**
 * The number of SVG elements drawn for a target. The target gets its id while
 * the SVG is drawn, so it is read again on every poll.
 */
const svgCountFor = (page: Page, target: Locator, selector: string) =>
  expect.poll(async () => {
    const id = await target.getAttribute('id');

    return id
      ? page.locator(`#ph-speccer-svg ${selector}`.replace('$id', id)).count()
      : 0;
  });

const sideOf = (area: string) =>
  (['top', 'right', 'bottom', 'left'] as const).find((side) =>
    area.split(' ').includes(side)
  );

test.describe('pin', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/pin.html');
    await waitForSpeccer(page);
  });

  test('numbers the pins in each pin-area from A', async ({ page }) => {
    for (const area of await areasWith(page, '').all()) {
      const literals: string[] = [];

      for (const target of await area.locator('[data-speccer^="pin "]').all())
        literals.push(await literalOf(await annotationsFor(target)));

      if ((await area.getAttribute('data-speccer-literals')) === null)
        expect(literals).toEqual(['A', 'B', 'C', 'D']);
    }
  });

  test('uses the literals from data-speccer-literals', async ({ page }) => {
    const area = page.locator('[data-speccer-literals]').first();
    const custom = [
      ...((await area.getAttribute('data-speccer-literals')) as string)
    ];
    const literals: string[] = [];

    for (const target of await area.locator('[data-speccer^="pin "]').all())
      literals.push(await literalOf(await annotationsFor(target)));

    expect(literals).toEqual(custom.slice(0, literals.length));
  });

  test('places plain and subtle pins on the requested side', async ({
    page
  }) => {
    const targets = page.locator(
      '[data-speccer="pin left"], [data-speccer="pin top"], [data-speccer="pin bottom"], [data-speccer="pin right"], [data-speccer^="pin subtle"]'
    );

    expect(await targets.count()).toBeGreaterThan(0);

    for (const target of await targets.all()) {
      const area = (await target.getAttribute('data-speccer')) as string;
      const t = await box(target);
      const p = await box(await annotationsFor(target));
      const center = { x: p.x + p.width / 2, y: p.y + p.height / 2 };

      switch (sideOf(area)) {
        case 'top':
          expect(p.y + p.height, area).toBeLessThanOrEqual(t.y + 1);
          break;
        case 'bottom':
          expect(p.y, area).toBeGreaterThanOrEqual(t.y + t.height - 1);
          break;
        case 'left':
          expect(p.x + p.width, area).toBeLessThanOrEqual(t.x + 1);
          break;
        default:
          expect(p.x, area).toBeGreaterThanOrEqual(t.x + t.width - 1);
      }

      // ...and centred on the target along the other axis
      if (['top', 'bottom'].includes(sideOf(area) as string))
        expect(
          Math.abs(center.x - (t.x + t.width / 2)),
          area
        ).toBeLessThanOrEqual(2);
      else
        expect(
          Math.abs(center.y - (t.y + t.height / 2)),
          area
        ).toBeLessThanOrEqual(2);
    }
  });

  test('draws brackets along the edge of the target', async ({ page }) => {
    const targets = page.locator(
      '[data-speccer^="pin bracket"]:not([data-speccer*="curly"])'
    );

    expect(await targets.count()).toBeGreaterThan(0);

    for (const target of await targets.all()) {
      const area = (await target.getAttribute('data-speccer')) as string;
      const pin = await annotationsFor(target);
      const t = await box(target);
      const p = await box(pin);

      await expect(pin).toHaveClass(/\bbracket\b/);

      if (['top', 'bottom'].includes(sideOf(area) as string))
        expect(Math.abs(p.width - t.width), area).toBeLessThanOrEqual(1);
      else expect(Math.abs(p.height - t.height), area).toBeLessThanOrEqual(1);
    }
  });

  test('draws a curly bracket for each curly pin', async ({ page }) => {
    const targets = page.locator('[data-speccer*="curly"]');

    expect(await targets.count()).toBeGreaterThan(0);

    // A curly bracket is drawn as two paths
    for (const target of await targets.all())
      await svgCountFor(page, target, 'path[data-start-el="$id"]').toBe(2);
  });

  test('encloses the target for "pin enclose"', async ({ page }) => {
    const targets = page.locator('[data-speccer^="pin enclose"]');

    expect(await targets.count()).toBeGreaterThan(0);

    for (const target of await targets.all()) {
      const pin = await annotationsFor(target);

      await expect(pin).toHaveClass(/\benclose\b/);
      await expectSameBox(pin, target);
    }
  });

  test('aligns "pin parent" pins outside the pin-area, with a line and a dot', async ({
    page
  }) => {
    const targets = page.locator('[data-speccer^="pin parent"]');

    expect(await targets.count()).toBeGreaterThan(0);

    for (const target of await targets.all()) {
      const area = await box(
        target.locator('xpath=ancestor::*[@data-speccer="pin-area"][1]')
      );
      const p = await box(await annotationsFor(target));

      expect(p.x).toBeGreaterThanOrEqual(area.x + area.width);
      await svgCountFor(page, target, 'path[data-start-el="$id"]').toBe(1);
      await svgCountFor(page, target, 'circle[data-el="$id"]').toBe(1);
    }
  });
});
