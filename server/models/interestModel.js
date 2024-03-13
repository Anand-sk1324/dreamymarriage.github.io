const mongoose = require('mongoose');

const interestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    msg: {
        type: String,
    },
    plans: [{
        type: String
    }],
    foods: [{
        type: String
    }],
    photography: [{
        type: String
    }],
    entry: [{
        type: String
    }],
    etc: [{
        type: String
    }],
});

module.exports = mongoose.model('Interest', interestSchema)