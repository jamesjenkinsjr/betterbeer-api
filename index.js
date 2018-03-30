const express = require('express');
const cors = require('cors');
const serverApp = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();
const submissionRouter = require('./routers/submissions');
serverApp.use(bodyParser.json());
serverApp.use(cors());
serverApp.use(bodyParser.urlencoded({extended: true}));
serverApp.use(submissionRouter);
serverApp.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
mongoose.connect(process.env.MONGO_URI);



const PORT = process.env.PORT || 5000;
serverApp.get('/', cors(), (req, res, next) => {
    res.send('I work Fam!');
    next();
});
serverApp.post('/submissions', cors(), (req, res, next) => {
    res.send('I work Fam!');
    next();
});
serverApp.listen(PORT, () => {
    console.log('Now listening on port 5000');
});