const asyncHandler = require('express-async-handler');
const Documentation = require('../models/documentationModel');

// @route  GET /api/documentation
// @access PUBLIC
const getAllDocumentations = asyncHandler(async(req, res) => {
    const documentations = await Documentation.find();
    res.json(documentations);
})

// @route  GET /api/documentation/:id
// @access PUBLIC
const getDocumentation = asyncHandler(async(req, res) => {
    const documentation = await Documentation.findById(req.params.id);

    if(!documentation) {
        res.status(400);
        throw new Error('Documentation not found');
    }

    res.json(documentation);
})

// @route  GET /api/documentation/:username
// @access PUBLIC
const getUserDocumentation = asyncHandler(async(req, res) => {
    const usersDocumentation = await Documentation.find({ creator: req.params.username });

    if(!usersDocumentation) {
        res.status(400);
        throw new Error('User documentation not found');
    }

    res.json(usersDocumentation);
})

// @route  POST /api/documentation
// @access PRIVATE
const createDocumentation = asyncHandler(async(req, res) => {
    if(!req.body.title || !req.user.id || !req.body.document) {
        res.status(400);
        throw new Error('Please add body data');
    }

    const createDocument = await Documentation.create({
        creatorId: req.user.id,
        creator: req.user.username,
        title: req.body.title,
        document: req.body.document
    });

    res.json(createDocument);
})

// @route  PUT /api/documentation/:id
// @access PRIVATE
const modifyDocumentation = asyncHandler(async(req, res) => {
    // find document where creator is current user and document is id from parameters
    const findDocumentId = await Documentation.find({ creatorId: req.user.id, _id: req.params.id });

    if(!findDocumentId) {
        res.status(400);
        throw new Error('Documentation not found or not created by current user');
    }

    await Documentation.findByIdAndUpdate(req.params.id, req.body);

    const updatedDocument = await Documentation.findById(req.params.id);

    res.json(updatedDocument);
})

// @route  DELETE /api/documentation/:id
// @access PRIVATE
const deleteDocumentation = asyncHandler(async(req, res) => {
    // find document where creator is current user and document is id from parameters
    const findDocumentId = await Documentation.find({ creatorId: req.user.id, _id: req.params.id });

    if(!findDocumentId) {
        res.status(400);
        throw new Error('Documentation not found or not created by current user');
    }

    await findDocumentId.remove();

    res.json(`Document ${req.params.id} was deleted`);
})

// need to get only 6 documentation filterd by recent and/or most popular etc

module.exports = {
    getAllDocumentations,
    getDocumentation,
    getUserDocumentation,
    createDocumentation,
    modifyDocumentation,
    deleteDocumentation,
}