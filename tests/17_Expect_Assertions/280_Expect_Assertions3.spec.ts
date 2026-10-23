import { test, expect } from "@playwright/test";

const pageURL="https://app.thetestingacademy.com/playwright/tables/practice.html";

test.describe("Expect Assertion Methods: ", () => {

   test.beforeEach(async ({ page }) => {
      await page.goto(pageURL);
   });

   test("Soft and Hard Assertions: ", async ({ page }) => {

      let firstName = page.getByText("First name", { exact : true });

      // Soft : Each line records its own failure. test continue either way.
      // Locator assertions
      await expect.soft(firstName).toHaveAttribute('id', 'first-name');
      await expect.soft(firstName).toBeVisible();
      await expect.soft(firstName).toHaveValue('');


      // Hard
      // Final hard assertion still runs after the soft block.
      // Locator Assertion in Hard Mode.
      await expect(firstName).toBeEnabled();
      // this line will not execute if above line/assertion fails
      await page.goto('https://app.thetestingacademy.com/playwright/webtable.html');
      // Locator Assertions with ".not" modifier
      await expect(page.locator('#error')).not.toBeVisible();

      let title = await page.title();
      //  so toContain here is the value assertion, not the locator one. It evaluates once and never retries.
      expect(title).not.toContain('error');
   });
});
