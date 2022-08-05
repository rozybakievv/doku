const mongoose = require('mongoose');

const documentationScheme = mongoose.Schema({
    creatorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    creator: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: [true, 'please add a title to the document']
    },
    document: {
        type: String,
        required: [true, 'please add a description to the document']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Documentation', documentationScheme)