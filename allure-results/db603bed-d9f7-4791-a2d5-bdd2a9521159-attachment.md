# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 12_Handle_SVG\265_SMaps_Optimized.spec.ts >> Simple Maps >> Locate SVG Root and Get state details from maps, assert visible: 
- Location: tests\12_Handle_SVG\265_SMaps_Optimized.spec.ts:12:9

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('path').nth(40)
    - locator resolved to <path opacity="1" fill="#88a4bc" stroke="#ffffff" fill-opacity="1" stroke-opacity="1" stroke-linejoin="round" class="sm_state sm_state_INUP" stroke-width="0.9375000000000001" transform="matrix(0.688,0,0,0.688,0,0)" d="M529,360.9L528.8,361.4L528.1999999999999,361.59999999999997L528.9,362.09999999999997L529.8,361.7L530.4,361.5L530.8,362L530.6999999999999,362.7L529.9999999999999,363.2L530.1999999999999,364L530.4,364.1L531.5,364.40000000000003L531.8,364.70000000000005L531.9,364.90000000000003L532.199999…></path>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <tspan dy="5.599995048522942">Uttar Pradesh</tspan> from <text x="307.536" y="251.808" opacity="1" stroke="none" fill="#ffffff" stroke-width="0" font-size="16px" font-weight="bold" font="10px "Arial"" font-family="Arial" text-anchor="middle" class="sm_label sm_label_INUP" transform="matrix(0.344,0,0,0.344,201.7436,165.186)">…</text> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <tspan dy="5.599995048522942">Uttar Pradesh</tspan> from <text x="307.536" y="251.808" opacity="1" stroke="none" fill="#ffffff" stroke-width="0" font-size="16px" font-weight="bold" font="10px "Arial"" font-family="Arial" text-anchor="middle" class="sm_label sm_label_INUP" transform="matrix(0.344,0,0,0.344,201.7436,165.186)">…</text> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    8 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <tspan dy="5.599995048522942">Uttar Pradesh</tspan> from <text x="307.536" y="251.808" opacity="1" stroke="none" fill="#ffffff" stroke-width="0" font-size="16px" font-weight="bold" font="10px "Arial"" font-family="Arial" text-anchor="middle" class="sm_label sm_label_INUP" transform="matrix(0.344,0,0,0.344,201.7436,165.186)">…</text> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
    14 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <tspan dy="5.2325624542236255">Uttar Pradesh</tspan> from <text x="307.536" y="251.808" opacity="1" stroke="none" fill="#ffffff" stroke-width="0" font-size="16px" font-weight="bold" font="10px "Arial"" font-family="Arial" text-anchor="middle" class="sm_label sm_label_INUP" transform="matrix(0.344,0,0,0.344,201.7436,165.186)">…</text> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms

```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | 
  3  | test.describe('Simple Maps', () => {
  4  | 
  5  |     const simpleMaps = "https://simplemaps.com/svg/country/in";
  6  | 
  7  |     test.beforeEach(async ({page}) => {
  8  |         console.log("Before Each test: ");
  9  |         await page.goto(simpleMaps);
  10 |     })
  11 | 
  12 |     test('Locate SVG Root and Get state details from maps, assert visible: ', async ({page}) => {
  13 |         
  14 |         const states = await page
  15 |         .locator("path").all();
  16 |         // Iterate all states and find their class state
  17 |         for(const state of states)
  18 |         {
  19 |             const className = await state.getAttribute("class");
  20 |             console.log(className);
  21 |             if(className){
  22 |                 // checks if className is empty/null
  23 |                 console.log(className);
  24 | 
  25 |                 
  26 |             if(className?.endsWith("UP"))
  27 |             {
> 28 |                 state.click();
     |                       ^ Error: locator.click: Test ended.
  29 |             }
  30 |             }
  31 |         }
  32 | 
  33 |         await page.pause();
  34 |     })
  35 | })
```