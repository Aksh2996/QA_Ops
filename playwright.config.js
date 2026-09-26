// @ts-check
import { defineConfig, devices } from '@playwright/test';
/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout:40*1000,//test timeout
  workers:5,
  expect:
  {timeout:40 *1000},
  reporter: [['html', { outputFolder: 'playwright-report' }],['allure-playwright']
],
  use: {
actionTimeout:10*1000,
navigationTimeout:20*1000,
browserName:'chromium',
headless:true,
screenshot:'on',
trace:'on'
  },
  });
