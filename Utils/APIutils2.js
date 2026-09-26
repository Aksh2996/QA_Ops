class APIutils2
{

    constructor(apicontext,loginpayload)
    {
this.apicontext=apicontext
this.loginpayload=loginpayload
    }
    async get_token()
    {
// login api
const apiresponse=await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {data:this.loginpayload}
)
const loginresponsejson=await apiresponse.json()
console.log(loginresponsejson)
const token=loginresponsejson.token
return token
    }

    async get_order(orderpayload)
    {
// orderapi
let response={}
response.token=await this.get_token()
const orderresponse=await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
    {data:orderpayload,
        headers:
        {
        'Authorization':response.token,
        'Content-Type':'application/json'
    }
})
const orderresponsejson=await orderresponse.json()
console.log(orderresponsejson)
const orderid=orderresponsejson.orders[0]
response.orderid=orderid
return response
    }
}
module.exports={APIutils2}