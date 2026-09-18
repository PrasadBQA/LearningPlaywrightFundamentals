# Playwright Commands

Use `npx playwright` to run the Playwright version installed in this project.

## Check Playwright version

```powershell
npx playwright --version
```

## Install Playwright browsers

Install all supported browsers:

```powershell
npx playwright install
```

Install only Chromium:

```powershell
npx playwright install chromium
```

## Open a page

Open a URL in the default browser:

```powershell
npx playwright open https://app.wingify.com/#/login
```

Open a URL in a specific browser:

```powershell
npx playwright open --browser chromium https://app.wingify.com/#/login
```

Supported browser values include:

- `chromium`
- `firefox`
- `webkit`

Short option form:

```powershell
npx playwright open -b chromium https://app.wingify.com/#/login
```

## Capture a screenshot

Capture the visible page and save it as a PNG file:

```powershell
npx playwright screenshot https://app.wingify.com/#/login login-page.png
```

Choose a browser:

```powershell
npx playwright screenshot --browser chromium https://app.wingify.com/#/login login-page.png
```

Capture the full page:

```powershell
npx playwright screenshot --full-page https://app.wingify.com/#/login full-login-page.png
```

Set the viewport size:

```powershell
npx playwright screenshot --viewport-size "1280,720" https://app.wingify.com/#/login desktop-login.png
```

Wait for an element before taking the screenshot:

```powershell
npx playwright screenshot --wait-for-selector "#login-form" https://app.wingify.com/#/login login-form.png
```

Wait for a specific time in milliseconds:

```powershell
npx playwright screenshot --wait-for-timeout 3000 https://app.wingify.com/#/login delayed-login.png
```

Use a device profile:

```powershell
npx playwright screenshot --device "iPhone 13" https://app.wingify.com/#/login mobile-login.png
```

Use dark color scheme:

```powershell
npx playwright screenshot --color-scheme dark https://app.wingify.com/#/login dark-login.png
```

The filename extension determines the image format. For example:

```powershell
npx playwright screenshot https://example.com page.jpg
```

## Generate test code with codegen

`codegen` means code generation. It opens a browser and records actions such as navigating, typing, and clicking. Playwright converts those actions into test code that you can copy into a `.spec.ts` file and improve with assertions.

Basic workflow:

1. Run a `codegen` command with the page URL.
2. Interact with the page in the opened browser.
3. Copy the generated code from the Playwright Inspector.
4. Paste it into a Playwright test file and add assertions.

Open a page and generate Playwright code while you interact with it:

```powershell
npx playwright codegen https://app.wingify.com/#/login
```

Choose Chromium, TypeScript, and a viewport size:

```powershell
npx playwright codegen --browser chromium --target typescript --viewport-size "1280,720" https://app.wingify.com/#/login
```

Generated TypeScript may look like this:

```typescript
import { test, expect } from '@playwright/test';

test('login flow', async ({ page }) => {
	await page.goto('https://app.wingify.com/#/login');
	await page.getByLabel('Username').fill('testuser');
	await page.getByLabel('Password').fill('password');
	await page.getByRole('button', { name: 'Login' }).click();
	await expect(page).toHaveURL(/dashboard/);
});
```

Codegen is a starting point, not a finished test. Review the generated locators, add meaningful assertions, and keep real passwords out of test files.

Generate code for a different language:

```powershell
npx playwright codegen --target javascript https://example.com
npx playwright codegen --target python https://example.com
npx playwright codegen --target java https://example.com
npx playwright codegen --target csharp https://example.com
```

Use a device profile:

```powershell
npx playwright codegen --device "iPhone 13" https://example.com
```

Save browser storage, such as cookies and local storage:

```powershell
npx playwright codegen --save-storage=auth.json https://app.wingify.com/#/login
```

Load previously saved browser storage:

```powershell
npx playwright codegen --load-storage=auth.json https://app.wingify.com/
```

Review generated code before using it in a test. Do not keep real passwords in generated test files.

## Run tests

Run all Playwright tests:

```powershell
npx playwright test
```

Run one test file:

```powershell
npx playwright test tests/firsttest.spec.ts
```

Run tests in headed mode so the browser is visible:

```powershell
npx playwright test --headed
```

Run tests in a specific browser project:

```powershell
npx playwright test --project=chromium
```

Run tests with the Playwright Inspector:

```powershell
npx playwright test --debug
```

## View the HTML report

Open the last test report:

```powershell
npx playwright show-report
```

## Show command help

Show all Playwright commands:

```powershell
npx playwright --help
```

Show options for a specific command:

```powershell
npx playwright open --help
npx playwright screenshot --help
npx playwright codegen --help
npx playwright test --help
```

## Command structure

Most commands follow this pattern:

```text
npx playwright <command> [options] <arguments>
```

- `npx` runs the project-local Playwright package.
- `playwright` invokes the Playwright CLI.
- The command is the action, such as `open`, `screenshot`, or `codegen`.
- Options begin with `--`, such as `--browser` or `--full-page`.
- Arguments provide values, such as a URL or filename.
