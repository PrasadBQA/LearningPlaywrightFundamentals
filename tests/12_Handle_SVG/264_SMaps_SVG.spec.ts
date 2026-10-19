import {test, expect} from '@playwright/test';

test.describe('Simple Maps', () => {

    const simpleMaps = "https://simplemaps.com/svg/country/in";

    test.beforeEach(async ({page}) => {
        console.log("Before Each test: ");
        await page.goto(simpleMaps);
    })

    test('Locate SVG Root and Get state details from maps, assert visible: ', async ({page}) => {
        
        const states = await page
        .locator("//div[@id='admin1_map_holder']//*[name()='svg']//*[name()='path' and contains(@class,'sm_state')]").all();
        // Iterate all states and find their class state
        for(const state of states)
        {
            const classState = await state.getAttribute("class");
            console.log(classState);

            if(classState?.includes("INUP"))
            {
                await state.click();
            }
        }

        await page.pause();
    })
})