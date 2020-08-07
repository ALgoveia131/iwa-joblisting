const cors = require("cors"); // Cors module allows cross-origin resource sharing 
const express = require('express'); //This module allows this app to respond to HTTP Requests, defines the routing and renders back the required content
const mongoose = require('mongoose'); //Module responsible to the MongoDB 
const path = require('path'); // Path helps to shorten the file name 
require('dotenv').config();

var app = express(); /// Create an interactive web app using Express
var port = (process.env.PORT || 3000); //Definging the port number

//Handling MongoDB Connection
mongoose.connect(process.env.MONGODB, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
mongoose.connection.on('error', (err) => {
    console.log('Mongodb Error: ', err);
    process.exit();
});
mongoose.connection.on('connected', () => {
    console.log('MongoDB is connected');
});

//Defining the view engines and views path
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//Allowing the use of the request.body
app.use(express.urlencoded({ extended: true }));
//Exporing the routes 
app.use(require('./routes/routes'));
//Initiating the server
app.listen(port, function (err) {
    console.log("Listening on Port: " + port)
});