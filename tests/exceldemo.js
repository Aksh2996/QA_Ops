const Exceljs=require('exceljs')

async function exceltest()
{
const workbook=new Exceljs.Workbook()
await workbook.xlsx.readFile("C:\\Users\\DELL\\Downloads\\download (76).xlsx")
const worksheet=workbook.getWorksheet('Sheet1')
worksheet.eachRow((row,rowNumber)=>{
    row.eachCell((cell,colNumber)=>
    {
        console.log(cell.value)
    })
})
}

exceltest()