const express = require('express');

const mongoose = require('mongoose');
//const School=require('./model')
//const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
//app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())
console.log("process.env.connectionUrl", process.env.connectionUrl)

mongoose.connect("mongodb+srv://mongodb:Mongo!123@cluster0.cbbaljs.mongodb.net/?retryWrites=true&w=majority",
{ useNewUrlParser: true ,useUnifiedTopology: true},
()=>console.log('Connection With MongoDB established'));

const alienRouter=require('./aliens')
app.use('/aliens',alienRouter)

app.listen(2012, () => console.log('server running'))