import { annotationsFor, expect, test, waitForSpeccer } from './fixtures';

const SIDES = ['top', 'right', 'bottom', 'left'] as const;

test.describe('spacing', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/spacing.html');
    await waitForSpeccer(page);
  });

  test('shows the computed padding and margin of each side', async ({
    page
  }) => {
    const target = page.locator('[data-speccer="spacing"]').first();
    const annotations = await annotationsFor(target);
    const shown = await annotations.evaluateAll((els) =>
      els.map((el) => ({ classes: [...el.classList], text: el.textContent }))
    );
    const computed = await target.evaluate((el) => {
      const style = getComputedStyle(el);

      return {
        padding: [
          style.paddingTop,
          style.paddingRight,
          style.paddingBottom,
          style.paddingLeft
        ],
        margin: [
          style.marginTop,
          style.marginRight,
          style.marginBottom,
          style.marginLeft
        ]
      };
    });

    expect(shown.length).toBeGreaterThan(0);

    for (const { classes, text } of shown) {
      const type = classes.includes('padding') ? 'padding' : 'margin';
      const side = SIDES.findIndex((s) => classes.includes(s));

      expect(side, `side class in ${classes.join('.')}`).toBeGreaterThan(-1);
      expect(text).toBe(`${parseInt(computed[type][side], 10)}px`);
    }
  });

  test('annotates the children of a spacing target too', async ({ page }) => {
    const target = page
      .locator('[data-speccer="spacing"]:has([data-speccer-element-id])')
      .first();
    const children = target.locator('[data-speccer-element-id]');

    expect(await children.count()).toBeGreaterThan(0);

    for (const child of await children.all()) {
      await expect((await annotationsFor(child)).first()).toBeAttached();
    }
  });

  test('only shows padding for "spacing padding"', async ({ page }) => {
    const target = page.locator('[data-speccer="spacing padding"]').first();
    const annotations = await annotationsFor(target);

    await expect(annotations.first()).toBeAttached();
    await expect(annotations.and(page.locator('.margin'))).toHaveCount(0);
  });

  test('marks annotations as bound for "spacing bound"', async ({ page }) => {
    // The wrapper has no spacing itself, so only its children are annotated
    const targets = page.locator(
      '[data-speccer="spacing bound"][data-speccer-element-id]'
    );

    expect(await targets.count()).toBeGreaterThan(0);

    for (const target of await targets.all()) {
      for (const annotation of await (await annotationsFor(target)).all()) {
        await expect(annotation).toHaveClass(/\bbound\b/);
      }
    }
  });
});
