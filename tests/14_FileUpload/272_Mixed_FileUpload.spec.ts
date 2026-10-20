// Handeling mixed file upload

import {test, expect} from '@playwright/test';
import path from 'path';


const pageUrl = "https://www.patternfly.org/components/file-upload/multiple-file-upload/";

test.describe('Handeling Mixed files Upload: ', () => {

    test.beforeEach('Runs before each test: ', async({page}) => {
        await page.goto(pageUrl);
    })

    test('Find Locator and Upload files: ', async({page}) => {

        const files = [
            path.join(__dirname, 'sample.doc'),
            path.join(__dirname, 'file1.jpg'),
            path.join(__dirname,'sample.pdf')
        ];

        files.forEach(f => console.log(f));

        await page.locator('div.pf-v6-c-multiple-file-upload input').setInputFiles(files);

        const uploadArea = page.locator('.pf-v6-c-multiple-file-upload__status');

        await expect(uploadArea).toContainText('sample.doc');
        await expect(uploadArea).toContainText('file1.jpg');
        await expect(uploadArea).toContainText('sample.pdf');


        await page.pause();

    })
})