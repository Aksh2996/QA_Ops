const {test,expect}=require('playwright/test');
test('first playwright test',async({browser})=>
{
const context=await browser.newContext()
const page=await context.newPage()
const userName=page.locator("#username")
const signin=page.locator("input[name='signin']")
const textcontent=page.locator(".card-title a")
await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
await userName.fill("rahulshettyacaemy")
await page.locator("input#password").fill("Learning@830$3mK2")
await signin.click()
console.log(await page.locator("[style='display: block;']").textContent())
await expect(await page.locator("[style='display: block;']")).toContainText("Incorrect")
await userName.fill("")
await userName.fill("rahulshettyacademy")
await signin.click()
//console.log(await textcontent.nth(1).textContent())
console.log(await textcontent.allTextContents())

});

test('first playwright test4',async({browser})=>
{
const context=await browser.newContext()
const page=await context.newPage()
const userName=page.locator("#username")
const signin=page.locator("input[name='signin']")
const textcontent=page.locator(".card-title a")
const link=page.locator("[href*='documents-request']")
await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
const dropdown=page.locator("select.form-control")
await dropdown.selectOption("Teacher")
await page.locator(".radiotextsty").last().click()
await page.locator("#okayBtn").click()
//await page.pause()
await expect(page.locator(".radiotextsty").last()).toBeChecked()
console.log(await page.locator(".radiotextsty").last().isChecked())
await page.locator("#terms").click()
await expect(page.locator("#terms")).toBeChecked()
await page.locator("#terms").uncheck()
expect(await page.locator("#terms").isChecked()).toBeFalsy()
await expect(link).toHaveAttribute("class","blinkingText")
});

test('Child windows',async({browser})=>
{
const context=await browser.newContext()
const page=await context.newPage()
const documentlink=page.locator("[href*='documents-request']")
await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
const [newpage]=await Promise.all([
    context.waitForEvent('page'),documentlink.click()
])
const text=await newpage.locator(".red").textContent()
console.log(text)
const arrt=text.split("@")
const uname=arrt[1].split(" ")[0]
await page.locator("#username").fill(uname)
console.log(await page.locator("#username").inputValue())


});







test('first playwright test1',async({page})=>
{
await page.goto("https://www.google.com/")
console.log(await page.title())
await expect(page).toHaveTitle("Google")
});
