const{test}=require('@playwright/test')

test('assign1',async({browser})=>{
const context=await browser.newContext()
const page=await context.newPage()
await page.goto("https://www.google.com/")
})