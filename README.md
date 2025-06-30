# Ethical Dilemma Simulator

A web-based application that generates and analyzes ethical dilemmas using Large Language Models (LLMs) across multiple ethical frameworks.

## Features

### Core Features
- **Dilemma Generation**: Automatically generate realistic moral dilemmas across various domains (medical, business, personal, academic)
- **Framework Selection**: Analyze dilemmas using multiple ethical frameworks:
  - **Utilitarianism**: Focuses on maximizing overall happiness and minimizing suffering
  - **Deontology**: Emphasizes duty and moral rules over consequences
  - **Virtue Ethics**: Centers on character and moral virtues
  - **Care Ethics**: Prioritizes relationships and care for others
- **Reasoned Response Generation**: Detailed analysis and recommendations based on selected framework
- **Custom Dilemma Input**: Submit your own dilemmas for analysis
- **Comparative Analysis**: Side-by-side comparison across different ethical frameworks
- **Explanation Transparency**: Clear explanation of reasoning principles
- **Interactive Interface**: User-friendly web interface

### Bonus Features
- **Historical Case Studies**: Famous real-world ethical dilemmas with LLM analysis
- **User Feedback System**: Rate and comment on reasoning quality
- **Multi-language Support**: English and Spanish support
- **Explainability Visualizations**: Visual representation of ethical decision trees

## Technology Stack

- **Frontend**: React.js with TypeScript
- **Backend**: Node.js with Express
- **LLM Integration**: OpenAI GPT-4 API
- **Styling**: Custom CSS (no external frameworks)
- **State Management**: React Context API
- **Deployment**: Vercel (Frontend) + Railway (Backend)

## Quick Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd DevifyX
   ```

2. **Run the setup script**
   ```bash
   ./setup.sh
   ```

3. **Environment Setup**
   ```bash
   # Copy environment file
   cp backend/.env.example backend/.env
   ```
   
   Add your OpenAI API key to `backend/.env`:
   ```
   OPENAI_API_KEY=your_api_key_here
   PORT=3001
   ```

4. **Start the application**
   ```bash
   # Terminal 1: Start backend
   cd backend
   npm run dev

   # Terminal 2: Start frontend
   cd frontend
   npm start
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001

## Manual Setup (Alternative)

If you prefer manual setup:

```bash
# Backend setup
cd backend
npm install
cp .env.example .env
# Add your OpenAI API key to .env

# Frontend setup
cd ../frontend
npm install

# Start both servers
cd ../backend && npm run dev &
cd ../frontend && npm start
```

## Ethical Frameworks Explained

### 1. Utilitarianism
**Principle**: Actions are right if they promote the greatest happiness for the greatest number of people.
**Focus**: Consequences and outcomes
**Key Questions**: What will produce the most good for the most people?

### 2. Deontology
**Principle**: Actions are right or wrong based on their adherence to moral rules and duties.
**Focus**: Moral rules and obligations
**Key Questions**: What are my moral duties? What rules should I follow?

### 3. Virtue Ethics
**Principle**: Actions are right if they are performed by a virtuous person with good character.
**Focus**: Character and moral virtues
**Key Questions**: What would a virtuous person do? What kind of person should I be?

### 4. Care Ethics
**Principle**: Actions are right if they maintain and enhance relationships and show care for others.
**Focus**: Relationships and care
**Key Questions**: How will this affect my relationships? Who needs my care?

## Project Structure

```
DevifyX/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── types/          # TypeScript type definitions
│   │   └── utils/          # Utility functions
├── backend/                 # Node.js backend API
│   ├── src/
│   │   ├── controllers/    # API controllers
│   │   ├── services/       # Business logic
│   │   ├── routes/         # API routes
│   │   └── utils/          # Utility functions
├── docs/                   # Documentation
├── setup.sh               # Quick setup script
└── README.md              # This file
```

## API Endpoints

- `POST /api/dilemmas/generate` - Generate a new ethical dilemma
- `POST /api/dilemmas/analyze` - Analyze a dilemma using specified framework
- `POST /api/dilemmas/compare` - Compare analysis across multiple frameworks
- `GET /api/cases/historical` - Get historical case studies
- `POST /api/feedback` - Submit user feedback

## Usage Guide

1. **Generate Dilemmas**: Select a domain and click "Generate Dilemma" to create new ethical scenarios
2. **Analyze Frameworks**: Paste any dilemma and analyze it using different ethical frameworks
3. **Compare Perspectives**: Use the comparison mode to see how different frameworks approach the same situation
4. **Explore History**: Generate historical case studies to learn from famous ethical dilemmas
5. **Provide Feedback**: Rate and comment on the quality of AI-generated analyses

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Based on research from "Are LLMs complicated ethical dilemma analyzers?" by Du et al.
- Georgia CTSA repository for ethical case studies
- OpenAI for LLM capabilities

## Support

For questions or issues, please open an issue on GitHub or contact the development team. 