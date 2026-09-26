const {test,expect}=require('@playwright/test')
test('assignment1',async({page})=>
{
expect.configure({timeout:10*1000})//expect timeout
page.setDefaultTimeout(10*1000)//action timeout
test.setTimeout(10*1000)//test timeout
await page.goto("https://eventhub.rahulshettyacademy.com/login")
await page.getByPlaceholder("you@email.com").fill("aprakash270@gmail.com")
await page.locator("#password").fill("Vihaan@1234")
await page.locator("[type='submit']").click()
await expect(page.getByRole('link', { name: 'Browse Events →' })).toBeVisible()
await page.getByRole("button",{name:'Admin'}).click()
await page.getByRole('navigation').getByRole('link', { name: 'Manage Events' }).click()
const eventTitle = `Test Event ${Date.now()}`
await page.getByPlaceholder("Event title").fill(eventTitle)
await page.getByPlaceholder("Describe the event…").fill("Description")
await page.locator("#city").fill("chennai")
await page.getByPlaceholder("Venue name & address").fill("address")
await page.getByRole('textbox', { name: 'Event Date & Time*' }).fill('2026-11-29T13:00')
await page.getByPlaceholder("0.00").fill("90")
await page.locator("#total-seats").fill("70")
await page.getByRole("button",{name:'+ Add Event'}).click()
await expect(page.getByText("Event created!")).toBeVisible({timeout:10*1000})
await page.locator("#nav-home").click({timeout:20*1000})
await page.locator("#nav-events").click()
const eventcards=page.locator("#event-card h3")
await expect(page.getByRole('link', { name: 'Dilli Diwali Mela' })).toBeVisible();
await expect(page.locator("#event-card h3").filter({hasText:eventTitle})).toBeVisible()
const eventcard=page.locator("#event-card").filter({hasText:eventTitle})
const f=await eventcard.locator(".text-emerald-600").textContent()
console.log(f)
const bseatid = parseInt(f)
await eventcard.locator("#book-now-btn").click()
await expect(page.locator("#ticket-count")).toHaveText("1")
await page.getByPlaceholder("Your full name").fill("Akshay")
await page.getByPlaceholder("you@email.com").fill("aprakash270@gmail.com")
await page.locator("#phone").fill("8072693473")
await page.getByRole("button",{name:'Confirm Booking'}).click()
console.log(await page.locator(".booking-ref").textContent())
const tid=await page.locator(".booking-ref").textContent()
const trimmed = tid.replace("T-", "");
await expect(page.locator(".booking-ref")).toBeVisible()
console.log(trimmed);
await page.getByRole("button",{name:'View My Bookings'}).click()
await expect(page.locator("#booking-card h3").nth(0)).toBeVisible()
console.log(await page.locator("#booking-card h3").nth(0).textContent())
console.log(await page.locator("#booking-card h3").filter({hasText:eventTitle}).textContent())
await expect(page.locator("#booking-card h3").filter({hasText:eventTitle})).toContainText("Test Event")
await page.locator("#nav-events").click()
await expect(page.locator("#event-card h3").first()).toBeVisible()
const eventloca=page.locator("#event-card").filter({hasText:eventTitle})
const evenid=page.locator("#event-card h3").filter({hasText:eventTitle})
await expect(evenid).toBeVisible()
const seatid=await eventloca.locator(".text-emerald-600").textContent()
console.log(seatid)
const aseatid=parseInt(seatid)
console.log(bseatid)
console.log(aseatid)
//expect(bseatid).toEqual(aseatid+1)



})