var Job = require('../models/jobs');

exports.postJob = function (req, res) {
    res.contentType('application/json');

    var job = new Job({
        "Title":"Web Dev",
        "Description":"Web Dev Needed",
        "Location": "Dublin",
        "Keywords": "Node, React, Express"
    });
    console.log(job);
    job.save(function (err, job) {
        if (err) {
            res.status(400).json(err);
        }
    });
};

exports.getJobs = function (req, res) {
    Job.find({}, function (err, jobs) {
        if (err) {
            res.status(400).json(err);
        }
        console.log(jobs);
    });
};


