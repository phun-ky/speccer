import { annotationsFor, expect, test } from './fixtures';

// See src/config/browser.ts for how the script tag attributes are handled
test.describe('activation modes', () => {
  for (const mode of ['', 'dom', 'instant']) {
    test(`${mode || 'default'}: renders everything on load`, async ({
      page
    }) => {
      await page.goto(`/modes.html${mode ? `?mode=${mode}` : ''}`);

      for (const id of ['mark-above', 'mark-below', 'pin-below'])
        await expect(
          (await annotationsFor(page.locator(`#${id}`))).first()
        ).toBeAttached();
    });
  }

  test('manual: renders nothing until window.speccer() is called', async ({
    page
  }) => {
    await page.goto('/modes.html?mode=manual');

    // The UMD build exposes its exports as window.speccer, which manual mode
    // replaces with the speccer function
    await expect
      .poll(() => page.evaluate(() => typeof window.speccer))
      .toBe('function');
    await expect(page.locator('.ph-speccer.speccer')).toHaveCount(0);

    await page.getByRole('button', { name: 'Run speccer()' }).click();

    await expect(
      (await annotationsFor(page.locator('#mark-above'))).first()
    ).toBeAttached();
  });

  test('manual: does not re-render on resize', async ({ page }) => {
    await page.goto('/modes.html?mode=manual');
    await page.getByRole('button', { name: 'Run speccer()' }).click();

    const mark = await annotationsFor(page.locator('#mark-above'));

    await mark.evaluate((el) => (el.dataset.stale = 'true'));
    await page.setViewportSize({ width: 600, height: 800 });
    // Longer than the 300ms resize debounce in the other modes
    await page.waitForTimeout(1000);

    await expect(page.locator('[data-stale]')).toHaveCount(1);
  });

  test('lazy: renders elements when they are scrolled into view', async ({
    page
  }) => {
    await page.goto('/modes.html?mode=lazy');

    await expect(
      (await annotationsFor(page.locator('#mark-above'))).first()
    ).toBeAttached();
    await expect(page.locator('#mark-below')).not.toHaveAttribute(
      'data-speccer-element-id'
    );
    await expect(page.locator('#pin-below')).not.toHaveAttribute(
      'data-speccer-element-id'
    );

    await page.locator('#below-the-fold').scrollIntoViewIfNeeded();

    for (const id of ['mark-below', 'spacing-below', 'pin-below'])
      await expect(
        (await annotationsFor(page.locator(`#${id}`))).first()
      ).toBeAttached();
  });
});
