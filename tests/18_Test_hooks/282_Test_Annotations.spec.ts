import { test, expect } from "@playwright/test";
// Annotations 
// Annotations (skip, fail, fixme, slow) modify the test's outcome/behavior — they set state on testInfo (skip it, expect failure, triple timeout).
// Annotations → skip, fail, fixme, slow (change outcome/behaviour)
const pageURL="https://app.thetestingacademy.com/playwright/multiple_element_filter.html";

   test("title test", async ({ page, browserName }) => {

      // conditional in-test skip - 
      // Skips the test only when running on Firefox
      test.skip(browserName === 'firefox', 'Feature not yet supported in firefox');
      await page.goto(pageURL);
      await expect(page).toHaveTitle(/Multiple Element Filter/, { timeout : 5000 });
   });

   test('email is visible (slow on firefox)', async ({ page, browserName }) => {

      // conditional slow
      // Triples the timeout on Firefox (marks test as slow)
       test.slow(browserName === 'firefox', 'firefox is slow on this layout');
      await page.goto(pageURL);
      await expect(page.getByRole('textbox', { name: 'Email Address' })).toBeVisible();
   });


   // declaration annotation -
   // Registers test but marks it as expected-to-be-fixed; it won't execute and shows as "fixme"
   test.fixme('password is visible — broken in Safari, fix me', async ({ page }) => {
      await page.goto(pageURL);
      await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
   });

   test('expected to fail until backend ships', async ({ page }) => {
      
      // runtime annotation-
      // Test is expected to fail; passes only if the assertion actually fails
      test.fail();
       await page.goto(pageURL);
       await expect(page.getByText('New customer area', { exact: true })).toBeVisible();
   });
