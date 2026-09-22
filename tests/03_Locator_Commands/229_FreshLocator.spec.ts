import {test, expect} from '@playwright/test';

test('TC#1 - Verify app.vwo.com is loaded', async({page}) => {
    await page.goto("https://app.vwo.com/",
        {waitUntil: 'domcontentloaded',timeout:3000, referer: "https://sdet.live"} 
    );
    // Default Locators
    // ID, Name, ClassName, Tag., Custom Locator(Via CSS Selector)

    // CSS Selector - Has CSS Engine, helps you to find the element
    // by using the default locators

    // id -> #id
    // ClassName -> .
    // name -> [name="value"]
    // Tag -> [tag]

    // <input 
    // type="email" 
    // class="text-input W(100%)" 
    // name="username" 
    // vwo-html-translate-attr="placeholder" 
    // vwo-html-translate-placeholder="login:enterEmailID" 
    // id="login-username" 
    // data-qa="hocewoqisi" 
    // placeholder="Enter email ID"
    // >

    let userNameField = page.locator("#login-username");
    let passwordField = page.locator("#login-password");
    let loginButton = page.locator("#js-login-btn");
    let error_message = page.locator("#js-notification-box-msg");

    await userNameField.fill("abc@gmail.com");
    await passwordField.fill("PASSCODE@123");
    await loginButton.click();

    await expect(error_message).toContainText("Your email, password, IP address or location did not match");
    
    await page.pause();




})