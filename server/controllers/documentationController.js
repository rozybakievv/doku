const asyncHandler = require('express-async-handler');

// @route  GET /api/documentation
const getAllDocumentations = asyncHandler(async(req, res) => {
    res.json({ message: "Get documentations"});
})

// @route  POST /api/documentation
const createDocumentation = asyncHandler(async(req, res) => {
    // checks if we do not send body(to create documentation you need the input from user) data then throw an error
    if(req.body.text) {
        res.status(400);
        throw new Error('Please add body data');
    }

    res.json({ message: "Create documentation"});
})

// @route  PUT /api/documentation/:id
const modifyDocumentation = asyncHandler(async(req, res) => {
    // checks if we do not send body(to modify documentation you need the input from user) data then throw an error
    if(req.body.text) {
        res.status(400);
        throw new Error('Please add body data');
    }

    res.json({ message: `Update documentation ${req.params.id}`});
})

// @route  DELETE /api/documentation/:id
const deleteDocumentation = asyncHandler(async(req, res) => {
    res.json({ message: `Delete documentation ${req.params.id}`});
})

// need to get only 6 documentation filterd by recent and/or most popular etc

module.exports = {
    getAllDocumentations,
    createDocumentation,
    modifyDocumentation,
    deleteDocumentation,
}