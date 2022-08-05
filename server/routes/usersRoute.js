const express = require('express');
const router = express.Router();
const { getCurrentUser, registerUser, authenticateUser, modifyUser, deleteUser } = require('../controllers/userController');
const { protect } = require('../middleware/auth');

router.post('/', registerUser);
router.post('/login', authenticateUser);
// before getting current user information, we pass through protect function to verify if user has the right token to access this info
router.get('/profile', protect, getCurrentUser);
router.route('/:id').put(modifyUser).delete(deleteUser);

module.exports = router