import * as fs from 'fs'



var data = fs.readFileSync ('db/comments.json', 'utf-8')
var parsejson = JSON.parse(data)

console.log(parsejson.comments[1].comment)

document.getElementById("userUsercomments").innerHTML = parsejson.comments[1].comment