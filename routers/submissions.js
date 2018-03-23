const express = require('express');
const router = express.Router();

const Submission = require('../models/submission');

router.get("/submissions", (req, res) => {
    Submission.find()
        .exec()
        .then(allSubmissions => {
            res.status(200).json({
                submissions: allSubmissions
            });
        })
        .catch(err => {
            console.log('Not happening');
        })
})

module.exports = router;