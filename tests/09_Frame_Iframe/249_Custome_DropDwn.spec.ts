// Three custom-built dropdowns — not native <select> elements. 
// Each opens on click of a .select-trigger, shows options in a floating panel, 
// and writes the chosen value back into the trigger. Build a reusable Playwright 
// helper that handles all three before peeking at the solution.

// https://app.thetestingacademy.com/playwright/tables/dropdowns

import {test, expect} from '@playwright/test';

test('Handling the Custome Drop-Down: ', async({page}) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns",
        { waitUntil: 'domcontentloaded'});

    // Drop-Down 1
    await page.locator('#lang-trigger').click();
    await page.getByRole('option', { name: 'Python' }).click();
    await expect(page.locator('#lang-trigger')).toContainText('Python');

    await page.locator('#lang-trigger').click();
    await page.getByRole('option', { name: 'JavaScript' }).click();
    await expect(page.locator('#lang-trigger')).toContainText('JavaScript');

    // Drop-Down 3

    await page.locator('#experience-trigger').click();
    await page.getByRole('option', {name : 'Mid-level (4-6 years)'}).click();
    await expect(page.locator('#experience-trigger')).toContainText('Mid-level (4-6 years)');

    // Drop-Down 2
    await page.locator('#framework-trigger').click();
    await page.getByRole('option', { name: 'Vue'}).click();
    await expect(page.locator('#framework-trigger')).toContainText('Vue');

    await page.pause();
});