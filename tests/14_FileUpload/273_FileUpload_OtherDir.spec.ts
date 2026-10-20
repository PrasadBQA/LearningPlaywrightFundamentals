// Uploading files from different directories

import {test, expect} from '@playwright/test';
import path from 'path';


const pageUrl = "https://www.patternfly.org/components/file-upload/multiple-file-upload/";

/**
 * Same upload as 264, but the fixtures live OUTSIDE this folder, in a shared
 * test-data/uploads/ directory at the repo root:
 *
 *   LearningPlaywrightFundamentals3x/
 *   ├── test-data/uploads/      <- sample.pdf, sample.jpg, sample.doc
 *   └── tests/14_FileUpload/    <- this spec
 *
 * Walking up with '..' from __dirname is what keeps it working no matter
 * which directory you start the runner from.
 */


const UPLOAD_DIR = path.join(__dirname, '');

test.describe('Uploading files from different Directories: ', () => {

    test.beforeEach('Runs before each test: ', async({page}) => {

        await page.goto(pageUrl);
    })

    test('Locate file upload and upload files from different directories: ', async({page}) => {
        await page.locator('div.pf-v6-c-multiple-file-upload input')
        .setInputFiles([
           String.raw`C:\Users\prasa\Documents\LearnPlaywrightFundamentals\testdata\uploads\sample.pdf`,
            String.raw`C:\Users\prasa\Documents\LearnPlaywrightFundamentals\tests\14_FileUpload\sample.doc`
        ])

    const uploadArea = page.locator('.pf-v6-c-multiple-file-upload__status');
    await expect(uploadArea).toContainText('sample.pdf');
    await expect(uploadArea).toContainText('sample.doc');

    await page.pause();
    })
})