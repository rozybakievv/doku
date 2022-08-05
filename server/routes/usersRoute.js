const express = require('express');
const router = express.Router();
const { getCurrentUser, registerUser, authenticateUser, modifyUser, deleteUser } = require('../controllers/userController');

router.post('/', registerUser);
router.post('/login', authenticateUser);
router.get('/profile', getCurrentUser);
router.route('/:id').put(modifyUser).delete(deleteUser);

module.exports = router