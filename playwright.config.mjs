/* eslint-disable no-undef */
import { defineConfig, devices } from '@playwright/test';

const PORT = 3000;

/**
 * See https://playwright.dev/docs/test-configuration.
 *
 * The tests run against the pages in `dev/` and the build in `dist/`, so run
 * `npm run build` first (`npm run test:e2e` does that for you).
 */
export default defineConfig({
  testDir: './tests/e2e',
  testMatch: '**/*.e2e.ts',
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  /* The HTML report is uploaded as an artifact on CI */
  reporter: process.env.CI
    ? [['dot'], ['html', { open: 'never' }]]
    : [['list']],
  /* Annotations are drawn over several animation frames, which takes longer on a busy machine */
  expect: { timeout: 10_000 },
  use: {
    baseURL: `http://127.0.0.1:${PORT}`,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    }
  ],
  webServer: {
    command: `node tests/e2e/server.mjs ${PORT}`,
    url: `http://127.0.0.1:${PORT}`,
    reuseExistingServer: !process.env.CI
  }
});
