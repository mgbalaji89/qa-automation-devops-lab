import { Page, Locator } from '@playwright/test';
import { Logger } from '../utils/logger';

export class LoginPage {
  private page: Page;
  private username: Locator;
  private password: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async navigate() {
    Logger.step('Navigating to SauceDemo login page');
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(user: string, pass: string) {
    Logger.step('Entering username');
    await this.username.fill(user);

    Logger.step('Entering password');
    await this.password.fill(pass);

    Logger.step('Clicking login button');
    await this.loginButton.click();
  }
}

