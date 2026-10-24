import { test, expect } from '@playwright/test';

// It's a serial-mode + tagging demo on https://app.vwo.com:

// test.describe.configure({ mode: 'serial' }) is called at the file's top level, 
// so it configures every test in the file — including TC01/TC02 declared above it, 
// because the config applies to the enclosing suite, not to lines that follow. 
// So all 8 tests run in declaration order in one worker:
// TC01 → TC02 → P1 → P2 → P3 → Login(@p1) → Profile(@p2) → Settings(@p3)
// If any one fails, the rest are skipped; a retry restarts the whole file's group.

// @p1, @p2, @p3, @smoke are just text in the test title. Playwright doesn't interpret them — they're for filtering with grep:s

test('TC01 - Login should work', async ({ page }) => {
  await page.goto('https://app.vwo.com');
});

test('TC02 - Dashboard should open', async ({ page }) => {
  await page.goto('https://app.vwo.com');
});


test.describe.configure({ mode: 'serial' });

test('Priority 1 - Login test', async ({ page }) => {
  await page.goto('https://app.vwo.com');
});

test('Priority 2 - Dashboard test', async ({ page }) => {
  await page.goto('https://app.vwo.com');
});

test('Priority 3 - Logout test', async ({ page }) => {
  await page.goto('https://app.vwo.com');
});


test('Login test @p1 @smoke', async ({ page }) => {
  await page.goto('https://app.vwo.com');
});

test('Profile test @p2', async ({ page }) => {
  await page.goto('https://app.vwo.com');
});

test('Settings test @p3', async ({ page }) => {
  await page.goto('https://app.vwo.com');
});

// npx playwright test --grep @p1

