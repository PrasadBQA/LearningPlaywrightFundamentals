# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 10_Keyboard_Hover_Drag_Drop_Calendar\256_Hover_Exercise.spec.ts >> Hovering actions: 
- Location: tests\10_Keyboard_Hover_Drag_Drop_Calendar\256_Hover_Exercise.spec.ts:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByText('Wi-Fi', { exact: true })

```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | 
  3  | test('Hovering actions: ', async ({page}) => {
  4  | 
  5  |     await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");
  6  |     await page.getByText("Add-ons", { exact : true }).hover();
  7  | 
> 8  |     await page.getByText("Wi-Fi", { exact : true }).click();
     |                                                     ^ Error: locator.click: Target page, context or browser has been closed
  9  | 
  10 |     await page.pause();
  11 | });
```