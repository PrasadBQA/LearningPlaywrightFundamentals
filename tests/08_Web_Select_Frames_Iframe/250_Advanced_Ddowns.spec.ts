// advanced Drop-Downs: 
// Five custom-built combobox variants — single, multi, creatable, grouped, and async. 
// DOM classes intentionally mirror the popular react-select conventions 
// (tta-rs__control, tta-rs__menu, tta-rs__option) so your locators transfer to real production widgets.

import {test, expect} from '@playwright/test';

test('Handling Advanced Drop-Downs: ', async({page}) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes", 
        { waitUntil: 'domcontentloaded'});

    // 1. Single - Searchable
    await page.locator('#rs-single').click();
    await page.getByText("Cypress",{ exact: false}).click();
    await page.getByTestId("rs-single-input").fill("Playwright");

    // 2. Multiple - Searchable
    await page.locator('#rs-multi').click();
    await page.getByText("Pytest", { exact: true }).click();
    await page.getByText("Cucumber", { exact: true }).click();
    await page.getByRole('option', { name : "Playwright" }).click();
    await page.keyboard.press("Escape");

    // 3. Creatable multi — type and Enter
    await page.locator("#rs-creatable").click();
    await page.getByRole('option', { name : "accessibility"}).click();
    await page.getByText("security", { exact : true }).click();
    await page.getByText("api-testing").click();
    await page.keyboard.press("Escape");


    // 5. Async — fetched on type
    await page.locator("#rs-async").click();
    await page.getByTestId("rs-async-input").fill("Ben");
    await expect (page.getByTestId("rs-async-menu")).toContainText("Bengaluru");
    await page.getByText("Bengaluru", { exact : true }).click();

    await page.locator("#rs-async").click();
    await page.getByTestId("rs-async-input").fill("Hyd");
    await expect (page.getByTestId("rs-async-menu")).toContainText("Hyderabad");
    await page.getByText("Hyderabad", { exact : false }).click();


    await page.pause();
});