const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const submissionSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    location: {
        required: true,
        type: String
    },
    placeID: {
        required: true,
        type: String
    },
    karmaCount: {
        required: true,
        type: Number,
        default: 0
    },
    price: {
        required: true,
        type: Number
    },
    purchaseType: {
        required: true,
        type: String
    },
    createTimestamp: {
        required: true,
        type: Date,
        default: Date.now
    }
});

const Submission = mongoose.model('Submission', submissionSchema);
module.exports = Submission;