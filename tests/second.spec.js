const { test, expect } = require('@playwright/test');

test('Проверка заголовка страницы Playwright', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.waitForTimeout(1000);

  const pageTitle = await page.title();

  const expectedTitle =
    'Fast and reliable end-to-end testing for modern web apps | Playwright';

  expect(pageTitle).toBe(expectedTitle);
});
