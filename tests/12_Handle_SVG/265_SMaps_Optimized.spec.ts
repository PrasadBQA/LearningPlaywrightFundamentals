import {test, expect} from '@playwright/test';

test.describe('Simple Maps', () => {

    const simpleMaps = "https://simplemaps.com/svg/country/in";

    test.beforeEach(async ({page}) => {
        console.log("Before Each test: ");
        await page.goto(simpleMaps);
    })

    test('Locate SVG Root and Get state details from maps, assert visible: ', async ({page}) => {
        
        const states = await page
        .locator("path").all();
        // Iterate all states and find their class state
        for(const state of states)
        {
            const className = await state.getAttribute("class");
            console.log(className);
            if(className){
                // checks if className is empty/null
                console.log(className);

                
            if(className?.endsWith("UP"))
            {
                await state.click();
            }
            }
        }

        await page.pause();
    })
})