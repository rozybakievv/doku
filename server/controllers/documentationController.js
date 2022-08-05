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

// @route  POST /api/documentation
// @access PRIVATE
const createDocumentation = asyncHandler(async(req, res) => {
    if(!req.body.title || !req.body.user) {
        res.status(400);
        throw new Error('Please add body data');
    }

    const createDocument = await Documentation.create({
        user: req.body.user,
        title: req.body.title,
        document: req.body.document
    });

    res.json(createDocument);
})

// @route  PUT /api/documentation/:id
// @access PRIVATE
const modifyDocumentation = asyncHandler(async(req, res) => {
    const findDocumentId = await Documentation.findById(req.params.id);

    if(!findDocumentId) {
        res.status(400);
        throw new Error('Documentation not found');
    }

    const updateDocument = await Documentation.findByIdAndUpdate(req.params.id, req.body);

    res.json(updateDocument);
})

// @route  DELETE /api/documentation/:id
// @access PRIVATE
const deleteDocumentation = asyncHandler(async(req, res) => {
    const findDocumentId = await Documentation.findById(req.params.id);

    if(!findDocumentId) {
        res.status(400);
        throw new Error('Documentation not found');
    }

    await findDocumentId.remove();

    res.json(`Document ${req.params.id} was deleted`);
})

// need to get only 6 documentation filterd by recent and/or most popular etc

module.exports = {
    getAllDocumentations,
    getDocumentation,
    createDocumentation,
    modifyDocumentation,
    deleteDocumentation,
}