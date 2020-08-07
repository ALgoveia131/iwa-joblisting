
var mongoose = require('mongoose');

//The shema for jobs
//All the elemets are string and required
var jobSchema = new mongoose.Schema({
    
    Title: {
        type: String,
        required: true
    },

    Description: {
        type: String,
        required: true
    },
   
    Location: {
        type: String,
        required: true
    },

    Keywords: {
        type: String,
        required: true
    },
});


module.exports = mongoose.model('Job', jobSchema);