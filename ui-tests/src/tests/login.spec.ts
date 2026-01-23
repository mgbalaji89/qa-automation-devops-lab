import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TestData } from '../utils/testData';
import { Logger } from '../utils/logger';
import { allure } from 'allure-playwright';

test('Valid login test - SauceDemo', async ({ page }) => {
  Logger.info('Starting SauceDemo login test');
  await allure.feature('Login');
  await allure.story('Valid User Login');
  await allure.severity('critical');

  const loginPage = new LoginPage(page);
  const user = TestData.login.validUser;

  await loginPage.navigate();
  await loginPage.login(user.username, user.password);

  Logger.step('Validating successful login');
  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.locator('.inventory_list')).toBeVisible();

  Logger.info('SauceDemo login test completed successfully');
});
