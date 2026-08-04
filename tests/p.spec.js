const{test}=require('@playwright/test')
test('p1',async({browser})=>{
const context=await browser.newContext()
const page=await context.newPage()
await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
const [page2]=await Promise.all([context.waitForEvent('page'),page.locator("#opentab").click()])

console.log(await page2.title())
}
)
