// .allInnterTexts() v/s .all()
import {test, expect, Locator} from '@playwright/test';


test('Bacis Verify how to handle multiple elements: ', async({page}) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const rightPanelLinkText: Locator[] = await page.locator('a.list-group-item').all();
    // .all() returns the array of Locator(elements of locators) 
    // .locator() creates a locator that identifies matching elements; it does not return their text.

3
    console.log("no of matched elements:  ", rightPanelLinkText.length);
    console.log('---------------:');



    // for...of is a direct way to process each string in it, one at a time
    for(const link of rightPanelLinkText)
    {
        console.log(link);
        console.log(link.getAttribute('href')); // it returns element with promise
        // so user before link.getAttribute()
        // console.log(await link.getAttribute('href'));
    }

    await page.pause();

});
