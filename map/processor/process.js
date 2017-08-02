const XLSX = require('xlsx')
const jsonfile = require('jsonfile')

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
    "Assam",
    "India"
]

const colNames = [
    '% Single-Classroom Schools'  ,
    '% Single-Teacher Schools'  ,
    '% Schools with Building'  ,
    '% Schools with Girls Toilet'  ,
    '% Schools with Boys Toilet'  ,
    '% Schools with Toilet for CWSN'  ,
    '% Schools with Drinking Water'  ,
    '% Schools with Electricity'  ,
    '% Schools with Ramp, if Needed'  ,
    '% Schools with Library'  ,
    '% Schools with Full time Librarian'  ,
    '% Schools with Boundary wall'  ,
    '% Schools Exclusively for CWSN'  ,
    '% Schools with Lab. Assistant'  ,
    '% Schools with Head Master Room'  ,
    '% Schools with Hostel for Boys'  ,
    '% Schools with Hostel for Girls'  ,
    '% Schools with Computer & Internet'  ,
    '% Schools with ICT Laboratory'  ,
    '% Schools with Playground Facility'  ,
    '% Schools Conducted Med. Check-up'  ,
    '% Schools Having SMDC'  ,
    '% Schools with Sch. Bld. Committee'  ,
    '% Schools Having PTA'  ,
    '% Schools Established Since 2006'  ,
    'Pupil-Teacher Ratio' ,
    'Student-Classroom Ratio' ,
    'Avg. No. of Teachers per School',
    '% Female Teachers'  ,
    '% Girls Enrolment' ,
]

colNames.forEach( (colName, index) => {
    let datafield = 'df' + index
    data[datafield] = { }
    data[datafield].type = colName

    for (let j = 2012; j <= 2015; j++) {
        let year = j
        data[datafield][year] = { }

        states.forEach(state => {
            worksheetdata.forEach( rawData => {
                if (rawData.State == state && rawData.Year == year) {
                    
                    if(rawData[colName] === undefined) {
                        data[datafield][year][state] = 'NA'
                    } else {
                        data[datafield][year][state] = rawData[colName]
                    }
                }
            })
        })
    }
})

jsonfile.writeFile('data.json', data, function (err) {
  console.error(err)
})