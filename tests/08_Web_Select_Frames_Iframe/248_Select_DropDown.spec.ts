// Native dropdown developed using select tag and options tag
import {test, expect, Locator} from '@playwright/test';


test('Select DropDown: ', async({ page }) => {

   await page.goto("https://the-internet.herokuapp.com/dropdown", { waitUntil: 'domcontentloaded' });
    await page.locator('#dropdown').click();
    await page.selectOption('#dropdown', { label: 'Option 2' });
    // await page.selectOption('#dropdown', "Option 2" );
    await page.pause();

})