const {test,expect}=require('@playwright/test')

test("morevali",async({page})=>{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
//await page.goto("http://google.com/?zx=1782457365221")
//await page.goBack()
//await page.goForward()
await expect(page.locator("#displayed-text")).toBeVisible()
await page.locator("#hide-textbox").click()
await expect(page.locator("#displayed-text")).toBeHidden()
//await page.pause()
page.on('dialog',dialog=>dialog.accept())
await page.locator("#confirmbtn").click()
await page.locator("#mousehover").hover()
const framepage=page.frameLocator("#courses-iframe")
await framepage.locator("li a[href*='lifetime-access']:visible").click()
const text=await framepage.locator(".text h2").textContent()
console.log(text.split(" ")[1])
})

test("screenshot",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.locator("#displayed-text").screenshot({path:'s.png'})
    await page.locator("#hide-textbox").click()
    await page.screenshot({path:'screenshot.png'})
})

test("matchscreenshot",async({page})=>{
    await page.goto("https://www.google.com/")
    expect(await page.screenshot()).toMatchSnapshot('a.png')
})

