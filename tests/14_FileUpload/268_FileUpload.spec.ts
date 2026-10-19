// File-Upload

import {test, expect} from '@playwright/test';
import path, { join } from 'path';


const pageURL = "https://the-internet.herokuapp.com/upload";

test.describe('Handeling File Upload: ', () => {

    test.beforeEach('Runs Before Each test: ',async({page}) => {
        await page.goto(pageURL);

    })

    test("Locate File Upload and Upload file: ", async({page}) => {
          // Find File upload locator/input field
          // You should know the path of the file/s that has to upload

          const filepath = path.join(__dirname, 'testdata.txt');
          console.log(filepath);

          await page.locator("#file-upload").setInputFiles([filepath]);
          await page.locator("#file-submit").click();
          await expect(page.locator("#uploaded-files")).toContainText("testdata.txt");

    })
})