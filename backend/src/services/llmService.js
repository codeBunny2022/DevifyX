const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

class LLMService {
  constructor() {
    this.model = 'gpt-4';
  }

  async generateDilemma(domain = 'general') {
    const prompt = `Generate a realistic ethical dilemma in the ${domain} domain. The dilemma should be:
    - Complex enough to require careful ethical consideration
    - Realistic and relatable
    - Clear about the conflicting values or principles
    - Suitable for analysis across multiple ethical frameworks
    
    Format the response as a clear, concise scenario that presents the ethical conflict.`;

    try {
      const response = await openai.chat.completions.create({
        model: this.model,
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 500,
        temperature: 0.7,
      });

      return response.choices[0].message.content.trim();
    } catch (error) {
      console.error('Error generating dilemma:', error);
      throw new Error('Failed to generate ethical dilemma');
    }
  }

  async analyzeDilemma(dilemma, framework) {
    const frameworkPrompts = {
      utilitarianism: `Analyze this ethical dilemma from a Utilitarian perspective:
      
      Dilemma: ${dilemma}
      
      Provide a structured analysis including:
      1. Key considerations from a utilitarian viewpoint
      2. How to calculate the greatest good for the greatest number
      3. Recommended course of action
      4. Potential consequences and their moral weight
      
      Focus on outcomes and consequences rather than rules or character.`,
      
      deontology: `Analyze this ethical dilemma from a Deontological perspective:
      
      Dilemma: ${dilemma}
      
      Provide a structured analysis including:
      1. Key moral duties and obligations involved
      2. Universal moral rules that apply
      3. Recommended course of action based on duty
      4. How to respect moral rules regardless of consequences
      
      Focus on moral rules and duties rather than outcomes.`,
      
      virtue_ethics: `Analyze this ethical dilemma from a Virtue Ethics perspective:
      
      Dilemma: ${dilemma}
      
      Provide a structured analysis including:
      1. What virtues are relevant to this situation
      2. What would a virtuous person do
      3. How this action reflects good character
      4. Recommended course of action based on virtues
      
      Focus on character and moral virtues.`,
      
      care_ethics: `Analyze this ethical dilemma from a Care Ethics perspective:
      
      Dilemma: ${dilemma}
      
      Provide a structured analysis including:
      1. What relationships and care responsibilities are involved
      2. How to maintain and enhance caring relationships
      3. Who needs care and support in this situation
      4. Recommended course of action that prioritizes care
      
      Focus on relationships and care for others.`
    };

    const prompt = frameworkPrompts[framework] || frameworkPrompts.utilitarianism;

    try {
      const response = await openai.chat.completions.create({
        model: this.model,
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 800,
        temperature: 0.6,
      });

      return response.choices[0].message.content.trim();
    } catch (error) {
      console.error('Error analyzing dilemma:', error);
      throw new Error('Failed to analyze ethical dilemma');
    }
  }

  async compareFrameworks(dilemma, frameworks = ['utilitarianism', 'deontology', 'virtue_ethics', 'care_ethics']) {
    const analyses = {};
    
    for (const framework of frameworks) {
      try {
        analyses[framework] = await this.analyzeDilemma(dilemma, framework);
      } catch (error) {
        analyses[framework] = `Error analyzing with ${framework}: ${error.message}`;
      }
    }

    return analyses;
  }

  async generateHistoricalCase() {
    const prompt = `Generate a famous historical ethical dilemma case study. Include:
    1. A brief description of the historical context
    2. The ethical dilemma that arose
    3. The key stakeholders involved
    4. The actual outcome (if known)
    
    Choose from well-known cases like:
    - The Trolley Problem
    - The Milgram Experiment
    - The Stanford Prison Experiment
    - The Tuskegee Syphilis Study
    - The Challenger Disaster
    - Or another significant historical ethical case`;

    try {
      const response = await openai.chat.completions.create({
        model: this.model,
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 600,
        temperature: 0.5,
      });

      return response.choices[0].message.content.trim();
    } catch (error) {
      console.error('Error generating historical case:', error);
      throw new Error('Failed to generate historical case study');
    }
  }
}

module.exports = new LLMService(); 