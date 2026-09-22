import { test, expect } from '@playwright/test';

test.describe('Login Page', () => {

    test('valid credentials', async ({ page }) => {
        await page.goto("https://app.thetestingacademy.com/playwright/");
    });
    test('invalid password', async ({ page }) => {
        await page.goto("https://app.thetestingacademy.com/playwright/");
    });

    test.fixme('checkout1 with PayPal', async ({ page }) => {
        // never executes
    });

    test.skip('checkout2 with PayPal', async ({ page }) => {
        // never executes
    });
    // test.only('checkout with PayPal2', async ({ page }) => {
    //     // which
    // });
})

// npx playwright test -g "Login Page"