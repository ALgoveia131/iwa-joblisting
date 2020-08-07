var express = require('express'),
    router = express.Router(),

    controllerJob = require('../controllers/jobs-controller');

//This file redirects the URL path entered to the correct CRUD function
router.get('/', controllerJob.getJobs);
router.post('/', controllerJob.postJob);
router.post('/update', controllerJob.updateJob);
router.post('/delete', controllerJob.deleteJob);


module.exports = router;