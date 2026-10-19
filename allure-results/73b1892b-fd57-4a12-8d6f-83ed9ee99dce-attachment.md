# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 11_JS_Alerts\261_Basic_AUTH.spec.ts >> Handeling Basic AUTH: 
- Location: tests\11_JS_Alerts\261_Basic_AUTH.spec.ts:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://admin:admin@the-internet.herokuapp.com/basic_auth", waiting until "load"

```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import 'dotenv/config'; // Loads variables form .env file
  3  | 
  4  | 
  5  | test('Handeling Basic AUTH: ', async({page}) => {
  6  | 
  7  |     const username = process.env['Basic_AUTH_USERNAME'];
  8  |     const password = process.env['Basic_AUTH_PASSWORD'];
  9  | 
  10 |     if (!username || !password) {
  11 |         throw new Error('Basic auth credentials are missing. Please add Basic_AUTH_USERNAME and Basic_AUTH_PASSWORD to your .env file.');
  12 |     }
  13 | 
> 14 |     await page.goto(`https://${username}:${password}@the-internet.herokuapp.com/basic_auth`);
     |                ^ Error: page.goto: Target page, context or browser has been closed
  15 | });
```