import React, { useState } from 'react';
import { dilemmaApi, feedbackApi } from '../utils/api';
import { ETHICAL_FRAMEWORKS } from '../utils/constants';
import { EthicalFramework, Feedback } from '../types';

const FrameworkAnalysis: React.FC = () => {
  const [dilemma, setDilemma] = useState('');
  const [selectedFramework, setSelectedFramework] = useState<EthicalFramework>('utilitarianism');
  const [analysis, setAnalysis] = useState<string>('');
  const [comparison, setComparison] = useState<Record<string, string> | null>(null);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<'single' | 'compare'>('single');
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState('');

  const analyzeDilemma = async () => {
    if (!dilemma.trim()) {
      alert('Please enter a dilemma to analyze.');
      return;
    }

    setLoading(true);
    try {
      if (mode === 'single') {
        const result = await dilemmaApi.analyze(dilemma, selectedFramework);
        setAnalysis(result.analysis);
        setComparison(null);
      } else {
        const result = await dilemmaApi.compare(dilemma);
        setComparison(result.analyses);
        setAnalysis('');
      }
    } catch (error) {
      console.error('Error analyzing dilemma:', error);
      alert('Failed to analyze dilemma. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const submitFeedback = async () => {
    if (!analysis && !comparison) return;

    try {
      const feedback: Feedback = {
        dilemma,
        analysis: analysis || Object.values(comparison || {}).join('\n\n'),
        framework: selectedFramework,
        rating: rating > 0 ? rating : undefined,
        comment: comment.trim() || undefined,
      };

      await feedbackApi.submit(feedback);
      alert('Thank you for your feedback!');
      setRating(0);
      setComment('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback. Please try again.');
    }
  };

  return (
    <div className="space-y-6">
      <div className="section-header">
        <h2 className="section-title">
          Framework Analysis
        </h2>
        <p className="section-description">
          Analyze ethical dilemmas using different moral frameworks. Compare perspectives 
          and understand how different ethical theories approach the same situation.
        </p>
      </div>

      {/* Mode Selection */}
      <div className="card">
        <h3 className="card-title">Analysis Mode</h3>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            onClick={() => setMode('single')}
            className={`btn ${mode === 'single' ? 'btn-primary' : ''}`}
            style={{
              backgroundColor: mode === 'single' ? '#eff6ff' : '#f3f4f6',
              color: mode === 'single' ? '#1d4ed8' : '#374151',
              border: mode === 'single' ? '2px solid #3b82f6' : '2px solid transparent'
            }}
          >
            Single Framework
          </button>
          <button
            onClick={() => setMode('compare')}
            className={`btn ${mode === 'compare' ? 'btn-primary' : ''}`}
            style={{
              backgroundColor: mode === 'compare' ? '#eff6ff' : '#f3f4f6',
              color: mode === 'compare' ? '#1d4ed8' : '#374151',
              border: mode === 'compare' ? '2px solid #3b82f6' : '2px solid transparent'
            }}
          >
            Compare All Frameworks
          </button>
        </div>
      </div>

      {/* Dilemma Input */}
      <div className="card">
        <h3 className="card-title">Enter Dilemma</h3>
        <textarea
          value={dilemma}
          onChange={(e) => setDilemma(e.target.value)}
          placeholder="Paste or type your ethical dilemma here..."
          className="form-textarea"
        />
      </div>

      {/* Framework Selection (Single Mode) */}
      {mode === 'single' && (
        <div className="card">
          <h3 className="card-title">Select Framework</h3>
          <div className="grid grid-2">
            {ETHICAL_FRAMEWORKS.map((framework) => (
              <button
                key={framework.id}
                onClick={() => setSelectedFramework(framework.id)}
                className={`framework-card ${selectedFramework === framework.id ? 'selected' : ''}`}
              >
                <h4 className="framework-name">{framework.name}</h4>
                <p className="framework-description">{framework.description}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Analyze Button */}
      <div className="text-center">
        <button
          onClick={analyzeDilemma}
          disabled={loading || !dilemma.trim()}
          className="btn btn-secondary"
        >
          {loading ? (
            <>
              <div className="loading-spinner btn-icon"></div>
              Analyzing...
            </>
          ) : (
            <>
              <span className="btn-icon">⚖️</span>
              {mode === 'single' ? 'Analyze' : 'Compare Frameworks'}
            </>
          )}
        </button>
      </div>

      {/* Analysis Results */}
      {analysis && (
        <div className="card">
          <h3 className="card-title">
            {ETHICAL_FRAMEWORKS.find(f => f.id === selectedFramework)?.name} Analysis
          </h3>
          <div className="content-box">
            <p className="content-text">
              {analysis}
            </p>
          </div>
        </div>
      )}

      {/* Comparison Results */}
      {comparison && (
        <div className="space-y-4">
          {Object.entries(comparison).map(([framework, analysis]) => {
            const frameworkInfo = ETHICAL_FRAMEWORKS.find(f => f.id === framework);
            return (
              <div key={framework} className="card">
                <h3 className="card-title">
                  {frameworkInfo?.name} Analysis
                </h3>
                <div className="content-box">
                  <p className="content-text">
                    {analysis}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Feedback Section */}
      {(analysis || comparison) && (
        <div className="card">
          <h3 className="card-title">
            Rate This Analysis
          </h3>
          <div className="space-y-4">
            <div>
              <label className="form-label">
                Rating (1-5 stars)
              </label>
              <div style={{ display: 'flex', gap: '0.25rem' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    style={{
                      fontSize: '1.5rem',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: star <= rating ? '#fbbf24' : '#d1d5db'
                    }}
                  >
                    ⭐
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="form-label">
                Comment (optional)
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Share your thoughts on this analysis..."
                className="form-textarea"
                style={{ minHeight: '5rem' }}
              />
            </div>
            <button
              onClick={submitFeedback}
              className="btn btn-primary"
            >
              <span className="btn-icon">💬</span>
              Submit Feedback
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FrameworkAnalysis; 