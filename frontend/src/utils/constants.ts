import { FrameworkInfo } from '../types';

export const ETHICAL_FRAMEWORKS: FrameworkInfo[] = [
  {
    id: 'utilitarianism',
    name: 'Utilitarianism',
    description: 'Focuses on maximizing overall happiness and minimizing suffering',
    keyQuestions: ['What will produce the most good for the most people?', 'What are the consequences of this action?'],
    color: 'bg-blue-500'
  },
  {
    id: 'deontology',
    name: 'Deontology',
    description: 'Emphasizes duty and moral rules over consequences',
    keyQuestions: ['What are my moral duties?', 'What rules should I follow?'],
    color: 'bg-green-500'
  },
  {
    id: 'virtue_ethics',
    name: 'Virtue Ethics',
    description: 'Centers on character and moral virtues',
    keyQuestions: ['What would a virtuous person do?', 'What kind of person should I be?'],
    color: 'bg-purple-500'
  },
  {
    id: 'care_ethics',
    name: 'Care Ethics',
    description: 'Prioritizes relationships and care for others',
    keyQuestions: ['How will this affect my relationships?', 'Who needs my care?'],
    color: 'bg-pink-500'
  }
];

export const DOMAINS = [
  'general',
  'medical',
  'business',
  'personal',
  'academic',
  'technology',
  'environmental'
];

export const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' }
]; 