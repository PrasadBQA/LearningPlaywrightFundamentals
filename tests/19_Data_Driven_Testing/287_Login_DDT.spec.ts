import {test, expect} from '@playwright/test';
import loginData from './test-data/login-data.json';
const pageURL = "https://app.thetestingacademy.com/playwright/multiple_element_filter";
test.describe('Login With DDT: ', async() => {
    
    test.beforeEach(async({page}) => {
        await page.goto(pageURL);

    });

    test("Login with valid user: ", async({page}) => {

        await page.locator("#email").fill(loginData.validUser.email);
        await page.locator("#password").fill(loginData.validUser.password);
        await page.getByTestId("login-button").click();

    })

       test("Login with In-valid user: ", async({page}) => {

        await page.locator("#email").fill(loginData.invalidUser.email);
        await page.locator("#password").fill(loginData.invalidUser.password);
        await page.getByTestId("login-button").click();

        await page.pause();

    });

});