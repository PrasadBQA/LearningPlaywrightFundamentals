# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 08_Web_Select_Frames_Iframe\248_Select_DropDown.spec.ts >> Select DropDown: 
- Location: tests\08_Web_Select_Frames_Iframe\248_Select_DropDown.spec.ts:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://the-internet.herokuapp.com/dropdown", waiting until "networkidle"

```

# Test source

```ts
  1  | // Native dropdown developed using select tag and options tag
  2  | import {test, expect, Locator} from '@playwright/test';
  3  | 
  4  | 
  5  | test('Select DropDown: ', async({ page }) => {
  6  | 
> 7  |    await page.goto("https://the-internet.herokuapp.com/dropdown", { waitUntil: 'networkidle' });
     |               ^ Error: page.goto: Test timeout of 30000ms exceeded.
  8  |     await page.locator('#dropdown').click();
  9  |     await page.selectOption('#dropdown', "Option 2");
  10 | 
  11 | })
```