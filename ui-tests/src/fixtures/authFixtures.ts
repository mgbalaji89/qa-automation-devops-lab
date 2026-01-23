import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TestData } from '../utils/testData';
import { Logger } from '../utils/logger';

type AuthFixtures = {
  authPage: any;
};

export const test = base.extend<AuthFixtures>({
  authPage: async ({ page }, use) => {
    Logger.info('Executing login fixture');

    const loginPage = new LoginPage(page);
    const user = TestData.login.validUser;

    await loginPage.navigate();
    await loginPage.login(user.username, user.password);

    // ✅ provide authenticated page to test
    await use(page);
  },
});

export { expect };
