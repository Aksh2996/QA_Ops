import {LoginPage} from './loginpage'
import {DashboardPage} from './dashboardpage'
import {Page} from '@playwright/test'
export class POManager
{
    page:Page
    loginpage:LoginPage
    dashboardpage:DashboardPage

constructor(page:Page)
{
    this.page=page
    this.loginpage=new LoginPage(this.page)
    this.dashboardpage=new DashboardPage(this.page)
}

getLoginPage()
{
    return this.loginpage
}

getdashboardpage()
{
    return this.dashboardpage
}
}

module.exports={POManager}