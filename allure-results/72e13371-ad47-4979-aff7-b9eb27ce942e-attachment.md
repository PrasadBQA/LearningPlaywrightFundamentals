# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\247_ORHRM_Exercise.spec.ts >> ORHRM Exercise: 
- Location: tests\07_WebTables\247_ORHRM_Exercise.spec.ts:7:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'SKill Bill QA' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('heading', { name: 'SKill Bill QA' }) with timeout 5000ms
  - waiting for getByRole('heading', { name: 'SKill Bill QA' })

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "PIM" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: manda user
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: Configuration 
      - listitem:
        - link "Employee List":
          - /url: "#"
      - listitem:
        - link "Add Employee":
          - /url: "#"
      - listitem:
        - link "Reports":
          - /url: "#"
      - button ""
- heading "SKill QA" [level=6]
- img "profile picture"
- tablist:
  - tab "Personal Details":
    - link "Personal Details":
      - /url: /web/index.php/pim/viewPersonalDetails/empNumber/225
  - tab "Contact Details":
    - link "Contact Details":
      - /url: /web/index.php/pim/contactDetails/empNumber/225
  - tab "Emergency Contacts":
    - link "Emergency Contacts":
      - /url: /web/index.php/pim/viewEmergencyContacts/empNumber/225
  - tab "Dependents":
    - link "Dependents":
      - /url: /web/index.php/pim/viewDependents/empNumber/225
  - tab "Immigration":
    - link "Immigration":
      - /url: /web/index.php/pim/viewImmigration/empNumber/225
  - tab "Job":
    - link "Job":
      - /url: /web/index.php/pim/viewJobDetails/empNumber/225
  - tab "Salary":
    - link "Salary":
      - /url: /web/index.php/pim/viewSalaryList/empNumber/225
  - tab "Report-to":
    - link "Report-to":
      - /url: /web/index.php/pim/viewReportToDetails/empNumber/225
  - tab "Qualifications":
    - link "Qualifications":
      - /url: /web/index.php/pim/viewQualifications/empNumber/225
  - tab "Memberships":
    - link "Memberships":
      - /url: /web/index.php/pim/viewMemberships/empNumber/225
- heading "Personal Details" [level=6]
- separator
- text: Employee Full Name*
- textbox "First Name": SKill
- textbox "Middle Name": Bill
- textbox "Last Name": QA
- separator
- text: Employee Id
- textbox: "0425"
- text: Other Id
- textbox
- text: Driver's License Number
- textbox
- text: License Expiry Date
- textbox "yyyy-dd-mm"
- text: 
- separator
- text: Nationality -- Select --  Marital Status -- Select --  Date of Birth
- textbox "yyyy-dd-mm"
- text:  Gender
- radio "Male"
- text: Male
- radio "Female"
- text: Female
- separator
- paragraph: "* Required"
- button "Save"
- separator
- heading "Custom Fields" [level=6]
- separator
- text: Blood Type -- Select --  Test_Field
- textbox
- separator
- button "Save"
- separator
- heading "Attachments" [level=6]
- button " Add"
- separator
- text: No Records Found
- table:
  - rowgroup:
    - row " File Name Description Size Type Date Added Added By Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "File Name"
      - columnheader "Description"
      - columnheader "Size"
      - columnheader "Type"
      - columnheader "Date Added"
      - columnheader "Added By"
      - columnheader "Actions"
  - rowgroup
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
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
> 27 |     await expect(page.getByRole('heading', { name: 'SKill Bill QA' })).toBeVisible();
     |                                                                        ^ Error: expect(locator).toBeVisible() failed
  28 |     await page.getByRole('link', { name: 'PIM' }).click();
  29 | 
  30 |     // Then, verify that the employee is added successfully.
  31 |     // div[role="row"]
  32 |     const name: string = "SKill Bill QA";
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
  46 |         const nextbutton =  page.locator('button:has(i.bi-chevron-right)'); // Get the next page button
  47 |         if(await nextbutton.isVisible() === false)   
  48 |             // On last page, next button is disappearing in the UI
  49 |             // when the next button is not visible, we have reached the last page and the name was not found
  50 |             {	             
  51 |              // If the next button is disabled, we have reached the last page and the name was not found
  52 |             throw new Error('Could not find the name in the table');
  53 |             }
  54 |             await nextbutton.click();	// Click the next button to go to the next page
  55 | 
  56 |         }
  57 | });
```