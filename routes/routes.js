var express = require('express'),
    router = express.Router(),

    controllerJob = require('../controllers/jobs-controller');


router.get('/', controllerJob.getJobs);


// Exporting the routes
module.exports = router;