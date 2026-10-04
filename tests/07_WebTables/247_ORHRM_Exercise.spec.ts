import {test, expect} from '@playwright/test';

// Navigate to ORHRM application and login with valid credentials. 
// Then, navigate to the PIM module and click on add employee. 
// Fill in the details and click on save. Then, verify that the employee is added successfully.
// Search for an employee by name and delete the employee. Then, verify that the employee is deleted successfully.
test('ORHRM Exercise: ', async({page}) => {

    // Navigate to ORHRM application and login with valid credentials.
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByRole('textbox', { name: 'Password' } ).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    // Then, navigate to the PIM module and click on add employee.
    await page.getByRole('link', { name: 'PIM' }).click();
    await page.getByRole('button', { name: ' Add '}).click();

    // Fill in the details and click on save and click on the PIM module again to see the added employee in the list.
    await page.getByRole('textbox', { name: 'First Name'}).fill('SKill');
    // await page.getByRole('textbox', { name: 'Middle Name'}).fill('Bill');
    await page.getByRole('textbox', { name: 'Last Name'}).fill('QA');
    await page.getByRole('button', { name: ' Save '}).click();
    await expect(page.getByText('Successfully Saved')).toBeVisible();
    await expect(page).toHaveURL(/viewPersonalDetails/);
    await expect(page.getByRole('heading', { name: 'SKill QA' })).toBeVisible();
    await page.getByRole('link', { name: 'PIM' }).click();

    // Then, verify that the employee is added successfully.
    // div[role="row"]
    const name: string = "SKill QA";
    let row;
    while(true) 
        {
        row =  page.locator('.oxd-table-card').filter({ hasText: name});
        //page.locator('div[role="row"]').filter({ hasText: name});
        if(await row.count() > 0)
        { 
            break;
        }

        const nextbutton =  page.locator('.bi-chevron-right'); // Get the next page button
        if(await nextbutton.isEnabled() === false)
            {
            throw new Error('Could not find the name in the table');
            }
            await nextbutton.click();

        }

        //button[@class="oxd-icon-button oxd-table-cell-action-space"]
        await row.locator('//button[@class="oxd-icon-button oxd-table-cell-action-space"]').last().click(); // click on the delete button of the last row
        await page.getByRole('button', { name: 'Yes, Delete' }).click(); // click on the delete button of the confirmation popup
});