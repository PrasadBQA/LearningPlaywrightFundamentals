import {test, expect} from '@playwright/test';

test("Handeling Modal: ", async({page}) => {

    await page.goto("https://www.flipkart.com/");

    const loginModalX = page.getByRole('button',{ name : '✕'});
    await page.waitForTimeout(6000);
    if(await loginModalX.isVisible())
    {
        await loginModalX.click();

    }

    //await page.pause();
})