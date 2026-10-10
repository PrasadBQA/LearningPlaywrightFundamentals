import {test, expect} from '@playwright/test';

test('Hovering actions: ', async ({page}) => {

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");
    await page.getByTestId("nav-add-ons").hover();

    await page.getByTestId('test-id-Wifi').click();
    await page.mouse.click(0, 0); // it'll move the mouse to empty space and click - to stop hovering
    let houtput = await page.getByTestId("hover-output").innerText();
    console.log(houtput);
    expect(houtput).toContain("Wi-Fi");

    await page.pause();
});