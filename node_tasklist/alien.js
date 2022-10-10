const mongoose=require('mongoose')

const alienSchema=new mongoose.Schema({
   name:{
    type:String,
    required:true
   } ,
branch:{
        type:String,
        require:true
    }
})

let verify=module.exports=mongoose.model('Alien',alienSchema)
verify.create({name:'test',"branch":"ece"},(err,data)=>{
    console.log(err,data)
})