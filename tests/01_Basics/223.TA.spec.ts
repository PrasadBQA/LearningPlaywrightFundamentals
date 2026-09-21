import {test, expect} from '@playwright/test';
// test is a function object at run time. It's a playwright's function for defining a test case
// expect is used for assertions or validations
// @playwright/test is Playwright's testing package.
// The imported "test" is not a test itself, it's used to create one

test('Navigating to the URL', async ({page}) => {
    await page.goto("https://app.thetestingacademy.com/playwright/");
});

test('BCP - in app.vwo.com two roles', async({ browser }) => {

    let adminContext = await browser.newContext();
    let userContext = await browser.newContext();
    let guestContext = await browser.newContext();

    let adminPage = await adminContext.newPage();
    await adminPage.goto("https://app.thetestingacademy.com/playwright/");


    let userPage = await userContext.newPage();
    await userPage.goto("https://sdet.live");


    let guestPage = await guestContext.newPage();
    await guestPage.goto("https://scrolltest.com");


    await adminPage.close();
    await userPage.close();
    await guestPage.close();


});