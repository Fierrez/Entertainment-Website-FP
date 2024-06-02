const { write } = require('fs')
const { writeDB } = require('./dbFunctions')

const obj ={
    james:'is dud'
}


writeDB(obj)