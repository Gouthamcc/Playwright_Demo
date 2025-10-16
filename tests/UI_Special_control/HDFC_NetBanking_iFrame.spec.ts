import { test, expect } from '@playwright/test';

test('test - Frame', async ({ page }) => {
  await page.goto('https://netbanking.hdfcbank.com/netbanking/');
  const frameLocator = page.frameLocator('frame[name="login_page"]');
  await frameLocator.locator('input[name="fldLoginUserId"]').click();
  await frameLocator.locator('input[name="fldLoginUserId"]').fill('1000');
  await frameLocator.locator('a:has-text("CONTINUE")').click();
  // Wait for navigation after clicking CONTINUE
  await page.waitForURL('https://netportal.hdfcbank.com/nb-login/login.jsp', { timeout: 10000 });
  await expect(page).toHaveURL('https://netportal.hdfcbank.com/nb-login/login.jsp');
  await page.waitForTimeout(5000); // Thread.sleep(5000)

});

test.skip('test- Without Frame/iFrame', async ({ page }) => {
  await page.goto('https://netbanking.hdfcbank.com/netbanking/');
  await page.waitForLoadState('load');
  // The following will fail because the input is inside an iframe
  // await page.click('input[name="fldLoginUserId"]');
  // await page.fill('input[name="fldLoginUserId"]', '1000');
  // await page.click('text=CONTINUE');
  // await expect(page).toHaveURL('https://netportal.hdfcbank.com/nb-login/login.jsp');
  // await page.waitForTimeout(5000)
  // This test is intentionally skipped because it does not handle the iframe

});