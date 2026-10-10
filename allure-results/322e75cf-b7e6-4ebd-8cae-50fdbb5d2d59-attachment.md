# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 11_JS_Alerts\260_JS_Alerts.spec.ts >> JS! Alerts:  >> JS Alert accept 3
- Location: tests\11_JS_Alerts\260_JS_Alerts.spec.ts:54:9

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
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
  13 |         await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  14 |     });
  15 | 
  16 |     test('JS Alert 1: ', async ({page}) => {
  17 | 
  18 |         
  19 |         
  20 |         page.once('dialog', async dialog => {
  21 |             // First we have register the coming dialog(alert)
  22 |             console.log('Alert Type: ', dialog.type());
  23 |             console.log('Alert Message', dialog.message());
  24 |             expect(dialog.message()).toBe('I am a JS Alert');
  25 |             await dialog.accept(); // will accept the dialog, next will click the button
  26 |         })
  27 |         await page.getByRole('button', {name : 'Click for JS Alert'}).click();
  28 | 
  29 |        // await page.pause();
  30 | });
  31 | 
  32 | 
  33 | 
  34 |     test('JS Alert 2: ', async ({page}) => {
  35 | 
  36 |         page.once('dialog', async dialog => {
  37 |             console.log('Alert type:', dialog.type());
  38 |             expect(dialog.type()).toBe('confirm');
  39 |             console.log('Alert message:', dialog.message());
  40 |             expect(dialog.message()).toBe('I am a JS Confirm');
  41 |             await dialog.accept();
  42 |             //await dialog.dismiss();
  43 |         });
  44 | 
  45 |         await page.locator('button', { hasText: 'Click for JS Confirm' }).click();
  46 |         await expect(page.locator('#result')).toHaveText('You clicked: Ok');
  47 | 
  48 | 
  49 | 
  50 | 
  51 | 
  52 | 
  53 |     });
  54 |     test('JS Alert accept 3', async ({ page }) => {
  55 | 
  56 |         const inputText = 'Hello from The Testing Academy';
  57 | 
  58 |         page.once('dialog', async dialog => {
  59 |             expect(dialog.type()).toBe('prompt');
  60 |             expect(dialog.defaultValue()).toBe('');
  61 |             await dialog.accept(inputText);
  62 |             //await dialog.dismiss();
  63 |         });
  64 | 
  65 |         await page.locator('button', { hasText: 'Click for JS Prompt' }).click();
  66 |         await expect(page.locator('#result')).toHaveText(`You entered: ${inputText}`);
  67 | 
  68 | 
  69 | });
  70 | 
  71 | });
```