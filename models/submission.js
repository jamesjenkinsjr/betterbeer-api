const mongoose = require('mongoose');
const schema = mongoose.Schema;

const submissionSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    latitude: {
        required: true,
        type: Number
    },
    longitude: {
        required: true,
        type: Number
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
module.export = Submission;