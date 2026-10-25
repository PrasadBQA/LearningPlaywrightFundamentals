// We can directly import JSON and read the data, but we cann't write the data this way
// To Read and Write, we need to read JSON through fs and create JS Object. Then we can read and wright to the JS Object

 import {test, expect} from '@playwright/test';
 import userData from './User.json';

 test('Read Data from JSON', async({page}) => {

    console.log(userData.username);
    console.log(userData.password);
 })