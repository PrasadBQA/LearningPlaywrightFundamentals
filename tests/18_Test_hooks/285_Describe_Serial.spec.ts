import { test, expect } from '@playwright/test';

test.describe.serial('Checkout suite — must run in order', () => {
    // test.describe.serial() declares a group whose tests run in file order, 
    // in the same worker, one after another
    // Ordering guaranteed — tests run in the order they're declared (a normal describe/top-level doesn't guarantee order across workers).
    // Fail-fast behavior — if open landing fails, search product, add to cart, go to checkout are skipped and reported as "did not run".
    // Retries restart the group — when a test is retried, the entire serial group is retried from the first test, not just the failed one.
    // Overrides config — fullyParallel: true in playwright.config.ts doesn't split a serial group.

    // Where to use it: flows that legitimately depend on each other — checkout, onboarding wizards, 
    // create→edit→delete CRUD chains, login-then-use-session. Don't use it for independent tests: 
    // it kills parallelism, hides failures behind skips, and a single flaky test takes down the rest of the group.
    test('open landing', async () => { console.log('1'); });
    test('search product', async () => { console.log('2'); });
    test('add to cart', async () => { console.log('3'); });
    test('go to checkout', async () => { console.log('4'); });
});


// These two run in parallel — independent of the serial suite above.
test('standalone A', async () => { console.log('A'); });
test('standalone B', async () => { console.log('B'); });