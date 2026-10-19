// Single file upload File Upload

import {test, expect} from '@playwright/test';
import path, { join } from 'path';


const pageURL = "https://app.thetestingacademy.com/playwright/widgets/upload-download";

test.describe('Handeling Single File Upload: ', () => {

    test.beforeEach('Runs Before Each test: ',async({page}) => {
        await page.goto(pageURL);

    })

    test("Locate File Upload and Upload file: ", async({page}) => {
          // Find File upload locator/input field
          // You should know the path of the file/s that has to upload

          const filepath = path.join(__dirname, "testdata.txt");
          console.log("File Path is: ", filepath);

          // __dirname - Current working directory full path 
          await page.getByTestId("single-upload").setInputFiles([filepath]);
          await page.pause();

    })
})