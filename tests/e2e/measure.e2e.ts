import { annotationsFor, box, expect, test, waitForSpeccer } from './fixtures';

test.describe('measure', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/measure.html');
    await waitForSpeccer(page);
  });

  test('shows the width or height of each target', async ({ page }) => {
    const targets = page.locator('[data-speccer^="measure"]');

    expect(await targets.count()).toBeGreaterThan(0);

    for (const target of await targets.all()) {
      const area = (await target.getAttribute('data-speccer')) as string;
      const dimension = area.includes('height') ? 'height' : 'width';
      const measure = await annotationsFor(target);
      const size = (await box(target))[dimension];

      await expect(measure).toHaveCount(1);
      await expect(measure).toHaveClass(new RegExp(`\\b${dimension}\\b`));
      await expect(measure).toHaveAttribute(
        'data-measure',
        `${parseInt(String(size), 10)}px`
      );

      if (area.includes('slim')) await expect(measure).toHaveClass(/\bslim\b/);
    }
  });

  test('spans the target and sticks out on the requested side', async ({
    page
  }) => {
    const targets = page.locator('[data-speccer^="measure"]');

    for (const target of await targets.all()) {
      const area = (await target.getAttribute('data-speccer')) as string;
      const t = await box(target);
      const m = await box(await annotationsFor(target));
      // How far the measure sticks out past each edge of the target
      const overflow = {
        top: t.y - m.y,
        bottom: m.y + m.height - (t.y + t.height),
        left: t.x - m.x,
        right: m.x + m.width - (t.x + t.width)
      };
      const side = (['top', 'bottom', 'left', 'right'] as const).find((s) =>
        area.split(' ').includes(s)
      );

      expect(side, area).toBeDefined();

      // Same extent as the target along the measured dimension
      if (area.includes('width')) {
        expect(Math.abs(m.x - t.x), area).toBeLessThanOrEqual(1);
        expect(Math.abs(m.width - t.width), area).toBeLessThanOrEqual(1);
      } else {
        expect(Math.abs(m.y - t.y), area).toBeLessThanOrEqual(1);
        expect(Math.abs(m.height - t.height), area).toBeLessThanOrEqual(1);
      }

      // Past the requested edge, and not past any other
      for (const [edge, value] of Object.entries(overflow)) {
        if (edge === side) expect(value, area).toBeGreaterThan(0);
        else expect(value, `${area}: ${edge}`).toBeLessThanOrEqual(1);
      }
    }
  });
});
