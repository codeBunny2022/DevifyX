import React, { useState } from 'react';
import { caseApi } from '../utils/api';
import { HistoricalCase } from '../types';

const HistoricalCases: React.FC = () => {
  const [historicalCase, setHistoricalCase] = useState<HistoricalCase | null>(null);
  const [loading, setLoading] = useState(false);

  const generateHistoricalCase = async () => {
    setLoading(true);
    try {
      const result = await caseApi.getHistorical();
      setHistoricalCase(result);
    } catch (error) {
      console.error('Error generating historical case:', error);
      alert('Failed to generate historical case. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="section-header">
        <h2 className="section-title">
          Historical Case Studies
        </h2>
        <p className="section-description">
          Explore famous ethical dilemmas from history. Learn from real-world cases 
          that have shaped our understanding of moral reasoning and ethical decision-making.
        </p>
      </div>

      {/* Generate Button */}
      <div className="text-center">
        <button
          onClick={generateHistoricalCase}
          disabled={loading}
          className="btn btn-tertiary"
        >
          {loading ? (
            <>
              <div className="loading-spinner btn-icon"></div>
              Generating...
            </>
          ) : (
            <>
              <span className="btn-icon">📚</span>
              Generate Historical Case
            </>
          )}
        </button>
      </div>

      {/* Historical Case Display */}
      {historicalCase && (
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>📖</span>
            <h3 className="card-title" style={{ marginBottom: 0 }}>
              Historical Ethical Case Study
            </h3>
          </div>
          
          <div className="content-box">
            <p className="content-text">
              {historicalCase.case}
            </p>
          </div>
          
          {historicalCase.timestamp && (
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              Generated: {new Date(historicalCase.timestamp).toLocaleString()}
            </div>
          )}
        </div>
      )}

      {/* Information Panel */}
      <div className="card" style={{ backgroundColor: '#faf5ff', border: '1px solid #c4b5fd' }}>
        <h3 className="card-title" style={{ color: '#581c87' }}>
          About Historical Cases
        </h3>
        <div style={{ color: '#581c87', lineHeight: '1.6' }}>
          <p style={{ marginBottom: '0.5rem' }}>
            Historical case studies provide valuable insights into how ethical dilemmas 
            have been approached throughout history. These real-world examples help us 
            understand the complexity of moral decision-making and the consequences of 
            different ethical choices.
          </p>
          <p>
            Famous cases include the Trolley Problem, the Milgram Experiment, the 
            Stanford Prison Experiment, and many others that have shaped our 
            understanding of ethics and human behavior.
          </p>
        </div>
      </div>

      {/* Suggested Actions */}
      <div className="card">
        <h3 className="card-title">
          What You Can Do
        </h3>
        <ul style={{ lineHeight: '1.6' }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
            <span style={{ color: '#2563eb', marginRight: '0.5rem' }}>•</span>
            Copy the historical case and analyze it using different ethical frameworks
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
            <span style={{ color: '#2563eb', marginRight: '0.5rem' }}>•</span>
            Compare how modern ethical theories would approach these historical situations
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
            <span style={{ color: '#2563eb', marginRight: '0.5rem' }}>•</span>
            Reflect on how these cases have influenced contemporary ethical thinking
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#2563eb', marginRight: '0.5rem' }}>•</span>
            Use these cases as examples in your own ethical reasoning and discussions
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HistoricalCases; 