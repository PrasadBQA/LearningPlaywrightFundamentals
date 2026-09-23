import {test, expect} from '@playwright/test';

test('Verify Error message in wingify free trail', async({page}) => {
    await page.goto("https://wingify.com/free-trial/");
    let inputbox = page.locator("//input[@id='free-trial-step1-email']");
    await inputbox.fill("abcd");

    await page.locator("#free-trial-step1-gdpr-consent-checkboxcu-gdpr-consent-checkbox").click();

    await page.locator("#free-trial-step1-gdpr-consent-checkboxcu-marketing-consent-checkbox").click();
    // await page.locator("//div[@class='C(--wingify-cherry-rich) WBodyXS Trsp(--wingify-transition-op) Trsdu(0.15s) Op(0) invalid-input+Op(1) invalid-reason']");
    // the locator value is too large, we can use "contain" here

    let errorMessage =  page.locator("//div[contains(@class,'invalid-reason')]").first();
    // if the element is 1st once from the multiple matches, then use .first()
    let erroeMsgtest = await errorMessage.textContent();
    await page.locator("//button[@data-qa='page-su-submit']").first().click();


    expect(erroeMsgtest).toContain("Invalid Email");

    await page.pause();
})