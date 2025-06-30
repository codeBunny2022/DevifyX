import React, { useState } from 'react';
import { dilemmaApi } from '../utils/api';
import { DOMAINS } from '../utils/constants';
import { Dilemma } from '../types';

const DilemmaGenerator: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState('general');
  const [dilemma, setDilemma] = useState<Dilemma | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateDilemma = async () => {
    setLoading(true);
    try {
      const result = await dilemmaApi.generate(selectedDomain);
      setDilemma(result);
    } catch (error) {
      console.error('Error generating dilemma:', error);
      alert('Failed to generate dilemma. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    if (dilemma) {
      try {
        await navigator.clipboard.writeText(dilemma.content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        console.error('Failed to copy:', error);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="section-header">
        <h2 className="section-title">
          Generate Ethical Dilemmas
        </h2>
        <p className="section-description">
          Explore complex moral situations across different domains. Our AI generates realistic 
          ethical dilemmas that challenge your moral reasoning.
        </p>
      </div>

      {/* Domain Selection */}
      <div className="card">
        <h3 className="card-title">Choose Domain</h3>
        <div className="grid grid-4">
          {DOMAINS.map((domain) => (
            <button
              key={domain}
              onClick={() => setSelectedDomain(domain)}
              className={`btn ${selectedDomain === domain ? 'btn-primary' : ''}`}
              style={{
                backgroundColor: selectedDomain === domain ? '#eff6ff' : '#f3f4f6',
                color: selectedDomain === domain ? '#1d4ed8' : '#374151',
                border: selectedDomain === domain ? '2px solid #3b82f6' : '2px solid transparent'
              }}
            >
              {domain.charAt(0).toUpperCase() + domain.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Generate Button */}
      <div className="text-center">
        <button
          onClick={generateDilemma}
          disabled={loading}
          className="btn btn-primary"
        >
          {loading ? (
            <>
              <div className="loading-spinner btn-icon"></div>
              Generating...
            </>
          ) : (
            <>
              <span className="btn-icon">💡</span>
              Generate Dilemma
            </>
          )}
        </button>
      </div>

      {/* Generated Dilemma */}
      {dilemma && (
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h3 className="card-title" style={{ marginBottom: 0 }}>
              Generated Dilemma
            </h3>
            <button
              onClick={copyToClipboard}
              className="btn"
              style={{ 
                padding: '0.25rem 0.5rem', 
                fontSize: '0.875rem',
                backgroundColor: 'transparent',
                color: '#6b7280'
              }}
            >
              {copied ? (
                <>
                  <span className="btn-icon">✓</span>
                  Copied!
                </>
              ) : (
                <>
                  <span className="btn-icon">📋</span>
                  Copy
                </>
              )}
            </button>
          </div>
          
          <div className="content-box">
            <p className="content-text">
              {dilemma.content}
            </p>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.875rem', color: '#6b7280' }}>
            <span>Domain: {dilemma.domain}</span>
            {dilemma.timestamp && (
              <span>Generated: {new Date(dilemma.timestamp).toLocaleString()}</span>
            )}
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="card" style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe' }}>
        <h3 className="card-title" style={{ color: '#1e40af' }}>
          How to Use
        </h3>
        <ul style={{ color: '#1e40af', lineHeight: '1.6' }}>
          <li>• Select a domain that interests you</li>
          <li>• Click "Generate Dilemma" to create a new ethical scenario</li>
          <li>• Use the "Framework Analysis" tab to analyze the dilemma</li>
          <li>• Compare different ethical perspectives on the same situation</li>
        </ul>
      </div>
    </div>
  );
};

export default DilemmaGenerator; 