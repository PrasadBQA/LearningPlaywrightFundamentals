import {test, expect} from '@playwright/test';

test.describe('Simple Maps', () => {

    test.beforeEach(async ({page}) => {
        console.log("Before Each test: ");
        await page.goto("https://simplemaps.com/svg/country/in");
    })

    test('Get state details from maps: ', async ({page}) => {
        
    })
})