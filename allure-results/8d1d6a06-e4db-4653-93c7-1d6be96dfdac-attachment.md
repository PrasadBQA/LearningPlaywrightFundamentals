# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\247_ORHRM_Exercise.spec.ts >> ORHRM Exercise: 
- Location: tests\07_WebTables\247_ORHRM_Exercise.spec.ts:7:5

# Error details

```
Error: locator.isDisabled: Error: strict mode violation: locator('button[class="oxd-pagination-page-item oxd-pagination-page-item--previous-next"]') resolved to 2 elements:
    1) <button type="button" data-v-92137808="" class="oxd-pagination-page-item oxd-pagination-page-item--previous-next">…</button> aka getByRole('button').filter({ hasText: /^$/ }).nth(3)
    2) <button type="button" data-v-92137808="" class="oxd-pagination-page-item oxd-pagination-page-item--previous-next">…</button> aka getByRole('button').filter({ hasText: /^$/ }).nth(4)

Call log:
  - waiting for locator('button[class="oxd-pagination-page-item oxd-pagination-page-item--previous-next"]')

```

# Page snapshot

```yaml
- generic [ref=f6e3]:
  - generic:
    - complementary [ref=f6e4]:
      - navigation "Sidepanel" [ref=f6e5]:
        - generic [ref=f6e6]:
          - link [ref=f6e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f6e9]
          - text: 
        - generic [ref=f6e10]:
          - generic [ref=f6e11]:
            - generic [ref=f6e12]:
              - textbox "Search" [ref=f6e15]
              - button "" [ref=f6e16] [cursor=pointer]
            - separator [ref=f6e18]
          - list [ref=f6e19]:
            - listitem [ref=f6e20]:
              - link "Admin" [ref=f6e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f6e25]:
              - link "PIM" [ref=f6e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f6e41]:
              - link "Leave" [ref=f6e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f6e46]:
              - link "Time" [ref=f6e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f6e54]:
              - link "Recruitment" [ref=f6e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f6e62]:
              - link "My Info" [ref=f6e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f6e70]:
              - link "Performance" [ref=f6e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f6e80]:
              - link "Dashboard" [ref=f6e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f6e85]:
              - link "Directory" [ref=f6e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f6e90]:
              - link "Maintenance" [ref=f6e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f6e96]:
              - link "Claim" [ref=f6e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f6e105]:
              - link "Buzz" [ref=f6e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f6e110]:
      - generic [ref=f6e111]:
        - generic [ref=f6e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f6e114]
        - link [ref=f6e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f6e117] [cursor=pointer]
        - list [ref=f6e123]:
          - listitem [ref=f6e124]:
            - generic [ref=f6e125] [cursor=pointer]:
              - img "profile picture" [ref=f6e126]
              - paragraph [ref=f6e127]: manda user
              - generic [ref=f6e128]: 
      - navigation "Topbar Menu" [ref=f6e130]:
        - list [ref=f6e131]:
          - listitem [ref=f6e132] [cursor=pointer]:
            - generic [ref=f6e133]:
              - text: Configuration
              - generic [ref=f6e134]: 
          - listitem [ref=f6e135] [cursor=pointer]:
            - link "Employee List" [ref=f6e136]:
              - /url: "#"
          - listitem [ref=f6e137] [cursor=pointer]:
            - link "Add Employee" [ref=f6e138]:
              - /url: "#"
          - listitem [ref=f6e139] [cursor=pointer]:
            - link "Reports" [ref=f6e140]:
              - /url: "#"
          - button "" [ref=f6e142] [cursor=pointer]
  - generic [ref=f6e144]:
    - generic [ref=f6e146]:
      - generic [ref=f6e147]:
        - generic [ref=f6e148]:
          - heading "Employee Information" [level=5] [ref=f6e150]
          - button "" [ref=f6e153] [cursor=pointer]
        - separator [ref=f6e155]
        - generic [ref=f6e157]:
          - generic [ref=f6e159]:
            - generic [ref=f6e161]:
              - generic [ref=f6e162]: Employee Name
              - textbox "Type for hints..." [ref=f6e167]
            - generic [ref=f6e169]:
              - generic [ref=f6e170]: Employee Id
              - textbox [ref=f6e173]
            - generic [ref=f6e175]:
              - generic [ref=f6e176]: Employment Status
              - generic [ref=f6e180] [cursor=pointer]:
                - generic [ref=f6e181]: "-- Select --"
                - generic [ref=f6e182]: 
            - generic [ref=f6e185]:
              - generic [ref=f6e186]: Include
              - generic [ref=f6e190] [cursor=pointer]:
                - generic [ref=f6e191]: Current Employees Only
                - generic [ref=f6e192]: 
            - generic [ref=f6e195]:
              - generic [ref=f6e196]: Supervisor Name
              - textbox "Type for hints..." [ref=f6e201]
            - generic [ref=f6e203]:
              - generic [ref=f6e204]: Job Title
              - generic [ref=f6e208] [cursor=pointer]:
                - generic [ref=f6e209]: "-- Select --"
                - generic [ref=f6e210]: 
            - generic [ref=f6e213]:
              - generic [ref=f6e214]: Sub Unit
              - generic [ref=f6e218] [cursor=pointer]:
                - generic [ref=f6e219]: "-- Select --"
                - generic [ref=f6e220]: 
          - separator [ref=f6e222]
          - generic [ref=f6e223]:
            - button "Reset" [ref=f6e224] [cursor=pointer]
            - button "Search" [ref=f6e225] [cursor=pointer]
      - generic [ref=f6e226]:
        - button " Add" [ref=f6e228] [cursor=pointer]:
          - generic [ref=f6e229]: 
          - text: Add
        - table [ref=f6e231]
        - navigation "Pagination Navigation" [ref=f6e236]:
          - list [ref=f6e237]:
            - listitem [ref=f6e238]:
              - button "" [ref=f6e239] [cursor=pointer]
            - listitem [ref=f6e241]:
              - button "1" [ref=f6e242] [cursor=pointer]
            - listitem [ref=f6e243]:
              - button "2" [ref=f6e244] [cursor=pointer]
            - listitem [ref=f6e245]:
              - button "3" [ref=f6e246] [cursor=pointer]
            - listitem [ref=f6e247]:
              - button "" [active] [ref=f6e248] [cursor=pointer]
    - generic [ref=f6e250]:
      - paragraph [ref=f6e251]: OrangeHRM OS 5.9
      - paragraph [ref=f6e252]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f6e253] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
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
  21 |     await page.getByRole('textbox', { name: 'Middle Name'}).fill('Bill');
  22 |     await page.getByRole('textbox', { name: 'Last Name'}).fill('QA');
  23 |     // await page.getByTestId('employeeId').fill('1496');
  24 |     await page.getByRole('button', { name: ' Save '}).click();
  25 |     await expect(page.getByText('Successfully Saved')).toBeVisible();
  26 |     await expect(page).toHaveURL(/viewPersonalDetails/);
  27 |     await expect(page.getByRole('heading', { name: 'SKill QA' })).toBeVisible();
  28 |     await page.getByRole('link', { name: 'PIM' }).click();
  29 | 
  30 |     // Then, verify that the employee is added successfully.
  31 |     // div[role="row"]
  32 |     const name: string = "SKill";
  33 |     let row;
  34 |     while(true) 
  35 |         {
  36 |         row =  page.locator('div[role="row"]').filter({ hasText: name});
  37 |         if(await row.count() > 0)
  38 |         {
  39 |             // //button[@class="oxd-icon-button oxd-table-cell-action-space"]
  40 |             row.locator('//button[@class="oxd-icon-button oxd-table-cell-action-space"]').last().click(); // click on the delete button of the last row 
  41 |             break;
  42 |         }
  43 |         // Pagination is only checked when the employee is not on the current page.
  44 |         // This selector can match Previous if Next is absent on the last page.
  45 |         // button[class="oxd-pagination-page-item oxd-pagination-page-item--previous-next"]
  46 |         const nextbutton =  page.locator('button[class="oxd-pagination-page-item oxd-pagination-page-item--previous-next"]'); // Get the next page button 
> 47 |         if(await nextbutton.isDisabled())           
     |                             ^ Error: locator.isDisabled: Error: strict mode violation: locator('button[class="oxd-pagination-page-item oxd-pagination-page-item--previous-next"]') resolved to 2 elements:
  48 |             {	        
  49 |              // If the next button is disabled, we have reached the last page and the name was not found
  50 |             throw new Error('Could not find the name in the table');
  51 |             }
  52 |             await nextbutton.click();	// Click the next button to go to the next page
  53 | 
  54 |         }
  55 | });
```