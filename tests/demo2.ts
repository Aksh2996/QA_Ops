import {Locator, Page} from '@playwright/test'
class LoginPage
{
    page:Page
    usernametxbx:Locator
    passwordtxbx:Locator
    signinbutton:Locator
    constructor(page:any)
    {
        this.page=page
        this.usernametxbx=page.locator("#userEmail")
        this.passwordtxbx=page.locator("input[type='password']")
        this.signinbutton=page.locator("#login")
    }
    async goTo()
    {
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    }
    async login(username,password)
    {
    await this.usernametxbx.fill(username)
    await this.passwordtxbx.fill(password)
    await this.signinbutton.click()
    await this.page.waitForURL("**/dashboard/**")
    }
}

module.exports={LoginPage}