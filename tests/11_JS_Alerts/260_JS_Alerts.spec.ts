// JS Alerts - Alerts and Pop-UPs are not same. Both are different
// Alerts - Simple Alert(ok), With Confirmation (cancle, ok), with input(cancle, Ok)
// https://the-internet.herokuapp.com/javascript_alerts
// Pop-UPs are different and HTML Modal is different

import {test, expect} from '@playwright/test';


// You can declare a group of tests with a title. The title will be visible in the test report as a part of each test's title.
test.describe('JS! Alerts: ', ()=> {


    // test.beforeEach(async ({ page }) => {
    //     await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    // });

    // alternative - facing issue of The root cause of the 30-second timeout was page.goto() in beforeEach: it waited for the external page’s default load event, which wasn’t reached reliably within 30 seconds.
    test.beforeEach(async ({page}) => {
        await page.setContent(`
            <h3>JavaScript Alerts</h3>
            <button onclick="alert('I am a JS Alert')">Click for JS Alert</button>
            <button onclick="document.querySelector('#result').textContent =
                'You clicked: ' + (confirm('I am a JS Confirm') ? 'Ok' : 'Cancel')">
                Click for JS Confirm
            </button>
            <button onclick="document.querySelector('#result').textContent =
                'You entered: ' + prompt('I am a JS prompt')">
                Click for JS Prompt
            </button>
            <p id="result"></p>
        `);
    });

    test('JS Alert 1: ', async ({page}) => {

        
        
        page.once('dialog', async dialog => {
            // First we have register the coming dialog(alert)
            console.log('Alert Type: ', dialog.type());
            console.log('Alert Message', dialog.message());
            expect(dialog.message()).toBe('I am a JS Alert');
            await dialog.accept(); // will accept the dialog, next will click the button
        })
        await page.getByRole('button', {name : 'Click for JS Alert'}).click();

       // await page.pause();
});



    test('JS Alert 2: ', async ({page}) => {

        page.once('dialog', async dialog => {
            console.log('Alert type', dialog.type());
            console.log('Alert Message', dialog.message());
            expect(dialog.message()).toBe('I am a JS Confirm');
            await dialog.accept();
        })

        await page.locator('button', {hasText: 'Click for JS Confirm'}).click();
        await expect(page.locator('#result')).toHaveText('You clicked: Ok');
});

    test('JS Alert 3: ', async ({page}) => {


        const inputText = 'Hello from The Testing Academy';

        page.once('dialog', async dialog => {
            expect(dialog.type()).toBe('prompt');
            expect(dialog.defaultValue()).toBe('');
            await dialog.accept(inputText);
            //await dialog.dismiss();
        });

        await page.locator('button', { hasText: 'Click for JS Prompt' }).click();
        await expect(page.locator('#result')).toHaveText(`You entered: ${inputText}`);

});

});