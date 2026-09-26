
const{Given,When,Then,setDefaultTimeout}=require('@cucumber/cucumber')
const {chromium}=require('playwright')
const {POManager} = require('../../PageObjectmodel/POmanager');
const data = require('../../../Utils/Testdata.json');

setDefaultTimeout(30 * 1000);

Given('I am on the login page2', async function () {
this.pomanager=new POManager(this.page)
this.loginpage=this.pomanager.getLoginPage()
await this.loginpage.goTo()
});

When('I enter a valid username and password2', async function () {
await this.loginpage.login(data.username,data.password)
this.dashboardpage=this.pomanager.getdashboardpage()
});


When('I add the products2', async function () {
await this.dashboardpage.addproductsthenselect("ADIDAS ORIGINAL")
await this.dashboardpage.addproductsthenselect("ZARA COAT 3")
});

Then('I should be able to see the products added successfully2', async function () {
await this.dashboardpage.navigatetocart()
});

