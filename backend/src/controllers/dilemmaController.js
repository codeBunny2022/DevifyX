const llmService = require('../services/llmService');

class DilemmaController {
  async generateDilemma(req, res) {
    console.log('[DilemmaController] generateDilemma called with body:', req.body);
    try {
      const { domain = 'general' } = req.body;
      
      if (!domain || typeof domain !== 'string') {
        return res.status(400).json({ error: 'Domain must be a valid string' });
      }

      const dilemma = await llmService.generateDilemma(domain);
      
      res.json({
        success: true,
        dilemma: {
          content: dilemma,
          domain,
          timestamp: new Date().toISOString()
        }
      });
    } catch (error) {
      console.error('Error in generateDilemma:', error);
      res.status(500).json({ 
        error: 'Failed to generate dilemma',
        message: error.message 
      });
    }
  }

  async analyzeDilemma(req, res) {
    console.log('[DilemmaController] analyzeDilemma called with body:', req.body);
    try {
      const { dilemma, framework } = req.body;
      
      if (!dilemma || typeof dilemma !== 'string') {
        return res.status(400).json({ error: 'Dilemma must be a valid string' });
      }
      
      if (!framework || typeof framework !== 'string') {
        return res.status(400).json({ error: 'Framework must be a valid string' });
      }

      const validFrameworks = ['utilitarianism', 'deontology', 'virtue_ethics', 'care_ethics'];
      if (!validFrameworks.includes(framework)) {
        return res.status(400).json({ 
          error: 'Invalid framework',
          validFrameworks 
        });
      }

      const analysis = await llmService.analyzeDilemma(dilemma, framework);
      
      res.json({
        success: true,
        dilemma,
        framework,
        analysis,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error in analyzeDilemma:', error);
      res.status(500).json({ 
        error: 'Failed to analyze dilemma',
        message: error.message 
      });
    }
  }

  async compareFrameworks(req, res) {
    console.log('[DilemmaController] compareFrameworks called with body:', req.body);
    try {
      const { dilemma, frameworks } = req.body;
      
      if (!dilemma || typeof dilemma !== 'string') {
        return res.status(400).json({ error: 'Dilemma must be a valid string' });
      }

      const validFrameworks = ['utilitarianism', 'deontology', 'virtue_ethics', 'care_ethics'];
      const frameworksToAnalyze = frameworks && Array.isArray(frameworks) 
        ? frameworks.filter(f => validFrameworks.includes(f))
        : validFrameworks;

      if (frameworksToAnalyze.length === 0) {
        return res.status(400).json({ 
          error: 'No valid frameworks provided',
          validFrameworks 
        });
      }

      const analyses = await llmService.compareFrameworks(dilemma, frameworksToAnalyze);
      
      res.json({
        success: true,
        dilemma,
        frameworks: frameworksToAnalyze,
        analyses,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error in compareFrameworks:', error);
      res.status(500).json({ 
        error: 'Failed to compare frameworks',
        message: error.message 
      });
    }
  }
}

module.exports = new DilemmaController(); 