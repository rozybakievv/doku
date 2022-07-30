const express = require('express');
const router = express.Router();
const { getAllDocumentations, createDocumentation, modifyDocumentation, deleteDocumentation } = require('../controllers/documentationController');

router.get('/', getAllDocumentations())

router.post('/', createDocumentation())

router.put('/:id', modifyDocumentation())

router.delete('/:id', deleteDocumentation())

module.exports = router;