# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 09_Frame_Iframe\251_Iframes_Handling.spec.ts >> Handling Iframes: 
- Location: tests\09_Frame_Iframe\251_Iframes_Handling.spec.ts:8:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('#frame-one').contentFrame().getByTestId('RESULT_TextField-1')

```

# Test source

```ts
  1  | // An Iframe(<iframe>) embeds another HTML page inside the current page. 
  2  | // It has it's own DOM, it's own CSS, it's own JavaScript, completely isolated from the parent page.
  3  | // Commong Eg:  payment forms (Stripe, Razorpay), embedded YouTube videos, Google Maps, reCAPTCHA, social media widgets, and third-party chat widgets.
  4  | 
  5  | 
  6  | import {test, expect, FrameLocator} from '@playwright/test';
  7  | 
  8  | test('Handling Iframes: ', async ({page}) => {
  9  | 
  10 |     await page.goto("https://app.thetestingacademy.com/playwright/frames/",
  11 |          { waitUntil: 'domcontentloaded' });
  12 | 
  13 |     let vechicleRegistration: FrameLocator =  page.frameLocator('#frame-one');
  14 |     await expect(vechicleRegistration.getByText("Vehicle registration")).toContainText("Vehicle registration");
  15 | 
> 16 |     await vechicleRegistration.getByTestId('RESULT_TextField-1').fill("Hyundai i20");
     |                                                                  ^ Error: locator.fill: Target page, context or browser has been closed
  17 |     await vechicleRegistration.getByText("Owner name").fill("XYZ");
  18 | });
  19 | 
```