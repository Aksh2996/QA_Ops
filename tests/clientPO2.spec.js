
const {customtest}=require('../Utils/Testdata')

const {POManager}=require('./PageObjectmodel/POmanager')



customtest(`first playwright test2`,async({browser,TestData})=>
{
const context = await browser.newContext({
  recordVideo: {
    dir: 'test-results/videos/'
  }
})
const page=await context.newPage()
const products=page.locator(".card-body")
const pomanager=new POManager(page)
const loginpage=pomanager.getLoginPage()
await loginpage.goTo()
await loginpage.login(TestData.username,TestData.password)
const dashboardpage=pomanager.getdashboardpage()
await dashboardpage.addproductsthenselect("ADIDAS ORIGINAL")
await dashboardpage.addproductsthenselect("ZARA COAT 3")
await dashboardpage.navigatetocart()
await context.close();


});

