// An Iframe(<iframe>) embeds another HTML page inside the current page. 
// It has it's own DOM, it's own CSS, it's own JavaScript, completely isolated from the parent page.
// Commong Eg:  payment forms (Stripe, Razorpay), embedded YouTube videos, Google Maps, reCAPTCHA, social media widgets, and third-party chat widgets.


import {test, expect, FrameLocator} from '@playwright/test';

test('Handling Iframes: ', async ({page}) => {

    await page.goto("https://app.thetestingacademy.com/playwright/frames/",
         { waitUntil: 'domcontentloaded' });

    let vechicleRegistration: FrameLocator =  page.frameLocator('#frame-one');
    await expect(vechicleRegistration.getByText("Vehicle registration")).toContainText("Vehicle registration");

    await vechicleRegistration.locator('#RESULT_TextField-1').fill("Hyundai verna");
    await vechicleRegistration.locator("#RESULT_TextField-2").fill("XYZ");
    await vechicleRegistration.locator('#RESULT_TextField-3').fill("AP 39 PB 9619");
    await vechicleRegistration.locator('#RESULT_RadioButton-1').selectOption("Sedan");
    await vechicleRegistration.locator('#RESULT_TextField-4').fill("2025");
    await vechicleRegistration.locator('#RESULT_TextArea-1').fill("offers a great balance of comfort, performance, and style.");
    await vechicleRegistration.locator('#vehicle-submit').click();

    let output = await vechicleRegistration.locator('#vehicle-output').innerText();
    console.log(output);

    await page.pause();

    
});
