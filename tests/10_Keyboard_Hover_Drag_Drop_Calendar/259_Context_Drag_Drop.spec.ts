import {test, expect, Locator} from '@playwright/test';

test('Context click Handeling: ',async ({page}) => {

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/context-menu");
    await page.locator("[data-testid='ctx-target']").click( {button : 'right'});

    const allOptions: string[] = await page.locator('ul.context-menu-list span').allInnerTexts();
    
    console.log(allOptions);

    await page.getByText("Copy", { exact : true }).first().click();

    await page.pause();

});