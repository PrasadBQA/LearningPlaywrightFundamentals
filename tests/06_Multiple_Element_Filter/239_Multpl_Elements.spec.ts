import {test, expect} from '@playwright/test';


test('Bacis Verify how to handle multiple elements: ', async({page}) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const rightPanelLinkText: string[] = await page.locator('a.list-group-item').allInnerTexts();
    // .allInnerTexts() returns the array of strings. 
    // .locator() creates a locator that identifies matching elements; it does not return their text.

3
    console.log("no of matched elements:  ", rightPanelLinkText.length);
    // for...of is a direct way to process each string in it, one at a time
    for(const link of rightPanelLinkText)
    {
        console.log(link);
    }

    for(const linkText of rightPanelLinkText)
    {
        if(linkText === "Forgotten Password")
        {
            //await page.getByText(linkText).first().click();
            await page.getByText(linkText).nth(3).click();

        }
    }

    const rightPanelLinks = await page.locator('a.list-group-item').all();
    for(const link of rightPanelLinks)
    {
        console.log(await link.getAttribute("href"));
    }

    await page.pause();

});