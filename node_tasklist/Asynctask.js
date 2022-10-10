
console.log("Asynchronous process")
setTimeout(function(){
    console.log("this is the first line")
},2000)
console.log("this is second line")
console.log ("this is the third line")

console.log("this is the fourth line")
setTimeout(function(){
    console.log("this is the six line")
},100)
