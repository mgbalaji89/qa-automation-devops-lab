import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './src/tests',
  timeout: 30 * 1000,
  retries: 1,
  reporter: [['list'], ['allure-playwright'],['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {
    baseURL: process.env.BASE_URL,
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  }
  projects: [
  {
    name: 'Chromium',
    use: { ...devices['Desktop Chrome'] },
    outputDir: 'test-results/chromium'
  },
  {
    name: 'Firefox',
    use: { ...devices['Desktop Firefox'] },
    outputDir: 'test-results/firefox'
  },
  {
    name: 'WebKit',
    use: { ...devices['Desktop Safari'] },
    outputDir: 'test-results/webkit'
  }
]
});
