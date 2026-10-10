# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 08_Web_Select_Frames_Iframe\250_Advanced_Ddowns.spec.ts >> Handling Advanced Drop-Downs: 
- Location: tests\08_Web_Select_Frames_Iframe\250_Advanced_Ddowns.spec.ts:8:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByTestId('Playwright')

```

# Test source

```ts
  1  | // advanced Drop-Downs: 
  2  | // Five custom-built combobox variants — single, multi, creatable, grouped, and async. 
  3  | // DOM classes intentionally mirror the popular react-select conventions 
  4  | // (tta-rs__control, tta-rs__menu, tta-rs__option) so your locators transfer to real production widgets.
  5  | 
  6  | import {test, expect} from '@playwright/test';
  7  | 
  8  | test('Handling Advanced Drop-Downs: ', async({page}) => {
  9  | 
  10 |     await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes", 
  11 |         { waitUntil: 'domcontentloaded'});
  12 | 
  13 |     // 1. Single - Searchable
  14 |     await page.locator('#rs-single').click();
  15 |     await page.getByText("Cypress",{ exact: false}).click();
  16 |     await page.getByTestId("rs-single-input").fill("Playwright");
  17 | 
  18 |     // 2. Multiple - Searchable
  19 |     await page.locator('#rs-multi').click();
> 20 |     await page.getByTestId("Playwright").click();
     |                                          ^ Error: locator.click: Target page, context or browser has been closed
  21 |     await page.getByText("Cucumber", { exact: true }).click();
  22 |     await page.keyboard.press("Escape");
  23 | 
  24 |     await page.pause();
  25 | });
```