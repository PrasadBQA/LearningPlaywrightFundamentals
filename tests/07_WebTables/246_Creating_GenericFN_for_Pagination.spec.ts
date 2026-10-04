// creating a generic function for pagination, so that we can use it in multiple test cases
// This function will take the name of the person, page object and return the row locator of the person if found, else it will throw an error
import {test, expect, Page, Locator} from "@playwright/test"

async function findRowByName(name: string, page: Page): Promise<Locator> {
    while(true) {
		const row =  page.locator('#employees-table tr').filter({ hasText: name});

		if(await row.count() > 0) 
			{
                return row; // return the row locator if found
			}
		
		const nextbutton =  page.getByTestId('next-page'); // Get the next page button
		if(await nextbutton.isDisabled()) {				   // If the next button is disabled, we have reached the last page and the name was not found
			throw new Error('Could not find the name in the table');
		}
		await nextbutton.click();	// Click the next button to go to the next page
		
	}
}

test('Web Table Pagination: ', async({page}) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    let name: string = "Mia Hoffmann";      //"Luca Greco";
    const row = await findRowByName(name, page); // call the generic function to find the row by name
    const mail = await row.locator('td[data-col="email"]').innerText(); // Get the email address from the row
    const country = await row.locator('td[class="country"]').innerText(); // Get the country from the row
    console.log(`${name} is from ${country} and email address is ${mail}`); 
})
