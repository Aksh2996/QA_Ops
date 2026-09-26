const{LoginPage}=require('./loginpage');
const{DashboardPage}=require('./dashboardpage')
class POManager
{
constructor(page)
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