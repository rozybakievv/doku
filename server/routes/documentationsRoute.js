const express = require('express');
const router = express.Router();
const { getAllDocumentations, getDocumentation, createDocumentation, modifyDocumentation, deleteDocumentation } = require('../controllers/documentationController');

router.route('/').get(getAllDocumentations).post(createDocumentation);
router.route('/:id').get(getDocumentation).put(modifyDocumentation).delete(deleteDocumentation);

module.exports = router