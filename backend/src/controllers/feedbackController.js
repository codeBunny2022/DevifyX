class FeedbackController {
  async submitFeedback(req, res) {
    try {
      const { dilemma, analysis, framework, rating, comment } = req.body;
      
      if (!dilemma || typeof dilemma !== 'string') {
        return res.status(400).json({ error: 'Dilemma must be a valid string' });
      }
      
      if (!analysis || typeof analysis !== 'string') {
        return res.status(400).json({ error: 'Analysis must be a valid string' });
      }
      
      if (!framework || typeof framework !== 'string') {
        return res.status(400).json({ error: 'Framework must be a valid string' });
      }
      
      if (rating && (typeof rating !== 'number' || rating < 1 || rating > 5)) {
        return res.status(400).json({ error: 'Rating must be a number between 1 and 5' });
      }

      // In a real application, you would save this to a database
      // For now, we'll just log it and return success
      console.log('Feedback received:', {
        dilemma,
        framework,
        rating,
        comment,
        timestamp: new Date().toISOString()
      });
      
      res.json({
        success: true,
        message: 'Feedback submitted successfully',
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error in submitFeedback:', error);
      res.status(500).json({ 
        error: 'Failed to submit feedback',
        message: error.message 
      });
    }
  }
}

module.exports = new FeedbackController(); 