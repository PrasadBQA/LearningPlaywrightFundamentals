// Handling Multiple Frames - Not nested-frames
// You can simply call the frame reference and preform the operations.

import {test, expect, Locator, FrameLocator } from '@playwright/test';

test('Handling Multiple Frames', async ({page}) => {

    await page.goto("https://app.thetestingacademy.com/playwright/frames/multi-frames", 
        { waitUntil : 'domcontentloaded' });

    // Main Frame
    let mainFrame : FrameLocator = page.frameLocator('[name="main"]');
    const headerText = await mainFrame.locator('#main-heading').innerText();
    console.log(mainFrame);

    // Get all frame locators, attributes and print them
    const allFrames: Locator[] = await page.locator('//frame').all();
    console.log("Number of Frames", + allFrames.length);
    
    for( let frame of allFrames)
    {
        console.log(frame);
        console.log(await frame.getAttribute('name'), ':', await frame.getAttribute('src'));

    }

    // Side Frame
    let sideFrame : FrameLocator = page.frameLocator('[name="side"]');
    await sideFrame.getByTestId('side-link-registration').click();

    // Footer Frame
    let footerFrame : FrameLocator = page.frameLocator('[name="footer"]');
    const footerText : string = await footerFrame.locator("//span[@class='badge']").innerText();
    console.log("Footer Frame Text: ", footerText);

    await page.pause();
});