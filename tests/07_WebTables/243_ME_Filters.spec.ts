import {test, expect, Locator} from '@playwright/test';
// Filter: bases on number of locators, it will allow you to find the specific element from the list of locators:
// which hasText,    -----> { hasText: 'Forgotten Password' },
// which has notText, -----> { hasNotText: 'Forgotten Password' },
// wich has attribute, -----> { has: page.locator('a[href="#privacy-policy"]') },
// wich has locator, -----> { has: page.locator('a[href="#privacy-policy"]') },

// We have CSS Selector also
// :text('Rohan.Mehta')  --> it will find the element which has text Rohan.Mehta, substring also works, case sensitive
// :text-is('Rohan.Mehta') --> it will find the element which has text Rohan.Mehta, exact match, case sensitive
// :text-matches('Rohan\\.Mehta', 'i') --> regex, case insensitive, exact match, escape special characters with \\, i for case insensitive, g for global search

test('Using filter Click on Forgotten Password when there are multiple elements: ', async({page}) => {

	await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const forgotPasswd = await page.locator('a.list-group-item')
        .filter({ hasText : 'Forgotten Password' });
    console.log(await forgotPasswd.innerText()); // Forgot Password
    await forgotPasswd.click();


	await page.pause();

});

test('Using filter Click on "Privacy Policy" when there are multiple elements: ', async({page}) => {

	await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const privacyPolicyElement = await page.locator('footer a')
        .filter({ hasText : 'Privacy Policy' });
    console.log(await privacyPolicyElement.innerText()); // Privacy Policy
    await privacyPolicyElement.click();

    await expect(privacyPolicyElement).toHaveAttribute('href', "#privacy-policy");


	await page.pause();

});
