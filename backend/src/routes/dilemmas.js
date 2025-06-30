const express = require('express');
const router = express.Router();
const dilemmaController = require('../controllers/dilemmaController');

// Generate a new ethical dilemma
router.post('/generate', dilemmaController.generateDilemma);

// Analyze a dilemma using a specific framework
router.post('/analyze', dilemmaController.analyzeDilemma);

// Compare analysis across multiple frameworks
router.post('/compare', dilemmaController.compareFrameworks);

module.exports = router; 