const express=require('express')

const app=express()

app.get('/',function(request,res){
     //res.send("<h1>hello world</h1>")
     console.log(request)
})
app.listen(2030,()=>console.log("server running"));