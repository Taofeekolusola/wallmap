const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const { verifyToken } = require('../middleware/auth');

// Route to handle medical chat
router.post('/medical', verifyToken, chatController.handleMedicalChat);

module.exports = router;