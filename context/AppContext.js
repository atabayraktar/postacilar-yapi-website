import { createContext, useContext, useState, useEffect } from 'react';
import tr from '../public/locales/tr.json';
import en from '../public/locales/en.json';

const translations = { tr, en };

const AppContext = createContext({
  lang: 'tr',
  theme: 'dark',
  t: (key) => key,
  setLang: () => {},
  setTheme: () => {},
  toggleTheme: () => {},
});

export function AppProvider({ children }) {
  const [lang, setLangState] = useState('tr');
  const [theme, setThemeState] = useState('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'tr';
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setLangState(savedLang);
    setThemeState(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme, mounted]);

  const setLang = (l) => {
    setLangState(l);
    localStorage.setItem('lang', l);
  };

  const setTheme = (t) => {
    setThemeState(t);
    localStorage.setItem('theme', t);
  };

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const t = (key) => {
    const keys = key.split('.');
    let val = translations[lang];
    for (const k of keys) {
      val = val?.[k];
    }
    return val ?? key;
  };

  return (
    <AppContext.Provider value={{ lang, theme, t, setLang, setTheme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
