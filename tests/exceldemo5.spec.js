const Exceljs2=require('exceljs')
const {test,expect}=require('@playwright/test')
let output={row:-1,column:-1}
async function writeexceltest2(searchtext,replacementtext,change,filepath)
{
const workbook=new Exceljs2.Workbook()
await workbook.xlsx.readFile(filepath)
const worksheet=workbook.getWorksheet('Sheet1')
const output=await readexcel(worksheet,searchtext)
const cell=worksheet.getCell(output.row,output.column+change.colchange)
cell.value=replacementtext
await workbook.xlsx.writeFile(filepath)
}

async function readexcel(worksheet,searchtext)
{
    let output={row:-1,column:-1}
    worksheet.eachRow((row,rowNumber)=>         
{
row.eachCell((cell,colNumber)=>
{
    if(cell.value===searchtext)
    {
    output.row=rowNumber
    output.column=colNumber
    }
})
})
return output
}

//writeexceltest2("Kivi",300,{rowchange:0,colchange:2},"C:\\Users\\DELL\\Downloads\\download (76).xlsx")

test('upload/download excel',async ({page})=>{
await page.goto("https://rahulshettyacademy.com/upload-download-test/")
const eventpromise=page.waitForEvent('download')
await page.locator("#downloadButton").click()
await eventpromise
writeexceltest2("Kivi",300,{rowchange:0,colchange:2},"C:\\Users\\DELL\\Downloads\\download (77).xlsx")
await page.locator("#fileinput").setInputFiles("C:\\Users\\DELL\\Downloads\\download (77).xlsx")
})
