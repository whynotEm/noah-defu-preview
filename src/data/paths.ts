export type Language = 'pl' | 'en' | 'zh';
export const languages: Language[] = ['pl', 'en', 'zh'];

const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export const pathFor = (language: Language, hash = '') => `${base}${language}/${hash}`;
export const asset = (name: string) => `${base}images/${name}`;
export const rootPath = () => base;
