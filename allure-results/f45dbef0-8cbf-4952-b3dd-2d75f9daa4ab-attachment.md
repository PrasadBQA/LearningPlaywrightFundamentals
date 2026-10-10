# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\247_ORHRM_Exercise.spec.ts >> ORHRM Exercise: 
- Location: tests\07_WebTables\247_ORHRM_Exercise.spec.ts:7:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

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
> 10 |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  11 |     await page.getByPlaceholder('Username').fill('Admin');
  12 |     await page.getByRole('textbox', { name: 'Password' } ).fill('admin123');
  13 |     await page.getByRole('button', { name: 'Login' }).click();
  14 | 
  15 |     // Then, navigate to the PIM module and click on add employee.
  16 |     await page.getByRole('link', { name: 'PIM' }).click();
  17 |     await page.getByRole('button', { name: ' Add '}).click();
  18 | 
  19 |     // Fill in the details and click on save and click on the PIM module again to see the added employee in the list.
  20 |     await page.getByRole('textbox', { name: 'First Name'}).fill('ZKill');
  21 |     await page.getByRole('textbox', { name: 'Middle Name'}).fill('Bill');
  22 |     await page.getByRole('textbox', { name: 'Last Name'}).fill('QA');
  23 |     // await page.getByTestId('employeeId').fill('1496');
  24 |     await page.getByRole('button', { name: ' Save '}).click();
  25 |     await page.locator("a[href='/web/index.php/pim/viewPimModule']").click();
  26 | 
  27 |     // Then, verify that the employee is added successfully.
  28 |     // div[role="row"]
  29 |     const name: string = "ZKill";
  30 |     let row;
  31 |     while(true) 
  32 |         {
  33 |         row =  page.locator('div[role="row"]').filter({ hasText: name});
  34 |         if(await row.count() > 0)
  35 |         {
  36 |             // //button[@class="oxd-icon-button oxd-table-cell-action-space"]
  37 |             row.locator('//button[@class="oxd-icon-button oxd-table-cell-action-space"]').last().click(); // click on the delete button of the last row 
  38 |             break;
  39 |         }
  40 |         // button[class="oxd-pagination-page-item oxd-pagination-page-item--previous-next"]
  41 |         const nextbutton =  page.locator('button[class="oxd-pagination-page-item oxd-pagination-page-item--previous-next"]'); // Get the next page button 
  42 |         if(await nextbutton.isDisabled())           
  43 |             {	        
  44 |              // If the next button is disabled, we have reached the last page and the name was not found
  45 |             throw new Error('Could not find the name in the table');
  46 |             }
  47 |             //await nextbutton.click();	// Click the next button to go to the next page
  48 | 
  49 |         }
  50 |     await page.pause();
  51 | });
```