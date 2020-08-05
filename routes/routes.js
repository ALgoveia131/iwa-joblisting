var express = require('express'),
    router = express.Router(),

    controllerJob = require('../controllers/jobs-controller');


router.get('/', controllerJob.postJob);

// Exporting the routes
module.exports = router;