class DashboardPage
{
constructor(page)
{
    this.page=page
    this.products=this.page.locator(".card-body")
}
async addproductsthenselect(productName)
{
await this.products.filter({hasText:`${productName}`}).getByRole("button",{name:"Add to Cart"}).click()
}
async navigatetocart()
{
    await this.page.locator("[routerlink='/dashboard/cart']").click()
}
}

module.exports={DashboardPage}