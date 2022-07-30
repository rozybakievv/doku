// @route  GET /api/documentation
const getAllDocumentations = (req, res) => {
    res.json({ "message": "Get documentations"});
}

// @route  POST /api/documentation
const createDocumentation = (req, res) => {
    res.json({ "message": "Create documentation"});
}

// @route  PUT /api/documentation/:id
const modifyDocumentation = (req, res) => {
    res.json({ "message": `Update documentation ${req.params.id}`});
}

// @route  DELETE /api/documentation/:id
const deleteDocumentation = (req, res) => {
    res.json({ "message": `Delete documentation ${req.params.id}`});
}

// need to get only 6 documentation filterd by recent and/or most popular etc

module.exports = {
    getAllDocumentations,
    createDocumentation,
    modifyDocumentation,
    deleteDocumentation,
}