import { chromium } from "playwright";
import dotenv from "dotenv"; // to fetch data from .env
// install dotenv library from "https://www.npmjs.com/package/dotenv"
// npm install dotenv --save

dotenv.config();
// Credentials live in .env (gitignored) — never hardcode them in a public repo.

const VWO_USER = process.env.VWO_USER ?? "";
const VWO_PASSWD = process.env.VWO_PASSWD ?? "";

// @playwright/test -->
// has already created browser, browser context, page. You don't have to create by your self, you use the existing one

// playwright -->
// You have to create(BCP) browser, browser context, page

async function saveSession() {

    // WingifyPasswd@123
    // jjn10tqw@1sec.email

    let browser = await chromium.launch({headless: false});
    let browserContext = await browser.newContext();
    let page = await browserContext.newPage();

    await page.goto("https://app.wingify.com/#/login");
    await page.waitForTimeout(2000);

    await page.fill("#login-username", VWO_USER);
    await page.fill("#login-password", VWO_PASSWD);
    await page.waitForTimeout(1500);

    await page.click("#js-login-btn");
    await page.waitForURL(/#\/(dashboard|home)/, { timeout: 15000 });
    await page.waitForTimeout(3000);

    await browserContext.storageState({ path: "./user-session.json" });
// you don't want to store the info of a page. You WANT To store the info of CONTeXT
    console.log("Session saved to user-session.json ✅");

    await browser.close();

}

saveSession();

// First run this file, it'll store session data in ./user-session.json
// npx tsx .\tests\04_Session_Storage\233_SessionStorage.ts
// THEN next you can use this session and skip the login 


// HOW LONG this stored session is valid?
// For a stored Playwright session, the valid time is not controlled by Playwright itself. It depends on the website’s own session rules.
// It can be: few minutes, a few hours, a day or more
// sometimes until the browser is closed or the cookie expires
// So the real answer is:

// The session remains valid only as long as the application’s own session is still active.

// Re-login if:
// cookie expired, app logs out, session invalidated, app detects suspicious activity.

