
var mongoose = require('mongoose');

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