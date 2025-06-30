import React from 'react';
import { LANGUAGES } from '../utils/constants';

interface SettingsPanelProps {
  language: string;
  onLanguageChange: (language: string) => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ language, onLanguageChange }) => {
  return (
    <div className="space-y-6">
      <div className="section-header">
        <h2 className="section-title">
          Settings
        </h2>
        <p className="section-description">
          Customize your experience with the Ethical Dilemma Simulator.
        </p>
      </div>

      {/* Language Settings */}
      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <span style={{ fontSize: '1.25rem', marginRight: '0.5rem' }}>🌐</span>
          <h3 className="card-title" style={{ marginBottom: 0 }}>
            Language Settings
          </h3>
        </div>
        <div className="space-y-4">
          <label className="form-label">
            Select Language
          </label>
          <div className="grid grid-2">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => onLanguageChange(lang.code)}
                className={`btn ${language === lang.code ? 'btn-primary' : ''}`}
                style={{
                  backgroundColor: language === lang.code ? '#eff6ff' : '#f3f4f6',
                  color: language === lang.code ? '#1d4ed8' : '#374151',
                  border: language === lang.code ? '2px solid #3b82f6' : '2px solid transparent'
                }}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* App Information */}
      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <span style={{ fontSize: '1.25rem', marginRight: '0.5rem' }}>ℹ️</span>
          <h3 className="card-title" style={{ marginBottom: 0 }}>
            About This App
          </h3>
        </div>
        <div className="space-y-4">
          <div>
            <h4 style={{ fontWeight: '500', color: '#1f2937', marginBottom: '0.5rem' }}>Version</h4>
            <p>1.0.0</p>
          </div>
          <div>
            <h4 style={{ fontWeight: '500', color: '#1f2937', marginBottom: '0.5rem' }}>Description</h4>
            <p>
              The Ethical Dilemma Simulator is an educational tool designed to help users 
              explore complex moral situations through the lens of different ethical frameworks. 
              It uses advanced AI to generate realistic dilemmas and provide thoughtful analysis.
            </p>
          </div>
          <div>
            <h4 style={{ fontWeight: '500', color: '#1f2937', marginBottom: '0.5rem' }}>Features</h4>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', lineHeight: '1.6' }}>
              <li>AI-powered dilemma generation</li>
              <li>Multi-framework ethical analysis</li>
              <li>Historical case studies</li>
              <li>Comparative analysis tools</li>
              <li>User feedback system</li>
              <li>Multi-language support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ethical Frameworks Info */}
      <div className="card">
        <h3 className="card-title">
          Supported Ethical Frameworks
        </h3>
        <div className="grid grid-2">
          <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1rem' }}>
            <h4 style={{ fontWeight: '600', color: '#2563eb', marginBottom: '0.5rem' }}>Utilitarianism</h4>
            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              Focuses on maximizing overall happiness and minimizing suffering. 
              Actions are judged by their consequences.
            </p>
          </div>
          <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1rem' }}>
            <h4 style={{ fontWeight: '600', color: '#10b981', marginBottom: '0.5rem' }}>Deontology</h4>
            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              Emphasizes duty and moral rules over consequences. 
              Actions are right or wrong based on adherence to moral principles.
            </p>
          </div>
          <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1rem' }}>
            <h4 style={{ fontWeight: '600', color: '#8b5cf6', marginBottom: '0.5rem' }}>Virtue Ethics</h4>
            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              Centers on character and moral virtues. 
              Actions are right if performed by a virtuous person.
            </p>
          </div>
          <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1rem' }}>
            <h4 style={{ fontWeight: '600', color: '#ec4899', marginBottom: '0.5rem' }}>Care Ethics</h4>
            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              Prioritizes relationships and care for others. 
              Actions should maintain and enhance caring relationships.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Information */}
      <div className="card" style={{ backgroundColor: '#f9fafb' }}>
        <h3 className="card-title">
          Technical Details
        </h3>
        <div style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: '1.6' }}>
          <p><strong>Frontend:</strong> React.js with TypeScript</p>
          <p><strong>Backend:</strong> Node.js with Express</p>
          <p><strong>AI Model:</strong> OpenAI GPT-4</p>
          <p><strong>Styling:</strong> Custom CSS</p>
          <p><strong>Icons:</strong> Unicode Emojis</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel; 