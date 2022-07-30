const asyncHandler = require('express-async-handler');
const Documentation = require('../models/documentationModel');

// @route  GET /api/documentation
const getAllDocumentations = asyncHandler(async(req, res) => {
    const documentations = await Documentation.find();
    res.json(documentations);
})

// @route  POST /api/documentation
const createDocumentation = asyncHandler(async(req, res) => {
    console.log('tries to create');
    if(!req.body) {
        res.status(400);
        throw new Error('Please add body data');
    }

    const createDocument = await Documentation.create({
        title: req.body.title,
        description: req.body.description
    });

    res.json(createDocument);
})

// @route  PUT /api/documentation/:id
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
    createDocumentation,
    modifyDocumentation,
    deleteDocumentation,
}