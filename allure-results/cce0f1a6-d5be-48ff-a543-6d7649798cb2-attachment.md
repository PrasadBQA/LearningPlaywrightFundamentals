# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\247_ORHRM_Exercise.spec.ts >> ORHRM Exercise: 
- Location: tests\07_WebTables\247_ORHRM_Exercise.spec.ts:7:5

# Error details

```
Error: Could not find the name in the table
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | 
  3  | // Navigate to ORHRM application and login with valid credentials. 
  4  | // Then, navigate to the PIM module and click on add employee. 
  5  | // Fill in the details and click on save. Then, verify that the employee is added successfully.
  6  | // Search for an employee by name and delete the employee. Then, verify that the employee is deleted successfully.
  7  | test('ORHRM Exercise: ', async({page}) => {
  8  | 
  9  |     // Navigate to ORHRM application and login with valid credentials.
  10 |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  11 |     await page.getByPlaceholder('Username').fill('Admin');
  12 |     await page.getByRole('textbox', { name: 'Password' } ).fill('admin123');
  13 |     await page.getByRole('button', { name: 'Login' }).click();
  14 | 
  15 |     // Then, navigate to the PIM module and click on add employee.
  16 |     await page.getByRole('link', { name: 'PIM' }).click();
  17 |     await page.getByRole('button', { name: ' Add '}).click();
  18 | 
  19 |     // Fill in the details and click on save and click on the PIM module again to see the added employee in the list.
  20 |     await page.getByRole('textbox', { name: 'First Name'}).fill('SKill');
  21 |     // await page.getByRole('textbox', { name: 'Middle Name'}).fill('Bill');
  22 |     await page.getByRole('textbox', { name: 'Last Name'}).fill('QA');
  23 |     await page.getByRole('button', { name: ' Save '}).click();
  24 |     await expect(page.getByText('Successfully Saved')).toBeVisible();
  25 |     await expect(page).toHaveURL(/viewPersonalDetails/);
  26 |     await expect(page.getByRole('heading', { name: 'SKill QA' })).toBeVisible();
  27 |     await page.getByRole('link', { name: 'PIM' }).click();
  28 | 
  29 |     // Then, verify that the employee is added successfully.
  30 |     // div[role="row"]
  31 |     const name: string = "SKill QA";
  32 |     let row;
  33 |     let currentPage = 1;
  34 |     const pagination = page.getByRole('navigation', { name: 'Pagination Navigation' });
  35 |     const pageButtons = pagination.getByRole('button').filter({ hasText: /^\d+$/ });
  36 |     while(true) 
  37 |         {
  38 |         row =  page.locator('div[role="row"]').filter({ hasText: name});
  39 |         if(await row.count() > 0)
  40 |         { 
  41 |             break;
  42 |         }
  43 | 
  44 |         if(currentPage >= await pageButtons.count())
  45 |             {
> 46 |             throw new Error('Could not find the name in the table');
     |                   ^ Error: Could not find the name in the table
  47 |             }
  48 |         const nextbutton = pageButtons.nth(currentPage);
  49 |         await nextbutton.click();
  50 |         currentPage++;
  51 | 
  52 |         }
  53 | 
  54 |         //button[@class="oxd-icon-button oxd-table-cell-action-space"]
  55 |         await row.locator('//button[@class="oxd-icon-button oxd-table-cell-action-space"]').last().click(); // click on the delete button of the last row
  56 |         await page.getByRole('button', { name: 'Yes, Delete' }).click(); // click on the delete button of the confirmation popup
  57 | });
```