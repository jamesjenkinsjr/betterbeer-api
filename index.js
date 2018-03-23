const express = require('express');
const serverApp = express();
const mongoose = require('mongoose');

require('dotenv').config();
mongoose.connect(process.env.MONGO_URI);

const PORT = process.env.PORT || 5000;

serverApp.get('/', (req, res) => {
    res.send('HELLO I work!');
});

serverApp.listen(PORT, () => {
    console.log('Now listening on port 5000');
});