import {test, expect} from '@playwright/test';
import 'dotenv/config'; // Loads variables form .env file


test('Handeling Basic AUTH: ', async({page}) => {

    const username = process.env['Basic_AUTH_USERNAME'];
    const password = process.env['Basic_AUTH_PASSWORD'];

    if (!username || !password) {
        throw new Error('Basic auth credentials are missing. Please add Basic_AUTH_USERNAME and Basic_AUTH_PASSWORD to your .env file.');
    }

    await page.goto(`https://${username}:${password}@the-internet.herokuapp.com/basic_auth`);
});