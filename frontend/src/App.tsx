import React, { useState } from 'react';
import DilemmaGenerator from './components/DilemmaGenerator';
import HistoricalCases from './components/HistoricalCases';
import FrameworkAnalysis from './components/FrameworkAnalysis';
import SettingsPanel from './components/SettingsPanel';

function App() {
  const [tab, setTab] = useState('dilemma');
  const [language, setLanguage] = useState('en');

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="header-title">
            <span style={{ fontSize: '1.5rem', marginRight: '0.75rem' }}>🧠</span>
            Ethical Dilemma Simulator
          </div>
          <div className="header-subtitle">
            Powered by AI • Explore Moral Reasoning
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="tab-nav" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '2rem 0' }}>
        <button className={`tab-btn${tab === 'dilemma' ? ' active' : ''}`} onClick={() => setTab('dilemma')}>Dilemma Generator</button>
        <button className={`tab-btn${tab === 'cases' ? ' active' : ''}`} onClick={() => setTab('cases')}>Historical Cases</button>
        <button className={`tab-btn${tab === 'analysis' ? ' active' : ''}`} onClick={() => setTab('analysis')}>Framework Analysis</button>
        <button className={`tab-btn${tab === 'settings' ? ' active' : ''}`} onClick={() => setTab('settings')}>Settings</button>
      </nav>

      <main className="main">
        {tab === 'dilemma' && <DilemmaGenerator />}
        {tab === 'cases' && <HistoricalCases />}
        {tab === 'analysis' && <FrameworkAnalysis />}
        {tab === 'settings' && <SettingsPanel language={language} onLanguageChange={setLanguage} />}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-text">
            <p>© 2025 chirag. Built for educational purposes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App; 