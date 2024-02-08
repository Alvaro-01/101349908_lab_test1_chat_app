const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.post('/group', messageController.saveGroupMessage);
router.post('/private', messageController.sendPrivateMessage);

module.exports = router;