// Test Hooks
// test.beforeAll()	- Once before all tests in its scope
// test.beforeEach() - Before every test in its scope
// test.afterEach()	- After every test in its scope
// test.afterAll()	- Once after all tests in its scope

// Order: beforeAll → (beforeEach → test → afterEach) × N → afterAll.
// Per worker: beforeAll runs once per worker process, not once per whole run — with 
// fullyParallel/multiple workers it can execute multiple times. Use test.describe.configure({ mode: 'serial' }) when shared state matters.

import {test, expect} from '@playwright/test';

test.beforeAll(async () => {
    // Here not using "PAGE":
    // beforeAll runs outside any individual test's lifetime, so there is no test to attach a page to. 
    // The hook only gets worker-scoped fixtures, and page/context/request are not among them:
    // Worker-scoped (once per worker): browser, browserName, playwright → available in beforeAll too
    
    // run once per worker — e.g. seed test data, spin a docker container
    console.log('Before All - Server is up');
});

test.beforeEach( async ({page}) => {
    // Here using "PAGE":
    // Because page is a test-scoped fixture — Playwright creates a fresh page (and its context) 
    // for every individual test and destroys it when that test ends.
    // Test-scoped (every test): page, context, request → available in beforeEach, afterEach, test body only

    // run before every test — e.g. log in, seed cookies
    await page.goto('https://app.thetestingacademy.com/playwright/');
});

test('practice index has 47 cards', async ({ page }) => {
    await expect(page.locator('.index-card')).toHaveCount(47);
});

test('sidebar collapse button works', async ({ page }) => {
    await page.getByLabel('Toggle sidebar').first().click();
    await expect(page.locator('.tta-shell')).toHaveAttribute('data-sidebar-collapsed', 'true');
});

test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
        await page.screenshot({ path: `out/fail-${testInfo.title}.png`, fullPage: true });
    }
});

test.afterAll(async () => {
    console.log('afterAll — tear down');
});