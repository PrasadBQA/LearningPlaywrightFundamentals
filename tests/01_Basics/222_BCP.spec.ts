// You should create this file as ".spec.ts" BCZ, it will recognized by the playwright.config.ts file

import { chromium, Browser, BrowserContext, Page } from 'playwright';

async function run() {

    // LEVEL 1: Heaviest option - do it once 
    let browser: Browser = await chromium.launch({headless: false});
    console.log("Browser Launched: ", browser);

    // LEVEL 2: Create Context - a fresh session, isolated cookies
    let context1: BrowserContext = await browser.newContext();
    console.log("Context Created: ", context1);


    // LEVEL 3: Open Page - a tab inside a context
    let page: Page = await context1.newPage();
    console.log("Page Opened: ");


    // Cleanup - reverse order
    await page.close();
    await context1.close();
    await browser.close();

    
}