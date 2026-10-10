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
Error: locator.isEnabled: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.bi-chevron-right')

```

# Page snapshot

```yaml
- generic [ref=f5e3]:
  - generic:
    - complementary [ref=f5e4]:
      - navigation "Sidepanel" [ref=f5e5]:
        - generic [ref=f5e6]:
          - link [ref=f5e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f5e9]
          - text: 
        - generic [ref=f5e10]:
          - generic [ref=f5e11]:
            - generic [ref=f5e12]:
              - textbox "Search" [ref=f5e15]
              - button "" [ref=f5e16] [cursor=pointer]
            - separator [ref=f5e18]
          - list [ref=f5e19]:
            - listitem [ref=f5e20]:
              - link "Admin" [ref=f5e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f5e25]:
              - link "PIM" [ref=f5e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f5e41]:
              - link "Leave" [ref=f5e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f5e46]:
              - link "Time" [ref=f5e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f5e54]:
              - link "Recruitment" [ref=f5e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f5e62]:
              - link "My Info" [ref=f5e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f5e70]:
              - link "Performance" [ref=f5e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f5e80]:
              - link "Dashboard" [ref=f5e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f5e85]:
              - link "Directory" [ref=f5e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f5e90]:
              - link "Maintenance" [ref=f5e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f5e96]:
              - link "Claim" [ref=f5e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f5e105]:
              - link "Buzz" [ref=f5e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f5e110]:
      - generic [ref=f5e111]:
        - generic [ref=f5e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f5e114]
        - link [ref=f5e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f5e117] [cursor=pointer]
        - list [ref=f5e123]:
          - listitem [ref=f5e124]:
            - generic [ref=f5e125] [cursor=pointer]:
              - img "profile picture" [ref=f5e126]
              - paragraph [ref=f5e127]: Grace user
              - generic [ref=f5e128]: 
      - navigation "Topbar Menu" [ref=f5e130]:
        - list [ref=f5e131]:
          - listitem [ref=f5e132] [cursor=pointer]:
            - generic [ref=f5e133]:
              - text: Configuration
              - generic [ref=f5e134]: 
          - listitem [ref=f5e135] [cursor=pointer]:
            - link "Employee List" [ref=f5e136]:
              - /url: "#"
          - listitem [ref=f5e137] [cursor=pointer]:
            - link "Add Employee" [ref=f5e138]:
              - /url: "#"
          - listitem [ref=f5e139] [cursor=pointer]:
            - link "Reports" [ref=f5e140]:
              - /url: "#"
          - button "" [ref=f5e142] [cursor=pointer]
  - generic [ref=f5e144]:
    - generic [ref=f5e146]:
      - generic [ref=f5e147]:
        - generic [ref=f5e148]:
          - heading "Employee Information" [level=5] [ref=f5e150]
          - button "" [ref=f5e153] [cursor=pointer]
        - separator [ref=f5e155]
        - generic [ref=f5e157]:
          - generic [ref=f5e159]:
            - generic [ref=f5e161]:
              - generic [ref=f5e162]: Employee Name
              - textbox "Type for hints..." [ref=f5e167]
            - generic [ref=f5e169]:
              - generic [ref=f5e170]: Employee Id
              - textbox [ref=f5e173]
            - generic [ref=f5e175]:
              - generic [ref=f5e176]: Employment Status
              - generic [ref=f5e180] [cursor=pointer]:
                - generic [ref=f5e181]: "-- Select --"
                - generic [ref=f5e182]: 
            - generic [ref=f5e185]:
              - generic [ref=f5e186]: Include
              - generic [ref=f5e190] [cursor=pointer]:
                - generic [ref=f5e191]: Current Employees Only
                - generic [ref=f5e192]: 
            - generic [ref=f5e195]:
              - generic [ref=f5e196]: Supervisor Name
              - textbox "Type for hints..." [ref=f5e201]
            - generic [ref=f5e203]:
              - generic [ref=f5e204]: Job Title
              - generic [ref=f5e208] [cursor=pointer]:
                - generic [ref=f5e209]: "-- Select --"
                - generic [ref=f5e210]: 
            - generic [ref=f5e213]:
              - generic [ref=f5e214]: Sub Unit
              - generic [ref=f5e218] [cursor=pointer]:
                - generic [ref=f5e219]: "-- Select --"
                - generic [ref=f5e220]: 
          - separator [ref=f5e222]
          - generic [ref=f5e223]:
            - button "Reset" [ref=f5e224] [cursor=pointer]
            - button "Search" [ref=f5e225] [cursor=pointer]
      - generic [ref=f5e226]:
        - button " Add" [ref=f5e228] [cursor=pointer]:
          - generic [ref=f5e229]: 
          - text: Add
        - generic [ref=f5e230]:
          - separator [ref=f5e231]
          - generic [ref=f5e232]: (211) Records Found
        - table [ref=f5e235]:
          - rowgroup [ref=f5e236]:
            - row [ref=f5e237]:
              - columnheader "" [ref=f5e238]:
                - generic [ref=f5e240] [cursor=pointer]:
                  - checkbox "" [ref=f5e241]
                  - generic [ref=f5e242]: 
              - columnheader "Id " [ref=f5e244]:
                - text: Id
                - generic [ref=f5e245]:
                  - generic [ref=f5e246] [cursor=pointer]: 
                  - text:  
              - columnheader "First (& Middle) Name " [ref=f5e247]:
                - text: First (& Middle) Name
                - generic [ref=f5e248]:
                  - generic [ref=f5e249] [cursor=pointer]: 
                  - text:  
              - columnheader "Last Name " [ref=f5e250]:
                - text: Last Name
                - generic [ref=f5e251]:
                  - generic [ref=f5e252] [cursor=pointer]: 
                  - text:  
              - columnheader "Job Title " [ref=f5e253]:
                - text: Job Title
                - generic [ref=f5e254]:
                  - generic [ref=f5e255] [cursor=pointer]: 
                  - text:  
              - columnheader "Employment Status " [ref=f5e256]:
                - text: Employment Status
                - generic [ref=f5e257]:
                  - generic [ref=f5e258] [cursor=pointer]: 
                  - text:  
              - columnheader "Sub Unit " [ref=f5e259]:
                - text: Sub Unit
                - generic [ref=f5e260]:
                  - generic [ref=f5e261] [cursor=pointer]: 
                  - text:  
              - columnheader "Supervisor " [ref=f5e262]:
                - text: Supervisor
                - generic [ref=f5e263]:
                  - generic [ref=f5e264] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f5e265]
          - rowgroup [ref=f5e266]:
            - row [ref=f5e268] [cursor=pointer]:
              - cell "" [ref=f5e269]:
                - generic [ref=f5e272]:
                  - checkbox "" [ref=f5e273]
                  - generic [ref=f5e274]: 
              - cell "0274" [ref=f5e276]
              - cell "Urvi" [ref=f5e278]
              - cell "Sri" [ref=f5e280]
              - cell [ref=f5e282]
              - cell [ref=f5e283]
              - cell [ref=f5e284]
              - cell [ref=f5e285]
              - cell [ref=f5e286]:
                - generic [ref=f5e287]:
                  - button "" [ref=f5e288]
                  - button "" [ref=f5e290]
            - row [ref=f5e293] [cursor=pointer]:
              - cell "" [ref=f5e294]:
                - generic [ref=f5e297]:
                  - checkbox "" [ref=f5e298]
                  - generic [ref=f5e299]: 
              - cell "0273" [ref=f5e301]
              - cell "Urvi" [ref=f5e303]
              - cell "Sri" [ref=f5e305]
              - cell [ref=f5e307]
              - cell [ref=f5e308]
              - cell [ref=f5e309]
              - cell [ref=f5e310]
              - cell [ref=f5e311]:
                - generic [ref=f5e312]:
                  - button "" [ref=f5e313]
                  - button "" [ref=f5e315]
            - row [ref=f5e318] [cursor=pointer]:
              - cell "" [ref=f5e319]:
                - generic [ref=f5e322]:
                  - checkbox "" [ref=f5e323]
                  - generic [ref=f5e324]: 
              - cell "0285" [ref=f5e326]
              - cell "Urvi" [ref=f5e328]
              - cell "Sri" [ref=f5e330]
              - cell [ref=f5e332]
              - cell [ref=f5e333]
              - cell [ref=f5e334]
              - cell [ref=f5e335]
              - cell [ref=f5e336]:
                - generic [ref=f5e337]:
                  - button "" [ref=f5e338]
                  - button "" [ref=f5e340]
            - row [ref=f5e343] [cursor=pointer]:
              - cell "" [ref=f5e344]:
                - generic [ref=f5e347]:
                  - checkbox "" [ref=f5e348]
                  - generic [ref=f5e349]: 
              - cell "0249" [ref=f5e351]
              - cell "Virat" [ref=f5e353]
              - cell "Kohli" [ref=f5e355]
              - cell [ref=f5e357]
              - cell [ref=f5e358]
              - cell [ref=f5e359]
              - cell [ref=f5e360]
              - cell [ref=f5e361]:
                - generic [ref=f5e362]:
                  - button "" [ref=f5e363]
                  - button "" [ref=f5e365]
            - row [ref=f5e368] [cursor=pointer]:
              - cell "" [ref=f5e369]:
                - generic [ref=f5e372]:
                  - checkbox "" [ref=f5e373]
                  - generic [ref=f5e374]: 
              - cell "09876" [ref=f5e376]
              - cell "yedghjb1 ru84" [ref=f5e378]
              - cell "90jsnd" [ref=f5e380]
              - cell [ref=f5e382]
              - cell [ref=f5e383]
              - cell [ref=f5e384]
              - cell [ref=f5e385]
              - cell [ref=f5e386]:
                - generic [ref=f5e387]:
                  - button "" [ref=f5e388]
                  - button "" [ref=f5e390]
            - row [ref=f5e393] [cursor=pointer]:
              - cell "" [ref=f5e394]:
                - generic [ref=f5e397]:
                  - checkbox "" [ref=f5e398]
                  - generic [ref=f5e399]: 
              - cell "0311" [ref=f5e401]
              - cell "yqlluQZYFR" [ref=f5e403]
              - cell "yaTQBtZgLf" [ref=f5e405]
              - cell [ref=f5e407]
              - cell [ref=f5e408]
              - cell [ref=f5e409]
              - cell [ref=f5e410]
              - cell [ref=f5e411]:
                - generic [ref=f5e412]:
                  - button "" [ref=f5e413]
                  - button "" [ref=f5e415]
            - row [ref=f5e418] [cursor=pointer]:
              - cell "" [ref=f5e419]:
                - generic [ref=f5e422]:
                  - checkbox "" [ref=f5e423]
                  - generic [ref=f5e424]: 
              - cell "0480" [ref=f5e426]
              - cell "Zameer ." [ref=f5e428]
              - cell "Shaik" [ref=f5e430]
              - cell [ref=f5e432]
              - cell [ref=f5e433]
              - cell [ref=f5e434]
              - cell [ref=f5e435]
              - cell [ref=f5e436]:
                - generic [ref=f5e437]:
                  - button "" [ref=f5e438]
                  - button "" [ref=f5e440]
            - row [ref=f5e443] [cursor=pointer]:
              - cell "" [ref=f5e444]:
                - generic [ref=f5e447]:
                  - checkbox "" [ref=f5e448]
                  - generic [ref=f5e449]: 
              - cell "0479" [ref=f5e451]
              - cell "Zameer ." [ref=f5e453]
              - cell "Shaik" [ref=f5e455]
              - cell [ref=f5e457]
              - cell [ref=f5e458]
              - cell [ref=f5e459]
              - cell [ref=f5e460]
              - cell [ref=f5e461]:
                - generic [ref=f5e462]:
                  - button "" [ref=f5e463]
                  - button "" [ref=f5e465]
            - row [ref=f5e468] [cursor=pointer]:
              - cell "" [ref=f5e469]:
                - generic [ref=f5e472]:
                  - checkbox "" [ref=f5e473]
                  - generic [ref=f5e474]: 
              - cell "0493" [ref=f5e476]
              - cell "Zameer ." [ref=f5e478]
              - cell "Shaik" [ref=f5e480]
              - cell [ref=f5e482]
              - cell [ref=f5e483]
              - cell [ref=f5e484]
              - cell [ref=f5e485]
              - cell [ref=f5e486]:
                - generic [ref=f5e487]:
                  - button "" [ref=f5e488]
                  - button "" [ref=f5e490]
            - row [ref=f5e493] [cursor=pointer]:
              - cell "" [ref=f5e494]:
                - generic [ref=f5e497]:
                  - checkbox "" [ref=f5e498]
                  - generic [ref=f5e499]: 
              - cell "0500" [ref=f5e501]
              - cell "Zameer ." [ref=f5e503]
              - cell "Shaik" [ref=f5e505]
              - cell [ref=f5e507]
              - cell [ref=f5e508]
              - cell [ref=f5e509]
              - cell [ref=f5e510]
              - cell [ref=f5e511]:
                - generic [ref=f5e512]:
                  - button "" [ref=f5e513]
                  - button "" [ref=f5e515]
            - row [ref=f5e518] [cursor=pointer]:
              - cell "" [ref=f5e519]:
                - generic [ref=f5e522]:
                  - checkbox "" [ref=f5e523]
                  - generic [ref=f5e524]: 
              - cell "0259" [ref=f5e526]
              - cell "zlnudvgazrzlnudvgazr" [ref=f5e528]
              - cell "smzocpbvswsmzocpbvsw" [ref=f5e530]
              - cell [ref=f5e532]
              - cell [ref=f5e533]
              - cell [ref=f5e534]
              - cell [ref=f5e535]
              - cell [ref=f5e536]:
                - generic [ref=f5e537]:
                  - button "" [ref=f5e538]
                  - button "" [ref=f5e540]
        - navigation "Pagination Navigation" [ref=f5e543]:
          - list [ref=f5e544]:
            - listitem [ref=f5e545]:
              - button "" [ref=f5e546] [cursor=pointer]
            - listitem [ref=f5e548]:
              - button "1" [ref=f5e549] [cursor=pointer]
            - listitem [ref=f5e550]:
              - button "2" [ref=f5e551] [cursor=pointer]
            - listitem [ref=f5e552]:
              - button "3" [ref=f5e553] [cursor=pointer]
            - listitem [ref=f5e554]:
              - button "4" [ref=f5e555] [cursor=pointer]
            - listitem [ref=f5e556]:
              - button "5" [ref=f5e557] [cursor=pointer]
    - generic [ref=f5e558]:
      - paragraph [ref=f5e559]: OrangeHRM OS 5.9
      - paragraph [ref=f5e560]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f5e561] [cursor=pointer]:
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
  33 |     while(true) 
  34 |         {
  35 |         row =  page.locator('.oxd-table-card').filter({ hasText: name});
  36 |         //page.locator('div[role="row"]').filter({ hasText: name});
  37 |         if(await row.count() > 0)
  38 |         { 
  39 |             break;
  40 |         }
  41 | 
  42 |         const nextbutton =  page.locator('.bi-chevron-right'); // Get the next page button
> 43 |         if(await nextbutton.isEnabled() === false)
     |                             ^ Error: locator.isEnabled: Test timeout of 30000ms exceeded.
  44 |             {
  45 |             throw new Error('Could not find the name in the table');
  46 |             }
  47 |             await nextbutton.click();
  48 | 
  49 |         }
  50 | 
  51 |         //button[@class="oxd-icon-button oxd-table-cell-action-space"]
  52 |         await row.locator('//button[@class="oxd-icon-button oxd-table-cell-action-space"]').last().click(); // click on the delete button of the last row
  53 |         await page.getByRole('button', { name: 'Yes, Delete' }).click(); // click on the delete button of the confirmation popup
  54 | });
```