import {test, expect, Locator} from '@playwright/test';


test('WebTable Exercise click on checkbox: ', async({page}) => {

	await page.goto("https://app.thetestingacademy.com/playwright/webtable");

	// //tbody[@id='employee-body']/tr[3]/td[2]/preceding-sibling::td
    // //tbody[@id='employee-body']/tr[3]/td[2] --> 3 - i, 1 to 4 (1 is header) 2 to 4
    //  ]/td[
    //  2 - j, j -> 1,2,3
    const firstPart = "//tbody[@id='employee-body']/tr[";
    const secondPart = "]/td[";
    const thirdPart = "]";

    const row = await page.locator("//tbody[@id='employee-body']/tr").count(); // 10 rows
    const cols = await page.locator("//tbody[@id='employee-body']/tr[1]/td").count(); // 4 cols

    for(let i = 1; i<= row; i++)
    {
        for(let j = 1; j<= cols; j++)
        {
            const dynamicPath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
            console.log(dynamicPath); // prints path for all elements

            const data = await page.locator(dynamicPath).innerText();
            console.log(data); // prints inner text of each element in table

            if(data.includes('Rohan.Mehta'))
            {
                const checkboxPath = `${dynamicPath}/preceding-sibling::td`;
                await page.locator(checkboxPath).click();
            }
        }
    }
	await page.pause();

});
