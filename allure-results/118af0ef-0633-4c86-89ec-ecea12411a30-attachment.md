# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 13_Shadow_DOM\267_Shadow_DOm.spec.ts >> locate Shadow DOM and Assert visible: 
- Location: tests\13_Shadow_DOM\267_Shadow_DOm.spec.ts:10:9

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "", waiting until "load"

```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | 
  3  | 
  4  | test.describe( () => {
  5  | 
  6  |     test.beforeEach('Before Each test: ',async ({page}) => {
> 7  |         await page.goto("");
     |                    ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  8  |     });
  9  | 
  10 |     test('locate Shadow DOM and Assert visible: ', async ({page}) => {
  11 | 
  12 |         const card = page.getByTestId('card-account');
  13 |         await card.locator("input[name='email']").fill("test@mailinator.com");
  14 |         await card.getByTestId('card-account-password').fill('PassWd');
  15 |         await card.getByTestId('card-account-submit').click();
  16 | 
  17 |         await expect(page.getByTestId('card-account-status')).toContainText('test@mailinator.com');
  18 | 
  19 |         await page.pause();
  20 |     });
  21 | })
```