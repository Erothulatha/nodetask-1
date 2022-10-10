const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const alienSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
     
    branch: {
        type: String,
        require: true
    }
})
let verify = mongoose.model('Alien', alienSchema)
console.log(verify)
//const {verify} = require('./alien')
router.get('/', async (req, res) => {
    try {
        const alien = await Alien.find()
        res.json(aliens)
    } catch (err) {
        res.send('error' + err)
    }

})
router.post('/', async (req, res) => {
    // const alien = new Alien(
       let d= {
        name: "latha",
        branch:"ece"
    }
    
    try {
        const a1 =  verify.insertMany(d,(err,data)=>{
            console.log(err,data)
        })
        // res.join(a1)
    } catch (err) {
        console.log(err)
        res.send('error')
    }
})
module.exports = router