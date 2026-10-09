import {
  annotationsFor,
  box,
  expect,
  expectSameBox,
  test,
  waitForSpeccer
} from './fixtures';

test.describe('mark', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/mark.html');
    await waitForSpeccer(page);
  });

  test('covers each target with one mark', async ({ page }) => {
    const targets = page.locator('[data-speccer="mark"]');

    await expect(targets).toHaveCount(3);

    for (const target of await targets.all()) {
      const mark = await annotationsFor(target);

      await expect(mark).toHaveCount(1);
      await expect(mark).toHaveClass(/\bmark\b/);
      await expectSameBox(mark, target);
    }
  });

  test('is redrawn over its target when the viewport is resized', async ({
    page
  }) => {
    const target = page.locator('[data-speccer="mark"]').first();
    const before = await box(target);

    // Tag the current mark, so we can tell when it has been replaced
    await (
      await annotationsFor(target)
    ).evaluate((el) => {
      el.dataset.stale = 'true';
    });
    await page.setViewportSize({ width: 600, height: 800 });

    // The layout has to change for this test to mean anything
    expect((await box(target)).width).not.toBe(before.width);
    await expect(page.locator('[data-stale]')).toHaveCount(0);

    // Targets without an id get a new generated id on every render
    await expectSameBox(await annotationsFor(target), target);
    await expect(page.locator('.ph-speccer.speccer.mark')).toHaveCount(3);
  });
});
