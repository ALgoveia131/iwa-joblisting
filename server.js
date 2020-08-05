const cors = require("cors");
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

var app = express();
var port = (process.env.PORT || 3000);

mongoose.connect(process.env.MONGODB, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
mongoose.connection.on('error', (err) => {
    console.log('Mongodb Error: ', err);
    process.exit();
});

mongoose.connection.on('connected', () => {
    console.log('MongoDB is connected');
});


app.listen(port, function (err) {
    console.log("Listening on Port: " + port)
});

controllerJob = require('./controllers/jobs-controller');


app.get('/', controllerJob.updateJob);