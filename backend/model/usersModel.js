const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true
    },
}, { timestamps: true })

const user = mongoose.model('User', userSchema);

module.exports = user;