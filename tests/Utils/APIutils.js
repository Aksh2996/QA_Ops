class APIutils
{
constructor(apicontext,loginPayLoad)
{
this.apicontext=apicontext
this.loginPayLoad=loginPayLoad
}
async get_token()
{
const apiresponse=await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {
        data:this.loginPayLoad
    }
)
const apiresponsejson=await apiresponse.json()
const token=apiresponsejson.token
console.log(token)
return token
}

async get_orderID(payload2)
{
const response={}
response.token=await this.get_token()
const orderresponse=await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",{
    data:payload2,
    headers:{
        'Authorization':response.token,
        'Content-type':'application/json'
    }
})
const orderresponsejson=await orderresponse.json()
console.log(orderresponsejson)
const orderid=orderresponsejson.orders[0]
response.orderid=orderid
return response
}
}

module.exports={APIutils}