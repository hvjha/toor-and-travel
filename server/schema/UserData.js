const mongoose = require('mongoose');
require('mongoose-type-email');

let schema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    placeName: {
        type: String,
        required: true,
    },
    video: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
        requird: true
    },
})

module.exports = mongoose.model("Data", schema);