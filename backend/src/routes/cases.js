const express = require('express');
const router = express.Router();
const caseController = require('../controllers/caseController');

// Get a historical ethical case study
router.get('/historical', caseController.getHistoricalCase);

module.exports = router; 