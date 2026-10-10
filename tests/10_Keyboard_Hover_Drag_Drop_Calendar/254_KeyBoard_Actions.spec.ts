// KeyBoard Actions
// .Keyboard is an interface which has all the actions in it

import {test, expect, Keyboard} from '@playwright/test';

test('KeyBoard Actions: ', async({page}) => {

    await page.goto("https://www.toptal.com/developers/keycode");

    await page.keyboard.press("A");
    await page.screenshot({ path : 'A.png'});

    await page.keyboard.press("ArrowLeft");
    await page.screenshot({ path : 'leftarrow.png'});

    await page.keyboard.press("Shift+B");
    await page.screenshot({ path : 'ShiftB.png'});

    await page.keyboard.press("Space");
    await page.screenshot({ path : 'space.png'});

    await page.keyboard.press("a");
    await page.screenshot({ path : 'small a.png'});

    await page.pause();
});