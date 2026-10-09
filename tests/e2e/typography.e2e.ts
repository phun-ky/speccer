import { annotationsFor, box, expect, test, waitForSpeccer } from './fixtures';

test.describe('typography', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/typography.html');
    await waitForSpeccer(page);
  });

  test('shows the computed font styles of each target', async ({ page }) => {
    const targets = page.locator('[data-speccer^="typography"]');

    expect(await targets.count()).toBeGreaterThan(0);

    for (const target of await targets.all()) {
      const annotation = await annotationsFor(target);
      const { fontFamily, fontSize, fontWeight } = await target.evaluate(
        (el) => {
          const style = getComputedStyle(el);

          // A CSSStyleDeclaration can't be passed out of the page as a whole
          return {
            fontFamily: style.fontFamily,
            fontSize: style.fontSize,
            fontWeight: style.fontWeight
          };
        }
      );
      const firstFamily = fontFamily.split(',')[0].replaceAll('"', '').trim();

      await expect(annotation).toHaveCount(1);
      await expect(annotation).toContainText(firstFamily);
      await expect(annotation).toContainText(`${parseInt(fontSize, 10)}`);
      await expect(annotation).toContainText(`font-weight: ${fontWeight}`);
    }
  });

  test('highlights the syntax for "typography syntax"', async ({ page }) => {
    const targets = page.locator('[data-speccer^="typography syntax"]');

    expect(await targets.count()).toBeGreaterThan(0);

    for (const target of await targets.all()) {
      const annotation = await annotationsFor(target);

      await expect(annotation).toHaveClass(/\bsyntax\b/);
      await expect(annotation.locator('.token.property').first()).toBeVisible();
    }
  });

  test('places the annotation on the requested side', async ({ page }) => {
    const targets = page.locator(
      '[data-speccer^="typography"]:is([data-speccer$="left"], [data-speccer$="right"])'
    );

    expect(await targets.count()).toBeGreaterThan(0);

    for (const target of await targets.all()) {
      const area = (await target.getAttribute('data-speccer')) as string;
      const t = await box(target);
      const a = await box(await annotationsFor(target));

      if (area.endsWith('left'))
        expect(a.x + a.width, area).toBeLessThanOrEqual(t.x + 1);
      else expect(a.x, area).toBeGreaterThanOrEqual(t.x + t.width - 1);
    }
  });
});
