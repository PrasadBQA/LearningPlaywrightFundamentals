import {test, expect, Locator} from '@playwright/test';

// Find "Luca Greco","Mia Hoffmann" in the table and get his email address. Then, assert that the email address is "
test('Web Table Pagination: ', async({page}) => {

	await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

	const name: string = "Mia Hoffmann";      //"Luca Greco";
	let row; // we don't know the row number, so we will find it dynamically

	while(true) {
		row =  page.locator('#employees-table tr').filter({ hasText: name});

		if(await row.count() > 0) 
			{
				break;
			}
		
		const nextbutton =  page.getByTestId('next-page'); // Get the next page button
		if(await nextbutton.isDisabled()) {				   // If the next button is disabled, we have reached the last page and the name was not found
			throw new Error('Could not find the name in the table');
		}
		await nextbutton.click();	// Click the next button to go to the next page
		
	}
	const mail = await row.locator('td[data-col="email"]').innerText(); // Get the email address from the row')
	const country = await row.locator('td[class="country"]').innerText(); // Get the country from the row
	console.log(`${name} is from ${country} and email address is ${mail}`);

	await page.pause();
});
