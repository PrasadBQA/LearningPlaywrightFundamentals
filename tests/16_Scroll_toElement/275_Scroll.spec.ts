// Handeling Scrolling in web page

import { test, expect } from '@playwright/test';

const pageURL = "https://app.thetestingacademy.com/playwright/widgets/scroll";

test.describe('Handeling Scrolls: ', () => {

    test.beforeEach('Runs Before each test: ', async({page}) => {
        await page.goto(pageURL);
    })

    test('Scroll to specific page: ', async({page}) => {

        // 1 Method: 
        await page.getByTestId("deep-anchor").scrollIntoViewIfNeeded();
        await page.getByTestId("deep-anchor").click();


        // 2 Method By Using - JS Execute
        await page.evaluate(() => window.scrollBy(0, 1000));

        // // 3) jump to bottom
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

        //    // // 4) jump back to top
        await page.evaluate(() => window.scrollTo(0, 0));


        await page.pause();
    })
})