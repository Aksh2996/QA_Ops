const {test}=require('@playwright/test')
test('practise1',async({browser})=>
{
    const constext=await browser.newcontext()
    const page=await constext.newpage()
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.pause()
    await page.
}
)