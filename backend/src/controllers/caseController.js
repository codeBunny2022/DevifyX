const llmService = require('../services/llmService');

class CaseController {
  async getHistoricalCase(req, res) {
    try {
      const historicalCase = await llmService.generateHistoricalCase();
      
      res.json({
        success: true,
        case: historicalCase,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error in getHistoricalCase:', error);
      res.status(500).json({ 
        error: 'Failed to generate historical case',
        message: error.message 
      });
    }
  }
}

module.exports = new CaseController(); 