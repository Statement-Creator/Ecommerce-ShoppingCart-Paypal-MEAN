const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//set mongodb connection
mongoose.connect('mongodb://localhost:27017/shoppingCart');
mongoose.connection.on('connected',()=>{
    console.log('Database Connected.');
})

//middleware
app.use(cors());
app.use(bodyParser.json());

//setting routes
const api = require('./routes/routes');
app.use('/api', api);

//start server
app.listen(3000,function(){
    console.log('Server Started.');
})