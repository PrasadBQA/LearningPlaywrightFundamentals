import{test, expect} from '@playwright/test';

test.skip('Check-out Paypal', async({page}) => {
    // never executes
});

test.only('Login as Prasad', async({page}) => {
    // // only this test runs, everything else in the file is ignored
});

test.fail('cart total is wrong, BUG-452', async({page}) => {
    expect(99).toBe(100); // returns 99
});

test.fixme('upload 2GB file', async({page}) => {
    // Skipped but flagges as "Needs Fixing"
});

test('full regression report', async({page}) => {
    test.slow();
    console.log(test.info().timeout); // 90000 instead of 30000
});

test('mobile layout', async({page, browserName}) => {
    test.fixme(browserName === 'webkit', 'Safari renders menu wrong');

    page.goto("https://courses.thetestingacademy.com/")
});

