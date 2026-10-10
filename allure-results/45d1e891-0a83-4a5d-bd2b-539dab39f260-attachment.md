# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 11_JS_Alerts\260_JS_Alerts.spec.ts >> JS! Alerts:  >> JS Alert 3: 
- Location: tests\11_JS_Alerts\260_JS_Alerts.spec.ts:31:9

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - link "Fork me on GitHub":
      - /url: https://github.com/tourdedave/the-internet
      - img "Fork me on GitHub" [ref=e3] [cursor=pointer]
    - generic [ref=e5]:
      - heading "JavaScript Alerts" [level=3] [ref=e6]
      - paragraph [ref=e7]: Here are some examples of different JavaScript alerts which can be troublesome for automation
      - list [ref=e8]:
        - listitem [ref=e9]:
          - button "Click for JS Alert" [ref=e10]
        - listitem [ref=e11]:
          - button "Click for JS Confirm" [ref=e12]
        - listitem [ref=e13]:
          - button "Click for JS Prompt" [ref=e14]
      - heading "Result:" [level=4] [ref=e15]
      - paragraph
  - generic [ref=e17]:
    - separator [ref=e18]
    - generic [ref=e19]:
      - text: Powered by
      - link "Elemental Selenium" [ref=e20] [cursor=pointer]:
        - /url: http://elementalselenium.com/
```

# Test source

```ts
  1  | // JS Alerts - Alerts and Pop-UPs are not same. Both are different
  2  | // Alerts - Simple Alert(ok), With Confirmation (cancle, ok), with input(cancle, Ok)
  3  | // https://the-internet.herokuapp.com/javascript_alerts
  4  | // Pop-UPs are different and HTML Modal is different
  5  | 
  6  | import {test, expect, Locator} from '@playwright/test';
  7  | 
  8  | 
  9  | // You can declare a group of tests with a title. The title will be visible in the test report as a part of each test's title.
  10 | test.describe('JS! Alerts: ', ()=> {
  11 | 
> 12 |     test.beforeEach(async ({page}) => {
     |          ^ Test timeout of 30000ms exceeded while running "beforeEach" hook.
  13 |         await page.goto("https://the-internet.herokuapp.com/javascript_alerts", {timeout: 60000 });
  14 |     })
  15 | 
  16 |     test('JS Alert 1: ', async ({page}) => {
  17 | 
  18 |         // First we have register the coming dialog(alert)
  19 |         page.once('dialog', async dialog => {
  20 | 
  21 |             await dialog.accept(); // will accept the dialog, next will click the button
  22 |         })
  23 |         await page.getByRole('button', {name : 'Click for JS Alert'}).click();
  24 | 
  25 |         await page.pause();
  26 | });
  27 | 
  28 |     test('JS Alert 2: ', async ({page}) => {
  29 | });
  30 | 
  31 |     test('JS Alert 3: ', async ({page}) => {
  32 | });
  33 | 
  34 | });
```