const express = require('express');
const router = express.Router();
const { getAllDocumentations, getDocumentation, getUserDocumentation,createDocumentation, modifyDocumentation, deleteDocumentation } = require('../controllers/documentationController');
const { protect } = require('../middleware/auth');

router.route('/').get(getAllDocumentations).post(protect, createDocumentation);
router.route('/:id').get(getDocumentation).put(protect, modifyDocumentation).delete(protect, deleteDocumentation);
router.route('/profile/:username').get(getUserDocumentation);

module.exports = router