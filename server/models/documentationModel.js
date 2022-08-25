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
    chapters: [{ title: String, content: String }]
}, {
    timestamps: true
})

module.exports = mongoose.model('Documentation', documentationScheme)