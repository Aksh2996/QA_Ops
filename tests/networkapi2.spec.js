const {test,expect} = require('@playwright/test')

test('network test2', async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.locator("#userEmail").fill("aprakash270@gmail.com")
    await page.locator("#userPassword").fill("Vihaan@1234")
    await page.locator(".btn").click()
    await page.waitForLoadState('networkidle')
    await page.locator(".card-body b").first().waitFor()
    await page.locator("button[routerlink*='myorders']").click()
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*", route => route.continue({
        url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6a4f74e585b8849b49d'
    }))
    await page.locator("button:has-text('View')").first().click()
    await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order")

})
