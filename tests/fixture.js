const base =require('@playwright/test')
const payload={userEmail:"aprakash270@gmail.com",userPassword:"Vihaan@1234"}
const payload2={orders: [{country: "Cuba", productOrderedId: "6960eac0c941646b7a8b3e68"}]}
const {APIutils}=require('../Utils/APIutils.js')
const {request}=require('@playwright/test')

exports.customtest=base.test.extend(
{
authenticatedpage:async({browser},use)=>
{
const context=await browser.newContext()
const page=await context.newPage()
await page.goto("https://rahulshettyacademy.com/client")
await page.locator("#userEmail").fill("aprakash270@gmail.com")
await page.locator("input[type='password']").fill("Vihaan@1234")
await page.locator("#login").click()
await page.waitForLoadState('networkidle')
await use(page)
await context.close()

},
createorder:async({page},use)=>
{
    const apicontext=await request.newContext()
    const apiUtils=new APIutils(apicontext,payload)
    const response=await apiUtils.get_orderID(payload2)
    await use(response)
    await apicontext.dispose()
},
pr:
{
    pid:"hello"
}
}
)