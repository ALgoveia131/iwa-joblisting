var Job = require('../models/jobs');

//Exporting the full CRUD methods
//CREATE
exports.postJob = function (req, res) {
    res.contentType('application/json');
    var job = new Job(req.body);
    job.save(function (err, job) {
        if (err) {
            res.status(400).json(err);
        }
        res.redirect('back');
    });
};

//READ
exports.getJobs = function (req, res) {
    Job.find({}, function (err, jobs) {
        if (err) {
            res.status(400).json(err);
        }
        res.render('index', { 
            data: jobs,
        });
    });
};

//UPDATE
exports.updateJob = function (req, res) {
    Job.findOneAndUpdate({ _id: req.body.id }, req.body, { new: true }, function (err, job) {
        if (err) {
            res.status(400).json(err);
        }
        res.redirect('back');
     });
};

//DELETE
exports.deleteJob = function (req, res) {
    Job.findByIdAndRemove(req.body.id, function (err, Job) {
        if (err) {
            res.status(400).json(err);
        }
         res.redirect('back');
    });
};