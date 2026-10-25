//https://app.thetestingacademy.com/playwright/multiple_element_filter.html

import { test, expect } from '@playwright/test';
// IMP: Divide your test into multiple steps, it will be better for your reporting, logs, debugging. 
// Using test.step() you can achive this


// test.step()- Playwright docs call it a "declared test step shown in the report." 
// It's categorized as a runtime test API (like test.info(), test.setTimeout(), test.use()), specifically a reporting/grouping primitive.
// Annotations → skip, fail, fixme, slow (change outcome/behaviour)
// Test APIs → test.step(), test.info(), test.setTimeout(), test.use() (runtime calls, don't annotate the result)

// Modifiers/declarations → only, describe.serial(), test.fixme(title, fn) (decide what runs, at collection time)
// Hooks → beforeAll, beforeEach, afterEach, afterAll
test('login form is reachable via steps', async ({ page }) => {
     await test.step('open practice page', async () => {
        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter.html');
     });

    await test.step('fields are visible', async () => {
        await expect(page.getByRole('textbox', { name: 'Email Address' })).toBeVisible();
        await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
    });

    await test.step('submit + assert it lands on #login-success', async () => {
        await page.getByRole('button', { name: /Login/i }).click();
        await expect(page).toHaveURL(/#login-success$/);
    });
});