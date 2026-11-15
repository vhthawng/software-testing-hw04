import path from 'node:path';
import { defineConfig, devices } from '@playwright/test';
import sut from './scripts/sut-paths.json';

const runtime = path.resolve(__dirname, sut.runtimeDirectory);

export default defineConfig({
  testDir: './tests',
  workers: 1,
  retries: 0,
  forbidOnly: true,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: sut.webURL,
    actionTimeout: 10_000,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'chrome', use: { ...devices['Desktop Chrome'], channel: 'chrome' } },
    { name: 'edge', use: { ...devices['Desktop Edge'], channel: 'msedge' } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  ],
  webServer: [
    {
      command: 'node server.js',
      cwd: path.join(runtime, 'backend'),
      url: `${sut.backendURL}/api/categories`,
      reuseExistingServer: false,
    },
    {
      command: 'npm run dev -- --host localhost --port 5173 --strictPort',
      cwd: path.join(runtime, 'frontend-web'),
      url: sut.webURL,
      reuseExistingServer: false,
    },
    {
      command: 'npm run dev -- --host localhost --port 5174 --strictPort',
      cwd: path.join(runtime, 'frontend-admin'),
      url: sut.adminURL,
      reuseExistingServer: false,
    },
  ],
});
