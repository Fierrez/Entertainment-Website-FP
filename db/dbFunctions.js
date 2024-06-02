const fs = require('fs')




function readDB( e, dbName = 'db/comments.json'){
    const data = fs.readFileSync(dbName, 'utf-8')
    var parsejson=JSON.parse(data)

    return parsejson.comments[e].like
    
}


function writeDB(obj, dbName = 'db/db.json'){
    if (!obj) {
        return console.log("Please provide a data to save")
    }
    try{
        fs.writeFileSync(dbName, JSON.stringify(obj))
        return console.log("Save Succesful")
    }catch (error){
        return console.log("Error Saving")
    }
}



module.exports = { readDB , writeDB }