const mongoose = require('mongoose');
require('mongoose-type-email');

let schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        unique: true,
        lowercase: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
        requird: true
    },
})

module.exports = mongoose.model("User", schema);