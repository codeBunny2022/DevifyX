export interface Dilemma {
  id?: string;
  content: string;
  domain: string;
  timestamp?: string;
}

export interface Analysis {
  success: boolean;
  dilemma: string;
  framework: string;
  analysis: string;
  timestamp?: string;
}

export interface ComparisonResult {
  success: boolean;
  dilemma: string;
  frameworks: string[];
  analyses: Record<string, string>;
  timestamp?: string;
}

export interface HistoricalCase {
  success: boolean;
  case: string;
  timestamp?: string;
}

export interface Feedback {
  dilemma: string;
  analysis: string;
  framework: string;
  rating?: number;
  comment?: string;
}

export type EthicalFramework = 'utilitarianism' | 'deontology' | 'virtue_ethics' | 'care_ethics';

export interface FrameworkInfo {
  id: EthicalFramework;
  name: string;
  description: string;
  keyQuestions: string[];
  color: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
} 