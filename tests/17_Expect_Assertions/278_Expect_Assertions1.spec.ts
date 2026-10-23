import { test, expect } from "@playwright/test";

// ## Value Assertions (non-retrying, synchronous)

const pageURL="https://app.thetestingacademy.com/playwright/widgets/scroll";

test.describe("Expect methods", () => {

   test.beforeEach(async ({ page }) => {
      await page.goto(pageURL);
   });

   test("Few Value Assertions: ", async ({ page }) => {
      expect(1+2).toBe(3);
      let ac = false;
      // NOTE: expect matchers return undefined on pass and THROW on fail.
      // So wrapping them in console.log() always prints undefined when assertion passes
      console.log(expect(ac).toBeFalsy());
      expect(true).toBeTruthy();
      expect(null).toBeNull();
      console.log(expect(34).toBeGreaterThan(15));
      expect([1, 2, 3]).toEqual([1, 2, 3]); // Deep equality — same shape and values, ignoring key order.
      expect({ role: 'admin' }).toEqual({ role: 'admin' }); // 
      expect({ age: 20, role: 'admin' }).toEqual({ role: 'admin', age: 20 });


   });
});
