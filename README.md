# Learn Playwright Fundamentals

A beginner-friendly Playwright project for learning browser automation and end-to-end testing with TypeScript.

## Prerequisites

Install the following before setting up the project:

- Node.js `26.5.0` or newer
- npm `11.19.1` or newer
- VS Code or another code editor

Check your installed versions:

```powershell
node --version
npm --version
```

The required versions are also recorded in `package.json` under `engines`.

## Project Setup

Open a terminal in the project folder and install the project dependencies:

```powershell
npm install
```

Install the Playwright browsers:

```powershell
npx playwright install
```

To install only Chromium:

```powershell
npx playwright install chromium
```

`npx playwright` uses the Playwright version installed in this project. It is not necessary to install Playwright globally.

## Run Tests

Run all Playwright tests:

```powershell
npx playwright test
```

Run one test file:

```powershell
npx playwright test tests/firsttest.spec.ts
```

Run tests with the browser visible:

```powershell
npx playwright test --headed
```

Run tests in a specific browser:

```powershell
npx playwright test --project=chromium
```

Run tests in debug mode:

```powershell
npx playwright test --debug
```

## View the Test Report

After a test run, open the HTML report with:

```powershell
npx playwright show-report
```

## Generate Tests with Codegen

Playwright `codegen` opens a browser, records actions such as typing and clicking, and generates Playwright code for those actions. It is useful for creating a starting point for a test.

Start codegen with the training application:

```powershell
npx playwright codegen https://app.thetestingacademy.com/playwright/ttacart/
```

Use Chromium, TypeScript, and a 1280 x 720 viewport:

```powershell
npx playwright codegen --browser chromium --target typescript --viewport-size "1280,720" https://app.thetestingacademy.com/playwright/ttacart/
```

### Codegen workflow

1. Run a `codegen` command.
2. Interact with the page in the browser that opens.
3. Review the generated code in the Playwright Inspector.
4. Copy the code into a `.spec.ts` file under `tests`.
5. Add assertions with `expect`.
6. Replace test data and credentials with safe test values or environment variables.
7. Run the test with `npx playwright test`.

Example generated test structure:

```typescript
import { test, expect } from '@playwright/test';

test('shopping flow', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/.*login.*/);
});
```

Codegen is a starting point. Always review its locators and add meaningful assertions. Do not commit real passwords, tokens, or other secrets.

Save browser storage after a login flow:

```powershell
npx playwright codegen --save-storage=auth.json https://app.thetestingacademy.com/playwright/ttacart/
```

Load saved browser storage in a later session:

```powershell
npx playwright codegen --load-storage=auth.json https://app.thetestingacademy.com/playwright/ttacart/
```

## Useful Playwright Commands

Open a page:

```powershell
npx playwright open --browser chromium https://example.com
```

Take a full-page screenshot:

```powershell
npx playwright screenshot --full-page https://example.com page.png
```

Show the installed Playwright version:

```powershell
npx playwright --version
```

Show command help:

```powershell
npx playwright --help
```

More command examples are available in [playwrightcommands.md](playwrightcommands.md).

## Project Files

- `tests/`: Playwright test files
- `playwright.config.ts`: Playwright test configuration
- `playwrightcommands.md`: CLI command notes
- `package.json`: Project metadata and dependencies
- `package-lock.json`: Exact dependency versions installed by npm
- `playwright-report/`: Generated HTML test report, ignored by Git
- `test-results/`: Generated test artifacts, ignored by Git

## Security Notes

Keep credentials and environment-specific values in `.env` or another secure secret store. Do not commit `.env`, authentication state, passwords, or tokens to Git.
