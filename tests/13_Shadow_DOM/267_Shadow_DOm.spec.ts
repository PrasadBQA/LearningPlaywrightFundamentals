import {test, expect} from '@playwright/test';
// If Shadow Root is closed - we'll not be able to communicate


// Learn about locator chaining: 
// Locator chaining means finding an element, then locating another element within it. It is useful when the page has repeated components or when you want to make clear which part of the page you’re targeting.
// page.locator('#counter-1') finds the counter container. Calling getByRole() on cart searches for the button inside that container.

// page.getByTestId('counter-value') searches the whole page. If the page has multiple elements with that test ID, the assertion may be ambiguous or target a different counter.
// cart.getByTestId('counter-value') searches only inside #counter-1, so it identifies the value for that specific counter. That’s why the scoped assertion can pass.

// WHY it Helps:
// Avoids ambiguity: similar controls can exist in multiple components.
// Improves readability: the test shows which component owns the control.
// Makes tests less brittle: a scoped locator can be more robust than a long CSS selector tied to DOM structure.
test.describe('Shadow DOM Handeling: ', () => {

    const pageUrl = "https://app.thetestingacademy.com/playwright/widgets/shadow-dom";
    test.beforeEach('Before Each test: ',async ({page}) => {
        await page.goto(pageUrl);
    });

    test('locate Shadow DOM and Assert visible: ', async ({page}) => {

        const card = page.getByTestId('card-account');
        await card.locator("input[name='email']").fill("test@mailinator.com");
        await card.getByTestId('card-account-password').fill('PassWd');
        await card.getByTestId('card-account-submit').click();

        await expect(page.getByTestId('card-account-status')).toContainText('test@mailinator.com');


        const cart = page.locator("#counter-1");
        await cart.getByRole('button', { name : 'Increment' }).click();
        await cart.getByRole('button', { name : 'Increment' }).click();
        await expect(cart.getByTestId('counter-value')).toHaveText("5"); // assert


        // Shadow DOM inside Shadow DOM
        const nestedSD = page.getByTestId("nested-host");
        await nestedSD.locator("input[name='email']").fill("prasadbaburi.space@gmail.com");
        // You can handle it directly - without using locator chaining
        await page.getByTestId("card-inside-password").fill("Password");
        await nestedSD.getByTestId("card-inside-submit").click();
        await expect(page.getByTestId("card-inside-status")).toContainText("prasadbaburi.space@gmail.com");



        await page.pause();
    });
});