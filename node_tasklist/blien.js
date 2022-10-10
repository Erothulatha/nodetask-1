const mongoose = require('mongoose')

const blienSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        require: true
    }
})
module.exports = mongoose.model('Blien', blienSchema)