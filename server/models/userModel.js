const mongoose = require('mongoose');

const userScheme = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'please create a username'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'please create a password']
    },
    email: {
        type: String,
        required: [true, 'please enter a valid email'],
        unique: true
    },
    firstname: {
        type: String,
        required: [true, 'please enter a first name']
    },
    lastname: {
        type: String,
        required: [true, 'please enter a first lastname']
    },
    description: {
        type: String
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userScheme)