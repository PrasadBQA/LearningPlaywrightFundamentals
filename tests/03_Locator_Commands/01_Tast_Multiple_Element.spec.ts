import {test, expect} from '@playwright/test';

test('Verify the URL Change after clingin on Login', async({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    let usernameField = page.locator("//input[@id='email']");
    let passwordField = page.locator("//input[@id='password']");

    usernameField.fill("abc@testmail.com");
    passwordField.fill("Passcode@123");
    await page.locator("//input[@name='remember']").click();
    await page.locator("//button[@data-testid='login-button']").click();


    
   // let pageUrl = "https://app.thetestingacademy.com/playwright/multiple_element_filter?email=test%40mail.com&password=asadadsasd#login-success";
    // expect(page.url()).toBe("https://app.thetestingacademy.com/playwright/multiple_element_filter?email=test%40mail.com&password=asadadsasd#login-success");
    // If we have dynamic url for each login, we can assert a portion of url

    expect(page.url()).toContain('#login-success');

    await page.pause();
})