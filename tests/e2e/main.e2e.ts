import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/@phun-ky\/speccer/);
});

test('has example required attributes for "mark"', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-speccer="mark"]').first().waitFor();

  expect(await page.locator('[data-speccer="mark"]').count()).toEqual(6);
});

test('has example required attributes after speccer has been called', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-speccer="mark"]').first().waitFor();
  await page.locator('[data-speccer-element-id]').first().waitFor();

  expect(await page.locator('[data-speccer-element-id]').count()).toBeGreaterThan(0);
});

test('has required generated attribute `data-speccer-element-id` after speccer has been called', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-speccer][data-speccer-element-id]').first().waitFor();

  const elements = page.locator('[data-speccer][data-speccer-element-id]');

  for (let i = 0; i < await elements.count(); i++) {
    expect(await elements.nth(i).getAttribute('data-speccer-element-id')).not.toBeNull();
    expect(await elements.nth(i).getAttribute('data-speccer-element-id')).not.toBe('');
  }
});

test('has required generated attribute `data-speccer-element-id` and matching element after speccer has been called', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-speccer][data-speccer-element-id]').first().waitFor();
  await page.locator('[data-speccer-id]').first().waitFor();

  const firstElement = page.locator('[data-speccer][data-speccer-element-id]').first();
  const matchingElementSelector = await firstElement.getAttribute('data-speccer-element-id');
  const matchingElement = page.locator(`#${matchingElementSelector}`);

  expect(matchingElement).toHaveCount(1);
  expect(await matchingElement.getAttribute('data-speccer-id')).not.toBeNull();
});


