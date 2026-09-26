

import {test as baseTest} from '@playwright/test'

interface TestData{
    username:string
    password:string
}

export const customtest=baseTest.extend<{TestData:TestData}>(
    {
        TestData:
        {
            username:"aprakash270@gmail.com",
            password:"Vihaan@1234"
        }
    }
)