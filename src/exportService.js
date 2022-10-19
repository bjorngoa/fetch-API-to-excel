const xlsx = require('xlsx')
const path = require('path')

const exportExcel = (data, /* newData, */ workSheetColumnNames, workSheetName, filePath) => {
    const workBook = xlsx.utils.book_new()
    const workSheetData = [
        workSheetColumnNames,
        ...data,
    /*     ...newData */
    ]
    const workSheet = xlsx.utils.aoa_to_sheet(workSheetData)
    xlsx.utils.book_append_sheet(workBook, workSheet, workSheetName)
    xlsx.writeFile(workBook, path.resolve(filePath))
}


const exportDataToExcel = (fetchedData, /* newData */ workSheetColumnNames, workSheetName, filePath) => {

    const data = fetchedData.results.map(el => {
        console.log(el)
        return ["ID", el.name, "Info", el.url] 
    })

   

    exportExcel(data, /* data2 */ workSheetColumnNames, workSheetName, filePath)

}

module.exports = exportDataToExcel 