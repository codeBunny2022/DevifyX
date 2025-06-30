import axios from 'axios';
import { Dilemma, Analysis, ComparisonResult, HistoricalCase, Feedback, EthicalFramework } from '../types';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request logging
api.interceptors.request.use(request => {
  console.log('[API REQUEST]', request.method?.toUpperCase(), request.url, request.data || '');
  return request;
});

// Add response logging
api.interceptors.response.use(response => {
  console.log('[API RESPONSE]', response.config.url, response.data);
  return response;
}, error => {
  console.error('[API ERROR]', error.config?.url, error.response?.data || error.message);
  return Promise.reject(error);
});

export const dilemmaApi = {
  generate: async (domain: string = 'general'): Promise<Dilemma> => {
    const response = await api.post('/dilemmas/generate', { domain });
    return response.data.dilemma;
  },

  analyze: async (dilemma: string, framework: EthicalFramework): Promise<Analysis> => {
    const response = await api.post('/dilemmas/analyze', { dilemma, framework });
    return response.data;
  },

  compare: async (dilemma: string, frameworks?: EthicalFramework[]): Promise<ComparisonResult> => {
    const response = await api.post('/dilemmas/compare', { dilemma, frameworks });
    return response.data;
  },
};

export const caseApi = {
  getHistorical: async (): Promise<HistoricalCase> => {
    const response = await api.get('/cases/historical');
    return response.data;
  },
};

export const feedbackApi = {
  submit: async (feedback: Feedback): Promise<{ success: boolean; message: string }> => {
    const response = await api.post('/feedback', feedback);
    return response.data;
  },
};

export default api; 