import { test, expect } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

const VWO_USER = process.env.VWO_USER ?? "";
const VWO_PASSWD = process.env.VWO_PASSWD ?? "";

// Reuse the saved session if it is still valid.
// If the app redirects to login, the test logs in again and refreshes the session file.
test.use({
  storageState: "./user-session.json",
});

test("reuse saved Wingify session or login again if expired", async ({ page }) => {
  await page.goto("https://app.wingify.com/#/dashboard?accountId=1281316");
  await page.waitForTimeout(2000);

  const loginVisible = await page.locator("#login-username").isVisible().catch(() => false);

  if (loginVisible) {
    console.log("Saved session expired or invalid. Logging in again...");

    await page.fill("#login-username", VWO_USER);
    await page.fill("#login-password", VWO_PASSWD);
    await page.click("#js-login-btn");

    await page.waitForURL(/#\/(dashboard|home)/, { timeout: 15000 });
    await page.context().storageState({ path: "./user-session.json" });

    console.log("Session refreshed and saved successfully ✅");
  } else {
    console.log("Saved session is still valid. Skipping login ✅");
  }

  await expect(page).toHaveURL(/dashboard/);
  await page.waitForTimeout(3000);
});

// Very short version

/*
const context = await browser.newContext({ storageState: "user-session.json" });
const page = await context.newPage();
await page.goto("https://app.wingify.com/#/dashboard");

const needsLogin = await page.locator("#login-username").isVisible().catch(() => true);
if (needsLogin) {
  // login again
}
  
*/