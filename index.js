const express = require('express');
const serverApp = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();
const submissionRouter = require('./routers/submissions');
serverApp.use(bodyParser.json());
serverApp.use(bodyParser.urlencoded({extended: true}));
serverApp.use(submissionRouter);
mongoose.connect(process.env.MONGO_URI);



const PORT = process.env.PORT || 5000;
serverApp.get('/', (req, res) => {
    res.send('I work Fam!');
});

serverApp.listen(PORT, () => {
    console.log('Now listening on port 5000');
});