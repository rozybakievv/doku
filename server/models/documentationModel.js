const mongoose = require('mongoose');

const documentationScheme = mongoose.Schema({
    title: {
        type: String,
        require: [true, 'please add a title to the document']
    },
    description: {
        type: String,
        require: [true, 'please add a description to the document']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Documentation', documentationScheme)