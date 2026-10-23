import { test, expect } from "@playwright/test";

const pageURL="https://app.thetestingacademy.com/playwright/tables/practice.html";

test.describe("Expect Assertion Methods: ", () => {

   test.beforeEach(async ({ page }) => {
      await page.goto(pageURL);
   });

   test("Visible · enabled · disabled · checked Assertions:  ", async ({ page }) => {

      const automationCheckBox = page.getByRole('checkbox', {name : /UFT/ });
      await automationCheckBox.check();
      await expect(automationCheckBox).toBeChecked();


      const submitButton = page.locator('#profile-submit');
      await expect(submitButton).toBeVisible();
      await expect(submitButton).toBeEnabled();

      await expect(page).toHaveTitle(/QA Profile/);

      const apURL = page.url();
      expect(apURL).toContain("thetestingacademy");

      await page.pause();
      
   });
});
