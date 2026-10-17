import { pl } from './pl';
import { en } from './en';
import { zh } from './zh';
import type { Language } from '../data/paths';

export const translations = { pl, en, zh };
export const getContent = (language: Language) => translations[language];
