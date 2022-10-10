const mongoose=require('mongoose')
const School=mongoose.Schema(
    {
        school:{
            type:"String",
            required:true,
        },
        date:{
            type:Date,
            default:Date.now
        }
    }
)

module.exports=mongoose.model('school',School)