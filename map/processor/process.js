const XLSX = require('xlsx')

var workbook = XLSX.readFile('data.xlsx')
var worksheet = workbook.Sheets[workbook.SheetNames[0]]
worksheetdata = XLSX.utils.sheet_to_json(worksheet)

var data = {}

const states = [
    "Bihar",
    "Sikkim", 
    "Jharkhand", 
    "Rajasthan", 
    "West Bengal", 
    "Madhya Pradesh", 
    "Chhatisgarh", 
    "Odisha", 
    "Gujarat", 
    "Maharashtra", 
    "Goa", 
    "Andhra Pradesh", 
    "Karnataka", 
    "Kerala", 
    "Tamil Nadu", 
    "Uttar Pradesh", 
    "Haryana", 
    "Punjab", 
    "Uttaranchal", 
    "Himachal Pradesh", 
    "Tripura", 
    "Mizoram", 
    "Manipur", 
    "Nagaland", 
    "Meghalaya", 
    "Delhi", 
    "Jammu & Kashmir", 
    "Arunachal Pradesh", 
    "Assam"
]
for (let i = 0; i <= 30; i++) {
    let datafield = 'df' + i
    for (let j = 2012; j <= 2015; j++) {
        let year = j

    }
}