// Handeling file Downloads

import {test, expect} from '@playwright/test';

const pageUrl ="https://app.thetestingacademy.com/playwright/widgets/upload-download";

test.describe('File Download Handeling: ', () => {
    test.beforeEach('Runs Before Each test: ', async({page}) => {
        await page.goto(pageUrl);
    })

    test('Locate Download button and save the file: ', async({page}) => {

       const [staricDownload] =  await Promise.all([
            page.waitForEvent('download'),
            page.getByTestId('download-static').click()
        ]);

        await staricDownload.saveAs('./out/'+ staricDownload.suggestedFilename());
    })
})