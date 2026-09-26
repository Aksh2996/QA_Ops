const base=require('@playwright/test')

exports.customtest=base.test.extend(
    {
        TestData:
        {
            username:"aprakash270@gmail.com",
            password:"Vihaan@1234"
        }
    }
)