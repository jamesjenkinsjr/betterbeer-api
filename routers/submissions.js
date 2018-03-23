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
});

router.post("/submissions", (req, res) => {
    if(!req.body.name){
        console.log('Bad postnamp request');
    }
    const submission = new Submission({
        karmaCount: req.body.karmaCount,
        name: req.body.name.toLowerCase(),
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        price: req.body.price,
        purchaseType: req.body.purchaseType.toLowerCase()
    });
    const x = submission
        .save()
        .then(response => {
            res.status(200).json({
                msg: "Successfully made submission"
            })
        })
        .catch(err => {
            console.log(submission);
        })
})
router.get("/submissions/search", (req, res) => {
    if(!req.query.beer){
        console.log('Bad query');
    }
    Submission.find({name: req.query.beer})
        .exec()
        .then(filteredSubmissions => {
            res.status(200).json({
                submissions: filteredSubmissions
            });
        })
        .catch(err => {
            console.log('Catch on foreach loop');
        })
})

module.exports = router;