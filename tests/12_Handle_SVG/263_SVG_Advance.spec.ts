import {test, expect} from '@playwright/test';

test.describe('SVG Elements: ', () => {

    test.beforeEach(async({page}) => {
        console.log("Before each test: ")
        await page.goto("https://app.thetestingacademy.com/playwright/widgets/svg");
    })

    test("Locate SVG root and assert visible: ", async({page}) => {

    await page.locator("#circle-red").click();
    await expect(page.locator('#shapes-output')).toContainText('Red circle');

    await page.getByRole('button', {name : /Q3 bar/ }).click();

     //RegEx patters  
 // await page.getByRole('button', {name : /Q3 bar/ }).click();
    await expect(page.locator('#bars-output')).toContainText('bar-q3');

    await page.getByRole('radio', {name : /4 stars/}).click();
    await expect(page.locator('#stars-readout')).toContainText('Rating: 4 / 5')

    // Find all bars and print height and lable values
    let allBars = await page.locator(".bar").all();
    console.log(allBars);

    for(const bar of allBars)
    {
        const q = await bar.getAttribute('data-quarter');
        const h = await bar.getAttribute('height');

        console.log(q);
        console.log(h);
    }
    await page.pause();
    })
})