const Exceljs2=require('exceljs')
async function exceltest2()
{
let output={row:-1,column:-1}
const workbook=new Exceljs2.Workbook()
await workbook.xlsx.readFile("C:\\Users\\DELL\\Downloads\\download (76).xlsx")
const worksheet=workbook.getWorksheet('Sheet1')
worksheet.eachRow((row,rowNumber)=>         
{
row.eachCell((cell,colNumber)=>
{
    if(cell.value==="Kivi")
    {
    output.row=rowNumber
    output.column=colNumber
    }
})
})
const cell=worksheet.getCell(output.row,output.column)
cell.value="Road"
await workbook.xlsx.writeFile("C:\\Users\\DELL\\Downloads\\download (76).xlsx")
}

exceltest2()


