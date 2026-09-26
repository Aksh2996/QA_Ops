import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 40 * 1000,

  expect: {
    timeout: 40 * 1000
  },

  reporter: [
    ['html', { outputFolder: 'playwright-report' }]
  ],

  projects: [
    {
      name: 'chrome_test',

      use: {
        browserName: 'chromium',
        headless: false,

        video: 'on',
        screenshot: 'on',
        trace: 'on',

        viewport: {
          width: 720,
          height: 720
        }
      }
    }
  ]
});