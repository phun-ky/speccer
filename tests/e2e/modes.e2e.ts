import { annotationsFor, box, expect, expectSameBox, test } from './fixtures';

import type { Page } from '@playwright/test';

/**
 * Tags all current annotations, resizes the viewport, and waits until every
 * tagged annotation has been replaced.
 */
const resizeAndWaitForRerender = async (page: Page) => {
  await page
    .locator('.ph-speccer.speccer')
    .evaluateAll((els) => els.forEach((el) => (el.dataset.stale = 'true')));
  await page.setViewportSize({ width: 600, height: 800 });
  await expect(page.locator('[data-stale]')).toHaveCount(0);
};

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

  // https://github.com/phun-ky/speccer/issues/71
  test('lazy: re-renders what is in view on resize, and keeps the rest lazy', async ({
    page
  }) => {
    await page.goto('/modes.html?mode=lazy');

    const target = page.locator('#mark-above');

    await expect((await annotationsFor(target)).first()).toBeAttached();
    await resizeAndWaitForRerender(page);

    const mark = await annotationsFor(target);

    await expect(mark).toHaveCount(1);
    await expectSameBox(mark, target);
    await expect(page.locator('#mark-below')).not.toHaveAttribute(
      'data-speccer-element-id'
    );

    // ...and still renders the rest when it is scrolled into view
    await page.locator('#below-the-fold').scrollIntoViewIfNeeded();
    await expect(await annotationsFor(page.locator('#mark-below'))).toHaveCount(
      1
    );
  });

  test('lazy: re-renders elements scrolled into view on resize, once', async ({
    page
  }) => {
    await page.goto('/modes.html?mode=lazy');
    await page.locator('#below-the-fold').scrollIntoViewIfNeeded();

    const target = page.locator('#pin-below');

    await expect((await annotationsFor(target)).first()).toBeAttached();
    await resizeAndWaitForRerender(page);

    const pin = await annotationsFor(target);

    await expect(pin).toHaveCount(1);
    await expect
      .poll(async () => {
        const p = await box(pin);

        return p.y + p.height;
      })
      .toBeLessThanOrEqual((await box(target)).y + 1);
    await expect(await annotationsFor(page.locator('#mark-below'))).toHaveCount(
      1
    );
  });

  test('exposes lazy and rerenderLazy in the ESM build', async ({ page }) => {
    await page.goto('/modes.html?mode=manual');

    const types = await page.evaluate(async () => {
      // A variable, so TypeScript doesn't try to resolve the browser URL
      const url = '/speccer.esm.js';
      const { modes } = await import(url);

      return [typeof modes.lazy, typeof modes.rerenderLazy];
    });

    expect(types).toEqual(['function', 'function']);
  });
});
