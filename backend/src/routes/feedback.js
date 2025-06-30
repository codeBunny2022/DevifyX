const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

// Submit user feedback on analysis
router.post('/', feedbackController.submitFeedback);

module.exports = router; 