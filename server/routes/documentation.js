const express = require('express');
const router = express.Router();
const { getAllDocumentations, createDocumentation, modifyDocumentation, deleteDocumentation } = require('../controllers/documentationController');

// from route /, can get or post using these functions from documentationController
router.route("/").get(getAllDocumentations).post(createDocumentation);


// from route /:id, can put or delete using these functions from documentationController
router.route("/:id").put(modifyDocumentation).delete(deleteDocumentation);

module.exports = router;