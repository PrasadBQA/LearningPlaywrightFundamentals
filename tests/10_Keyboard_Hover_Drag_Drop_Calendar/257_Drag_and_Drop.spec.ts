import {test, expect, Locator} from '@playwright/test';

test('Handeling Drag and Drop: ', async({page}) => {

    await page.goto("https://the-internet.herokuapp.com/drag_and_drop",
        {waitUntil : 'domcontentloaded', timeout: 60000, });
// PW Default: The 30-second limit is Playwright Test’s default per-test timeout.
//  It covers the entire test—from setup through navigation, drag-and-drop, and assertions—not just navigation.
// test.setTimeout(60_000);
    let pointA:Locator = page.locator('#column-a');
    const pointB: Locator = page.locator("#column-b");

    await pointA.dragTo(pointB);


   await expect(pointA).toContainText("B");
  console.log(await pointA.innerText());

    // await page.pause();
});