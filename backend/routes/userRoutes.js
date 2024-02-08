const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/signup', userController.signup);
// Other authentication routes
router.get('/', userController.getAllUsers);
module.exports = router;