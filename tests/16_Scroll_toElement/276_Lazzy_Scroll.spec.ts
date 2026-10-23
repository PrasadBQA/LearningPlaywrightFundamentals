// Lazzy Scroll - When you reach the end of the page, page will load more options in the list. eg: flipkart, amazon. etc..

import { test, expect } from '@playwright/test';

const pageURL = "https://app.thetestingacademy.com/playwright/widgets/scroll";

test.describe('Handeling Scrolls: ', () => {

    test.beforeEach('Runs Before each test: ', async({page}) => {
        await page.goto(pageURL);
    })

    test('Scroll to specific page: ', async({page}) => {

        // Lazzy List grows past 10 once visible

        await page.getByTestId("section-lazy").scrollIntoViewIfNeeded();
        await page.getByTestId("lazy-list").scrollIntoViewIfNeeded();

        const list = page.getByTestId("lazy-list").locator('li');
        console.log(list);
        const initialCount = await list.count();
       // wait for the first load to land (two batches of 5) before reading the count:
      // read too early, initialCount is 0 and the poll below passes without any scroll.

      await page.evaluate(() => window.scrollTo(0, 0));
      await page.getByTestId('lazy-loader').scrollIntoViewIfNeeded();


      await expect.poll(async () => list.count(), {
         message: "expected_itmes > 10",
         timeout: 10_000
      }).toBeGreaterThan(initialCount);

      const finalCount = await list.count();
      console.log(finalCount);

      
        await page.pause();
    })
})
