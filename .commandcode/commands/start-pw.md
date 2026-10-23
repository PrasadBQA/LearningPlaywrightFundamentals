Create a new Playwright spec file with the exact content below (do not modify, add, or remove anything).

Numbering: scan all files matching tests/**/*.spec.ts, read the leading numeric prefix of each filename (for example 277 in 277_Abort_Signal_Scroll.spec.ts), find the highest number, and use highest + 1 as the new file's prefix.

Location (IMPORTANT): put the file in the same folder as the currently open/active file (the tests/<N>_... folder being worked in). Never put it at the repo root or directly under tests/. Use a different folder only when the user explicitly asks:
- /start-pw under <N> -> use the matching tests/<N>_* folder.
- An explicit path argument -> use that location.

Filename: <next-number>_<name>.spec.ts
- If a name argument is given, use it.
- Otherwise derive the name from the target folder by stripping its leading <number>_ (17_Expect_Assertions -> Expect_Assertions).

If the computed path already exists, increment the number again instead of overwriting.

Content:

```typescript
import { test, expect } from "@playwright/test";

const pageURL="";

test.describe("", () => {

   test.beforeEach(async ({ page }) => {
      await page.goto(pageURL);
   });

   test("", async ({ page }) => {

   });
});
```
