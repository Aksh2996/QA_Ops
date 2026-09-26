const {test,expect,request}=require('@playwright/test')
const {customtest}=require('./fixture.js')
/**
 * @param {{authenticatedpage: import('@playwright/test').Page, createorder: any}} fixtures
 */

customtest('Fixtures',async({authenticatedpage,createorder,pr})=>
    {
await authenticatedpage.goto("https://rahulshettyacademy.com/client")
await authenticatedpage.locator("button[routerlink='/dashboard/myorders']").click()
await expect(authenticatedpage.getByText(createorder.orderid)).toBeVisible()
console.log(pr.pid)

})