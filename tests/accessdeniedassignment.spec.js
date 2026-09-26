const { test, request, expect } = require('@playwright/test')
const payload = { email: "aprakash270@gmail.com", password: "Vihaan@1234" }
const payload3 = { email: "hemapg.prakash@gmail.com", password: "Akshay@1234" }

const event = {
    id: 1, title: 'Tech Summit 2026', category: 'Conference',
    eventDate: '2027-06-01T10:00:00.000Z', venue: 'HICC', city: 'Hyderabad', price: '999',
    totalSeats: 200, availableSeats: 150, imageUrl: null, isStatic: false
}
test('access_denied', async ({ browser }) => {
    //api
    const apicontext = await request.newContext()
    const apiresponse = await apicontext.post("https://api.eventhub.rahulshettyacademy.com/api/auth/login",
        {
            data: payload
        }
    )
    const apijson = await apiresponse.json()
    console.log(apijson)
    console.log(await apiresponse.status())
    const token = apijson.token
    console.log(token)
    //page
    const context = await browser.newContext()
    const page = await context.newPage()
    //inject token
    await page.addInitScript(value => {
        window.localStorage.setItem('eventhub_token', value)
    }, token)
    //goto page
    await page.goto("https://eventhub.rahulshettyacademy.com/")
    //geteventresponse
    const geteventresponse = await apicontext.get("https://api.eventhub.rahulshettyacademy.com/api/events",
        {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json'
            },
        })
    console.log("response is ")
    const eventresjson = await geteventresponse.json()
    console.log(eventresjson)
    console.log(await geteventresponse.status())
    //storing eventid
    const eventid = eventresjson.data[3].id
    console.log(eventid)
    //payload2
    const payload2 = {
        "customerEmail": "aprakash270@gmail.com",
        "customerName": "P Akshay",
        "customerPhone": "8072693473",
        "eventId": eventid,
        "quantity": 1
    }
    //api bookings
    const postbookres = await apicontext.post("https://api.eventhub.rahulshettyacademy.com/api/bookings", {
        data: payload2,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json'
        }
    }
    )
    console.log(postbookres.status())
    const postbookjson = await postbookres.json()
    console.log(postbookjson)
    //get bookid
    const bookingid = postbookjson.data.id
    console.log(bookingid)
    // login as another user
    const apiresponse2 = await apicontext.post("https://api.eventhub.rahulshettyacademy.com/api/auth/login",
        {
            data: payload3
        }
    )
    const user2json = await apiresponse2.json()
    console.log(user2json)
    const token2 = user2json.token
    console.log(token2)
    const context2 = await browser.newContext()
    const page2 = await context2.newPage()
    await page2.addInitScript(value => {
        window.localStorage.setItem('eventhub_token', value)
    }, token2)
//testing
await page2.goto("https://eventhub.rahulshettyacademy.com/");
  await page2.route("https://api.eventhub.rahulshettyacademy.com/api/bookings/*",
        route => route.continue({ url:`https://api.eventhub.rahulshettyacademy.com/api/bookings/${bookingid}`}))
await page2.locator("#nav-bookings").click();
await page2.getByRole("button", { name: "View Details" }).click();
await expect(page2.getByText("Access Denied")).toBeVisible()
await expect(page2.getByText("You are not authorized to view this booking.")).toBeVisible()
})
