import {test, expect, Locator} from '@playwright/test';

test('Handling Advanced Drag and Drop', async({page}) => {

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/dnd",
         {waitUntil : 'domcontentloaded', timeout: 60000, });

    const source: Locator = page.locator('#card-review-pr-21');
    const target = page.locator('[data-status="in-progress"]');

    const sBox = (await source.boundingBox())!;
    const tBox = (await target.boundingBox())!;

    await page.mouse.move(sBox.x + sBox.width / 2, sBox.y + sBox.height / 2);
    await page.mouse.down();
    await page.mouse.move(tBox.x + tBox.width / 2, tBox.y + tBox.height / 2, { steps: 10});
    await page.mouse.up();
    
    await source.dragTo(target);

    await page.pause();
})