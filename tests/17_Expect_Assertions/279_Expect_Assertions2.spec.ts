import { test, expect } from "@playwright/test";

// ## Locator Assertions (auto-retrying, `await` required)

const pageURL="https://app.thetestingacademy.com/playwright/multiple_element_filter.html";

test.describe("", () => {

   test.beforeEach(async ({ page }) => {
      await page.goto(pageURL);
   });

   test("Few Locator Assertions: ", async ({ page }) => {

      const heading = page.getByText('multiple element filters', { exact: true });
      await expect(heading).toBeVisible();
        await expect(heading).toContainText('filter', { timeout: 10000 });

        const email = page.getByRole('textbox', { name: 'Email Address' });
        await expect(email).toHaveAttribute('id', 'email');
        await expect(email).toHaveAttribute('type', 'email');
        await expect(email).toHaveAttribute('placeholder', 'student@thetestingacademy.com');


        const footerLinks = page.locator('footer a');
        await expect(footerLinks).toHaveCount(16);

   });
});
