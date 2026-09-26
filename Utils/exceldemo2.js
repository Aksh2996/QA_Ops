const Exceljs = require('exceljs')

async function excelfunc() {
    const workbook = new Exceljs.Workbook()
    await workbook.xlsx.readFile("C:\\Users\\DELL\\Downloads\\download (76).xlsx")
    const worksheet = workbook.getWorksheet('Sheet1')
    worksheet.eachRow((row, rowNo) => {
        row.eachCell((cell, colNo) => {
            console.log(cell.value)
        })
    })
}

excelfunc()