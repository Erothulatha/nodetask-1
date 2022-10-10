const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json())

mongoose.connect("mongodb+srv://mongodb:Mongo!123@cluster0.cbbaljs.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connection With MongoDB established'));

const blienRouter = require('./bliens')
app.use('/bliens', blienRouter)




app.listen(2050, () => console.log('server running'))