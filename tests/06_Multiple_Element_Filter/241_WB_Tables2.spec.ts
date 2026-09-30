import {test, expect, Locator} from '@playwright/test';


test('Jagged Table- Verify how to handle multiple elements: ', async({page}) => {

	await page.goto("https://awesomeqa.com/webtable1.html");

    const row = page.locator('table[summary="Sample Table"] tbody tr');
    const rowcount = await row.count();

    for(let i = 0; i<= rowcount-1; i++)
    {
       // const headercontent = await row.nth(1).allInnerTexts();
       // console.log(headercontent);

        const rowsData = await row.nth(i).locator('td').allInnerTexts();
        console.log(`Row ${i}: `, rowsData);

    }


    await page.pause();
});