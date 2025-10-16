
  
  import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading')).toContainText('Dashboard');
  await page.getByRole('link', { name: 'Admin' }).click();
  await expect(page.getByRole('banner')).toContainText('User Management');
  await page.getByRole('button', { name: ' Add' }).click();
  await expect(page.locator('#app')).toContainText('Add User');
  await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
  await page.getByRole('option', { name: 'Admin' }).click();
  await page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
  await page.getByRole('option', { name: 'Enabled' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('T');
  await page.getByText('Timothy Lewis Amiano').click();
  await page.getByRole('textbox').nth(2).click();

  const d = new Date();
  let ms = d.getMilliseconds();

  const ExpUserName = 'goutham' + ms;

  await page.getByRole('textbox').nth(2).fill(ExpUserName);
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('admin123');
  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill('admin123');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(5000)
  await expect(page.locator("//div[text()='"+ExpUserName+"']")).toContainText(ExpUserName)

  
  await page.locator('div:nth-child(37) > .oxd-table-row > div:nth-child(6) > .oxd-table-cell-actions > button:nth-child(2)').click();
  await page.getByText('Enabled').click();
  await page.getByText('Disabled').click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('r');
  await page.getByText('Ranga Akunuri').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(5000)
  await expect(page.locator('div:nth-child(39) > .oxd-table-row > div:nth-child(4) > div')).toBeVisible();
  await expect(page.getByText('Disabled').nth(2)).toBeVisible();
});


//   await expect(page.getByRole('table')).toContainText('goutham');


