// Handling Nested Frames:
// iframe 1 contains iframe 2, which contains iframe 3 — each level has its own input.

import { test, expect, Locator, FrameLocator } from '@playwright/test';

test('Handling Nested Frames: ', async ({page}) => {

    await page.goto("https://app.thetestingacademy.com/playwright/frames/nested-iframes", 
        { waitUntil : 'domcontentloaded' });

    // Frame 1 - Outer frame
    let f1OunterFrame : FrameLocator = page.frameLocator('#pact1');
    let f2InnterFrame : FrameLocator = f1OunterFrame.frameLocator('#pact2');
    let f3InnerFrame : FrameLocator = f2InnterFrame.frameLocator('#pact3');

    
    const content1 = await f1OunterFrame.locator('h4').innerText();
    console.log("Handling Frame 1: ", content1);

    await expect(f1OunterFrame.getByText("Frame one")).toContainText("Frame one");
    await f1OunterFrame.locator('#inp_val').fill('Playwright');
    
    // Frame 2 - Inner frame

    // let f2InnterFrame : FrameLocator = f1OunterFrame.frameLocator('#pact2');
    await expect (f2InnterFrame.getByText('Frame two')).toContainText("Frame two");
    await f2InnterFrame.locator('#jex').fill('Selenium');

    // Frame 3 - Inner Frame
    await expect (f3InnerFrame.getByText('Frame three')).toContainText("Frame three");
    await f3InnerFrame.locator('#glaf').fill('testcafe');

    await page.pause();

});
