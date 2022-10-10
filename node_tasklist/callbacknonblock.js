var fs=require('fs')

console.log("program started")
var data=fs.readFileSync("input.txt")
console.log(data.toString())
//console.log(data)
console.log("program ended")
