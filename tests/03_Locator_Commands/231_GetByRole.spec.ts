// GetByRole - is a role-based locator used to find elements based on their ARIA role 
// and, optionally, their accessible name.
// AIRA --> Accessible Rich Internet Applications
// ARIA provides attributes that communicate the meaning and state of UI elements to assistive technologies such as screen readers.
// <div role="button" aria-label="Login">
// role="button", aria-label="Login" --> gives it an accessible name
// getByRole('button', { name: 'Login' }).click();

// Basic Syntax: "page.getByRole(role)" ---> Finds a button
// With accessible name: "page.getByRole(role, { name: 'accessible name' })"  ---> Finds a specific button
// getByRole() does not simply mean "find this HTML tag." is looking for something exposed to the accessibility tree as a button.
// page.getByRole('<role>', { name: '<accessible name>' })

// This is generally preferred over brittle CSS/XPath selectors because you're 
// locating the element according to how it is exposed to users through the accessibility tree.

import {test, expect} from '@playwright/test';
test('TC#01- Verfiy the error message in the wingify free trial', async({ page }) => {

    await page.goto("https://app.wingify.com/#/login");
    // Note: exact name matching can fail if the page's accessible labels are different from the literal text.
    // For example, the form may expose labels like 'Email address' or 'Enter password', so we use a role-based locator
    // with partial matching to find the correct textbox by its accessible name.
    
    // let username = page.getByRole("textbox",{ name: "Email", exact :true});
    // let password = page.getByRole("textbox",{ name: "Password"});

    const usernameField = page.getByRole("textbox", { name: /email/i });
    const passwordField = page.getByRole("textbox", { name: /password/i });

    await usernameField.waitFor({ state: 'visible' });
    await passwordField.waitFor({ state: 'visible' });

    await usernameField.fill("abcd@gmail.com");
    await passwordField.fill("Passcode@12345");

    await page.pause();
})
