const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Submission = require('../models/submission');

router.use(bodyParser.urlencoded({extended: true}));

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
        console.log('Bad post request');
    }
    const submission = new Submission({
        name: req.body.name.toLowerCase(),
        location: req.body.location,
        placeID: req.body.placeID,
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
            res.status(500).json({
                msg: 'RIP fam'
            })
        })
})
router.get("/submissions/search", (req, res) => {
    if(!req.query.beer){
        console.log('Bad query');
    }
    Submission.find({name: { "$regex": req.query.beer, "$options": "i" }})
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