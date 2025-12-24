import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, UserRole } from '../types';

interface LanguageContextType {
  language: Language;
  role: UserRole;
  toggleLanguage: () => void;
  setRole: (role: UserRole) => void;
  t: (en: string, ur: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [role, setRole] = useState<UserRole>('farmer');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ur' : 'en'));
  };

  const t = (en: string, ur: string) => {
    return language === 'en' ? en : ur;
  };

  return (
    <LanguageContext.Provider value={{ language, role, toggleLanguage, setRole, t }}>
      <div dir={language === 'ur' ? 'rtl' : 'ltr'} className={language === 'ur' ? 'font-urdu' : 'font-sans'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
