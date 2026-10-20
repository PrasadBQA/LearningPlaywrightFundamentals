// Handling Multiple file Upload

import {test, expect} from '@playwright/test';

const pageURL = "https://www.patternfly.org/components/file-upload/multiple-file-upload/";

test.describe('Handeling Multiple file upload: ', () => {

    test.beforeEach('Runs before each test: ', async ({page}) => {
        await page.goto(pageURL);

    })


    test("Locatore Upload File feature and Upload Multiple files: ", async({page}) => {
        
    await page.locator("div.pf-v6-c-multiple-file-upload input").setInputFiles(
            [{

                name : 'file1.jpg',
                mimeType : 'image/jpeg',
                buffer: Buffer.from('image from thetestingacademy code')
                // Buffer will add the above text to the uploading file, won't make changes to the local file
                // If you are updaing exisiting file you no-need to use Buffer

                // (['C:\\path\\to\\file1.jpg','C:\\path\\to\\file2.jpg'],....)
                // A Buffer is useful when you want to provide file contents directly from your test code, without having actual files on disk. For example, you can create a test file in memory with a name, MIME type, and bytes.
                // When you upload a existing file with content, buffer totally ingnores it and create a temporary file with same name and uploads it
            },
            {
                name : 'file3.jpg',
                mimeType : 'image/jpeg',
                buffer: Buffer.from('this is test')
            }
        
        ]);

        // await page.locator(".pf-v6-c-button pf-m-secondary").click();

        await page.pause();


    })
}) 