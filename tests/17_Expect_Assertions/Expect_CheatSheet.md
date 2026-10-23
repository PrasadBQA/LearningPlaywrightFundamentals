# Playwright `expect` Assertions — Interview Cheatsheet

Quick reference of every common `expect` assertion in Playwright. One example each. Format: **What** → **How** → **Example**.

> Auto-retrying assertions (Locator / Page / APIResponse) MUST be `await`-ed. Value assertions (numbers, strings, booleans) are synchronous — no `await`.

---

## 1. Value Assertions (non-retrying, synchronous)

### `toBe`
- **What:** Strict equality (`===`). Primitives or same reference.
- **How:** `expect(value).toBe(expected)`
```ts
expect(1 + 2).toBe(3);
```

### `toEqual`
- **What:** Deep equality. Use for objects/arrays.
- **How:** `expect(obj).toEqual(expectedObj)`
```ts
expect({ a: 1, b: 2 }).toEqual({ b: 2, a: 1 });
```

### `toStrictEqual`
- **What:** Deep equality + same type + no extra undefined props.
- **How:** `expect(obj).toStrictEqual(expectedObj)`
```ts
expect({ a: 1 }).toStrictEqual({ a: 1 });
```

### `toBeTruthy` / `toBeFalsy`
- **What:** Asserts truthy/falsy in JS sense.
- **How:** `expect(value).toBeTruthy()`
```ts
expect('hello').toBeTruthy();
expect(0).toBeFalsy();
```

### `toBeNull` / `toBeUndefined` / `toBeDefined` / `toBeNaN`
- **What:** Check `null`, `undefined`, defined, or `NaN`.
```ts
expect(null).toBeNull();
expect(undefined).toBeUndefined();
expect(42).toBeDefined();
expect(NaN).toBeNaN();
```

### `toBeGreaterThan` / `toBeLessThan` / `toBeGreaterThanOrEqual` / `toBeLessThanOrEqual`
- **What:** Numeric comparison.
```ts
expect(34).toBeGreaterThan(11);
expect(5).toBeLessThanOrEqual(5);
```

### `toBeCloseTo`
- **What:** Floating-point comparison within precision.
- **How:** `expect(num).toBeCloseTo(expected, numDigits)`
```ts
expect(0.1 + 0.2).toBeCloseTo(0.3, 5);
```

### `toContain`
- **What:** String contains substring, or array contains item.
```ts
expect('playwright').toContain('play');
expect([1, 2, 3]).toContain(2);
```

### `toContainEqual`
- **What:** Array contains an item that deep-equals expected.
```ts
expect([{ id: 1 }, { id: 2 }]).toContainEqual({ id: 1 });
```

### `toHaveLength`
- **What:** Array/string length match.
```ts
expect([1, 2, 3]).toHaveLength(3);
```

### `toMatch`
- **What:** String matches regex or substring.
```ts
expect('user@test.com').toMatch(/@/);
```

### `toMatchObject`
- **What:** Object contains subset of expected properties.
```ts
expect({ id: 1, name: 'Pramod', role: 'admin' }).toMatchObject({ role: 'admin' });
```

### `toThrow` / `toThrowError`
- **What:** Function throws an error.
```ts
expect(() => { throw new Error('boom'); }).toThrow('boom');
```

---

## 2. Locator Assertions (auto-retrying, `await` required)

### `toBeVisible` / `toBeHidden`
- **What:** Element visible / hidden in DOM.
```ts
await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
```

### `toBeEnabled` / `toBeDisabled`
- **What:** Element is enabled / disabled.
```ts
await expect(page.getByLabel('First name')).toBeEnabled();
```

### `toBeEditable`
- **What:** Input is editable (not readonly/disabled).
```ts
await expect(page.getByRole('textbox', { name: 'Email' })).toBeEditable();
```

### `toBeEmpty`
- **What:** Element has no text or no value.
```ts
await expect(page.locator('#cart')).toBeEmpty();
```

### `toBeChecked`
- **What:** Checkbox/radio is checked. Use `{ checked: false }` for unchecked.
```ts
await expect(page.getByLabel('Remember me')).toBeChecked();
```

### `toBeFocused`
- **What:** Element has keyboard focus.
```ts
await expect(page.getByLabel('Search')).toBeFocused();
```

### `toBeAttached`
- **What:** Element exists in DOM (may not be visible).
```ts
await expect(page.locator('#toast')).toBeAttached();
```

### `toBeInViewport`
- **What:** Element is within viewport bounds.
```ts
await expect(page.getByText('Footer link')).toBeInViewport();
```

### `toHaveText`
- **What:** Exact text match (string or regex). Array for multiple elements.
```ts
await expect(page.locator('h1')).toHaveText('Welcome');
```

### `toContainText`
- **What:** Element text contains substring.
```ts
await expect(page.locator('.alert')).toContainText('success');
```

### `toHaveValue`
- **What:** Input has given value.
```ts
await expect(page.getByLabel('Email')).toHaveValue('test@test.com');
```

### `toHaveValues`
- **What:** Multi-select has given selected values.
```ts
await expect(page.locator('#langs')).toHaveValues(['en', 'fr']);
```

### `toHaveAttribute`
- **What:** Element has attribute with value.
```ts
await expect(page.getByLabel('Email')).toHaveAttribute('type', 'email');
```

### `toHaveClass`
- **What:** Element has class (string, regex, or array).
```ts
await expect(page.locator('button')).toHaveClass(/btn-primary/);
```

### `toHaveCount`
- **What:** Locator matches N elements.
```ts
await expect(page.locator('footer a')).toHaveCount(16);
```

### `toHaveCSS`
- **What:** Element has computed CSS property.
```ts
await expect(page.locator('button')).toHaveCSS('background-color', 'rgb(255, 0, 0)');
```

### `toHaveId`
- **What:** Element has given `id`.
```ts
await expect(page.getByLabel('First name')).toHaveId('first-name');
```

### `toHaveJSProperty`
- **What:** Element has JS DOM property with value.
```ts
await expect(page.locator('#video')).toHaveJSProperty('paused', true);
```

### `toHaveScreenshot`
- **What:** Visual regression — element/page matches stored snapshot.
```ts
await expect(page.locator('.hero')).toHaveScreenshot('hero.png');
```

### `toHaveAccessibleName` / `toHaveAccessibleDescription` / `toHaveRole`
- **What:** A11y tree assertions.
```ts
await expect(page.getByRole('button')).toHaveAccessibleName('Submit');
await expect(page.locator('button')).toHaveRole('button');
```

---

## 3. Page Assertions

### `toHaveTitle`
- **What:** Page `<title>` matches.
```ts
await expect(page).toHaveTitle(/Playwright/);
```

### `toHaveURL`
- **What:** Page URL matches.
```ts
await expect(page).toHaveURL('https://playwright.dev/');
```

### `toHaveScreenshot` (page-level)
- **What:** Full-page visual snapshot.
```ts
await expect(page).toHaveScreenshot('home.png', { fullPage: true });
```

---

## 4. API Response Assertions

### `toBeOK`
- **What:** Response status is 2xx.
```ts
const res = await request.get('/api/users');
await expect(res).toBeOK();
```

---

## 5. Modifiers

### `.not`
- **What:** Negate any assertion.
```ts
await expect(page.locator('#error')).not.toBeVisible();
expect('hello').not.toContain('bye');
```

### `expect.soft`
- **What:** Records failure but continues test. Useful for multiple checks.
```ts
await expect.soft(input).toBeVisible();
await expect.soft(input).toHaveValue('');
```

### `expect.poll`
- **What:** Re-runs a function until assertion passes or timeout.
```ts
await expect.poll(async () => (await api.get('/jobs')).status, { timeout: 10_000 }).toBe(200);
```

### `expect.toPass`
- **What:** Retries an entire block until it passes.
```ts
await expect(async () => {
  const res = await page.request.get('/health');
  expect(res.status()).toBe(200);
}).toPass({ timeout: 10_000 });
```

### `expect.configure`
- **What:** Custom expect with preset timeout/soft.
```ts
const slowExpect = expect.configure({ timeout: 30_000 });
await slowExpect(page.locator('#late')).toBeVisible();
```

---

## 6. Common Interview Q&A

| Q | A |
|---|---|
| Difference between `toBe` and `toEqual`? | `toBe` = strict `===` (primitives/ref). `toEqual` = deep equality (objects/arrays). |
| Why `await` Locator assertions? | They auto-retry until pass or timeout. Without `await`, no wait happens. |
| Soft vs hard assertion? | Soft records failure but continues. Hard stops test on first failure. |
| `expect.poll` vs `expect.toPass`? | `poll` re-runs one function; `toPass` retries a whole block of assertions. |
| `toHaveText` vs `toContainText`? | `toHaveText` = exact match. `toContainText` = substring match. |
| Default assertion timeout? | 5 seconds. Configurable via `expect.configure` or `playwright.config.ts`. |

---

**Tip:** All Locator/Page assertions auto-retry. Never wrap them in `try/catch` for retry logic — use `expect.toPass`.

---

## 7. Deep-Dive: Every Assertion Explained (Simple + Depth + Real-World)

> Format per assertion: **Simple** = one-line meaning · **Depth** = how it actually works · **Real-world** = a concrete test scenario.

### 7.1 Value Assertions

#### `toBe`
- **Simple:** Strict equality (`===`) on primitives or the exact same object reference.
- **Depth:** Uses `Object.is` under the hood for most cases, so `NaN` equals `NaN`, and `+0`/`-0` are treated like `===` except where `Object.is` differs. It does **not** compare object contents — two different `{}` objects fail.
- **Real-world:** After filtering, assert the result is the exact expected number: `expect(page.locator('.cart-item').count()).toBe(3);`

#### `toEqual`
- **Simple:** Deep equality — same shape and values, ignoring key order.
- **Depth:** Recursively compares objects/arrays and ignores `undefined` properties. Key order does not matter, but missing/extra keys do (unlike `toStrictEqual`, it tolerates `undefined`-valued props).
- **Real-world:** Verify an API returned the expected JSON object after sorting fields: `expect(await res.json()).toEqual({ id: 1, name: 'Pramod', role: 'admin' });`

#### `toStrictEqual`
- **Simple:** Deep equality **plus** same types and no surprise `undefined` properties.
- **Depth:** Stricter than `toEqual` — an object with an extra `undefined` key fails, and values must have identical types (`1` vs `'1'` fails).
- **Real-world:** Assert the exact row count is a number, not a string: `expect(rows).toStrictEqual(5);` and confirm a config object has no stray fields.

#### `toBeTruthy` / `toBeFalsy`
- **Simple:** Check if a value is truthy or falsy in JavaScript.
- **Depth:** Uses JS coercion rules — `0`, `''`, `null`, `undefined`, `NaN`, `false` are falsy; everything else is truthy. Great for "did something return a value?" checks.
- **Real-world:** `const token = await page.evaluate(() => localStorage.getItem('token')); expect(token).toBeTruthy();` — assert a login actually stored a session token.

#### `toBeNull` / `toBeUndefined` / `toBeDefined` / `toBeNaN`
- **Simple:** Exact checks for `null`, `undefined`, "has a value", and `NaN`.
- **Depth:** These are precise — `toBeDefined` fails only for `undefined`; `toBeNull` fails for `undefined`; `toBeNaN` is the correct way to check `NaN` (since `NaN === NaN` is `false`).
- **Real-world:** After clearing a field, `expect(await input.inputValue()).toBe('')` or check a not-yet-set state: `expect(page.locator('#error')).toBeNull()` when the element is removed. For "no value yet": `expect(session.user).toBeUndefined();`

#### `toBeGreaterThan` / `toBeLessThan` / `toBeGreaterThanOrEqual` / `toBeLessThanOrEqual`
- **Simple:** Numeric comparisons for min/max bounds.
- **Depth:** Works on numbers and dates (via `.getTime()` comparison is not automatic — use `toBeGreaterThan` on numbers). Fails with a clear diff of actual vs expected.
- **Real-world:** Assert search returns at least 10 results: `expect(page.locator('.result').count()).toBeGreaterThan(9);` or cart total stays under budget: `expect(total).toBeLessThanOrEqual(500);`

#### `toBeCloseTo`
- **Simple:** Compare floating-point numbers within a decimal precision.
- **Depth:** Avoids the classic `0.1 + 0.2 !== 0.3` problem by rounding to `numDigits` (default 2) before comparing.
- **Real-world:** Verify a price calculation with decimals: `expect(price * 1.08).toBeCloseTo(10.80, 2);`

#### `toContain`
- **Simple:** String contains a substring, or array contains a value.
- **Depth:** For strings it's a substring check; for arrays it's shallow membership (reference equality for objects). Does not do deep object matching — use `toContainEqual` for that.
- **Real-world:** `expect(page.locator('.toast').innerText()).toContain('success')` — assert a success toast message appears.

#### `toContainEqual`
- **Simple:** Array contains an object that **deep-equals** the expected one.
- **Depth:** Unlike `toContain`, it recursively compares object contents instead of reference, so a new object with the same fields matches.
- **Real-world:** Verify a product list includes a specific item: `expect(products).toContainEqual({ id: 42, name: 'Laptop' });`

#### `toHaveLength`
- **Simple:** Assert array or string length.
- **Depth:** Reads `.length` — convenient and more readable than `expect(arr.length).toBe(n)`.
- **Real-world:** Confirm exactly 3 search results: `expect(page.locator('.result')).toHaveCount(3)` is for locators, but for a plain array: `expect(results).toHaveLength(3);`

#### `toMatch`
- **Simple:** String matches a regex or substring.
- **Depth:** Accepts a `RegExp` or a string (treated as substring). Used for pattern validation like emails, phone numbers, IDs.
- **Real-world:** Validate a generated order ID format: `expect(orderId).toMatch(/^ORD-\d{6}$/);`

#### `toMatchObject`
- **Simple:** Object contains a **subset** of expected properties.
- **Depth:** The actual object may have extra keys — only the expected keys are checked, and nested objects are matched recursively.
- **Real-world:** Assert only the relevant fields of a large API response: `expect(user).toMatchObject({ role: 'admin', active: true });`

#### `toThrow` / `toThrowError`
- **Simple:** Assert that calling a function throws an error.
- **Depth:** Wrap the call in a function. Accepts an error message/substring, regex, error class, or nothing (just "throws"). `toThrowError` is an alias.
- **Real-world:** `expect(() => JSON.parse('bad json')).toThrow();` or verify a validation helper rejects: `expect(() => divide(1, 0)).toThrow('Cannot divide by zero');`

---

### 7.2 Locator Assertions

> All of these **auto-retry** for up to 5s (default) — they wait for the condition, so use them instead of `waitForTimeout`.

#### `toBeVisible` / `toBeHidden`
- **Simple:** Element is rendered and visible (non-zero size) / not visible.
- **Depth:** Visible means it has a layout box and is not `display:none` / `visibility:hidden`. `toBeHidden` passes if the element is absent, hidden, or zero-size. Auto-retries until the condition is met.
- **Real-world:** After clicking a dropdown, `await expect(page.getByRole('menu')).toBeVisible();` — wait for the menu to open.

#### `toBeEnabled` / `toBeDisabled`
- **Simple:** Element can be interacted with / is disabled.
- **Depth:** Reflects the `disabled` attribute plus `aria-disabled` state. A disabled button still exists but can't be clicked.
- **Real-world:** `await expect(page.getByRole('button', { name: 'Submit' })).toBeDisabled();` before filling a form, then `toBeEnabled()` after.

#### `toBeEditable`
- **Simple:** Input can be edited (not readonly/disabled).
- **Depth:** Passes for `input`, `textarea`, and `[contenteditable]` elements that are not `readonly` or `disabled`.
- **Real-world:** `await expect(page.getByLabel('Email')).toBeEditable();` — verify a profile field is unlocked for editing.

#### `toBeEmpty`
- **Simple:** Element has no text content or no value.
- **Depth:** For inputs, checks `value === ''`; for other elements, checks text content is empty (whitespace counts as non-empty in some versions — verify behavior).
- **Real-world:** `await expect(page.locator('#search-input')).toBeEmpty();` before typing, to confirm the field starts blank.

#### `toBeChecked`
- **Simple:** Checkbox or radio is checked (pass `{ checked: false }` for unchecked).
- **Depth:** Reads the `checked` property. Auto-retries until the checkbox reaches the desired state.
- **Real-world:** `await expect(page.getByLabel('I agree to terms')).toBeChecked();` after clicking a consent checkbox.

#### `toBeFocused`
- **Simple:** Element currently has keyboard focus.
- **Depth:** Checks `document.activeElement`. Useful to verify auto-focus or tab order.
- **Real-world:** `await expect(page.getByLabel('Username')).toBeFocused();` after page load — confirm the login field is auto-focused.

#### `toBeAttached`
- **Simple:** Element exists in the DOM (even if hidden).
- **Depth:** Passes as soon as the node is attached, regardless of visibility. Use it when an element may render but stay off-screen.
- **Real-world:** `await expect(page.locator('#toast')).toBeAttached();` — confirm a toast was added to the DOM, then check visibility separately.

#### `toBeInViewport`
- **Simple:** Element is within the visible viewport area.
- **Depth:** Verifies the element's bounding box intersects the viewport. Useful after `scrollIntoView`.
- **Real-world:** `await page.locator('#footer-link').scrollIntoViewIfNeeded(); await expect(page.locator('#footer-link')).toBeInViewport();`

#### `toHaveText`
- **Simple:** Element text matches exactly (string or regex); array for multiple elements.
- **Depth:** Strips extra whitespace and normalizes before comparing. Use an array to assert text of every matching element in order.
- **Real-world:** `await expect(page.locator('h1')).toHaveText('Welcome, Pramod');` or `await expect(page.locator('.nav a')).toHaveText(['Home', 'About', 'Contact']);`

#### `toContainText`
- **Simple:** Element text **contains** a substring.
- **Depth:** Partial match — the element can have additional text. More resilient than `toHaveText` when text is dynamic.
- **Real-world:** `await expect(page.locator('.alert')).toContainText('success');` even if the alert reads "Operation success: saved".

#### `toHaveValue`
- **Simple:** Input's current `value` matches.
- **Depth:** Reads the DOM `value` property (not the `value` attribute). For multi-selects, use `toHaveValues`.
- **Real-world:** `await expect(page.getByLabel('Email')).toHaveValue('test@test.com');` after `fill()`.

#### `toHaveValues`
- **Simple:** Multi-select has the given selected values (in order).
- **Depth:** For `<select multiple>`, compares the array of currently selected option values.
- **Real-world:** `await expect(page.locator('#languages')).toHaveValues(['en', 'fr']);` after choosing two languages.

#### `toHaveAttribute`
- **Simple:** Element has an attribute with a given value (or just exists if no value).
- **Depth:** Checks the HTML attribute. Use it for `href`, `src`, `data-*`, `aria-*`, etc.
- **Real-world:** `await expect(page.getByLabel('Email')).toHaveAttribute('type', 'email');` or `await expect(page.locator('a.download')).toHaveAttribute('href', /\.pdf$/);`

#### `toHaveClass`
- **Simple:** Element has a class (string, regex, or array of classes).
- **Depth:** With an array, matches all classes (order-independent, extra classes allowed). Regex checks against the full `class` string.
- **Real-world:** `await expect(page.locator('button')).toHaveClass(/btn-primary/);` or `await expect(page.locator('#btn')).toHaveClass(['btn', 'active']);`

#### `toHaveCount`
- **Simple:** Locator resolves to exactly N elements.
- **Depth:** Auto-retries until the DOM has the expected number of matches — perfect for list loading and virtualization.
- **Real-world:** `await expect(page.locator('footer a')).toHaveCount(16);` or after adding an item, `await expect(page.locator('.cart-item')).toHaveCount(4);`

#### `toHaveCSS`
- **Simple:** Element's computed CSS property equals a value.
- **Depth:** Reads the **computed** style, so colors come back as `rgb(...)`, not hex/names. Use exact computed values.
- **Real-world:** `await expect(page.locator('button')).toHaveCSS('background-color', 'rgb(255, 0, 0)');` to verify an error state turned the button red.

#### `toHaveId`
- **Simple:** Element's `id` attribute matches.
- **Depth:** Shorthand for `toHaveAttribute('id', ...)`.
- **Real-world:** `await expect(page.getByLabel('First name')).toHaveId('first-name');`

#### `toHaveJSProperty`
- **Simple:** Element has a JavaScript DOM property with a value.
- **Depth:** Checks a live DOM property (like `paused`, `checked`, `value`, `scrollHeight`) — more reliable than attributes for dynamic state.
- **Real-world:** `await expect(page.locator('#video')).toHaveJSProperty('paused', true);` — verify a video is paused.

#### `toHaveScreenshot` (element-level)
- **Simple:** Visual regression — element matches a stored snapshot image.
- **Depth:** On first run it saves the baseline; later runs compare pixel-by-pixel. Use `maxDiffPixels`/`threshold` to tolerate minor differences.
- **Real-world:** `await expect(page.locator('.hero')).toHaveScreenshot('hero.png');` in CI to catch unintended visual changes.

#### `toHaveAccessibleName` / `toHaveAccessibleDescription` / `toHaveRole`
- **Simple:** Assert the accessibility tree (name, description, role).
- **Depth:** Reads what assistive tech sees, not raw DOM. Catches missing `aria-label`/`alt` and wrong semantic roles.
- **Real-world:** `await expect(page.getByRole('button')).toHaveAccessibleName('Submit');` and `await expect(page.locator('button')).toHaveRole('button');` to guard accessibility.

---

### 7.3 Page Assertions

#### `toHaveTitle`
- **Simple:** Page `<title>` matches (string or regex).
- **Depth:** Auto-retries until the title matches. Use regex for dynamic suffixes.
- **Real-world:** `await expect(page).toHaveTitle(/Playwright/);` after navigation.

#### `toHaveURL`
- **Simple:** Page URL matches (string or regex).
- **Depth:** Auto-retries until navigation completes and URL matches. Regex is handy for query params.
- **Real-world:** `await expect(page).toHaveURL('https://playwright.dev/');` or `await expect(page).toHaveURL(/\/checkout/);` after clicking "Buy".

#### `toHaveScreenshot` (page-level)
- **Simple:** Full-page visual snapshot comparison.
- **Depth:** Captures the whole rendered page (use `fullPage: true`). Baselines stored in the screenshot directory.
- **Real-world:** `await expect(page).toHaveScreenshot('home.png', { fullPage: true });` to lock the homepage layout.

---

### 7.4 API Response Assertions

#### `toBeOK`
- **Simple:** HTTP response status is 2xx.
- **Depth:** Fails for 4xx/5xx/3xx (redirections are not OK). Reads the response status code.
- **Real-world:** `const res = await request.get('/api/users'); await expect(res).toBeOK();` before parsing the body.

---

### 7.5 Modifiers

#### `.not`
- **Simple:** Negate any assertion.
- **Depth:** Inverts the pass/fail condition. For auto-retrying assertions, `.not` retries until the condition is **not** met.
- **Real-world:** `await expect(page.locator('#error')).not.toBeVisible();` or `expect('hello').not.toContain('bye');`

#### `expect.soft`
- **Simple:** Record a failure but keep the test running.
- **Depth:** Collects all soft failures and reports them together at the end, instead of stopping at the first failure. Great for multi-field validation.
- **Real-world:**
```ts
await expect.soft(input).toBeVisible();
await expect.soft(input).toHaveValue('');
await expect.soft(page.locator('#error')).not.toBeVisible();
```

#### `expect.poll`
- **Simple:** Re-run a function until the assertion passes or times out.
- **Depth:** Polls a synchronous/async function at intervals. Ideal for non-UI state (API jobs, background tasks) that changes over time.
- **Real-world:** `await expect.poll(async () => (await api.get('/jobs/1')).status, { timeout: 10_000 }).toBe('completed');`

#### `expect.toPass`
- **Simple:** Retry an entire block of assertions until it passes.
- **Depth:** Re-runs the whole callback, allowing multiple related assertions to become consistent together. Use when `poll` is too narrow.
- **Real-world:**
```ts
await expect(async () => {
  const res = await page.request.get('/health');
  expect(res.status()).toBe(200);
}).toPass({ timeout: 10_000 });
```

#### `expect.configure`
- **Simple:** Create a custom `expect` with preset timeout/soft settings.
- **Depth:** Returns a new expect instance; useful to apply a longer timeout or soft mode to a group of assertions without repeating options.
- **Real-world:** `const slowExpect = expect.configure({ timeout: 30_000 }); await slowExpect(page.locator('#late')).toBeVisible();`