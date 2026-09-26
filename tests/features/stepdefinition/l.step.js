
const{Given,When,Then,setDefaultTimeout}=require('@cucumber/cucumber')

setDefaultTimeout(30 * 1000);

Given('I am on the login page', async function () {
await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
});

When('I enter a valid username as {string}', async function (username) {
await this.page.locator("#userEmail").fill(username);
});

When('I enter a valid password as {string}', async function (password) {
await this.page.locator("input[type='password']").fill(password);
});

When('I click the Login button', async function () {
await this.page.locator("#login").click();
});

Then('I should be logged in successfully', async function () {
  await this.page.waitForLoadState('networkidle');

  console.log(await this.page.locator(".card-body b").allTextContents())
});