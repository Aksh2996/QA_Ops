const {test,expect,request}=require('@playwright/test')
const payload={userEmail:"aprakash270@gmail.com",userPassword:"Vihaan@1234"}
const payload2={orders: [{country: "Cuba", productOrderedId: "6960eac0c941646b7a8b3e68"}]}
const emptypayload={data: [], message: "No Orders"}
let orderid
let token

test.beforeAll(async()=>
{
const apicontext=await request.newContext()
const apiresponse=await apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {
        data:payload
    }
)
expect(apiresponse.ok()).toBeTruthy()
const apiresponsejson=await apiresponse.json()
token=apiresponsejson.token
console.log(token)
const orderresponse=await apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",{
    data:payload2,
    headers:{
        'Authorization':token,
        'Content-type':'application/json'
    }
})
const orderresponsejson=await orderresponse.json()
console.log(orderresponsejson)
orderid=orderresponsejson.orders[0]
})

test('Playwright assignment3',async({browser})=>
{
const context=await browser.newContext()
const page=await context.newPage()
await page.addInitScript(value=>{
    window.localStorage.setItem('token',value)
},token)
const products=page.locator(".card-body")
const prod="ZARA COAT 3"
await page.goto("https://rahulshettyacademy.com/client")
await page.waitForLoadState('networkidle')
await products.first().waitFor()
const prodcount=await products.count()
await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/695b6315c941646b7a7eaa34",
    async route=>{
        const response=await page.request.fetch(route.request())
        let body=JSON.stringify(emptypayload)
        route.fulfill({response,body})
    }
)
await page.locator("li [routerlink='/dashboard/myorders']").click()
await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/695b6315c941646b7a7eaa34")
console.log(await page.locator(".mt-4").textContent())

});



