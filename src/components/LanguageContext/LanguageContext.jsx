import React, { useState, createContext } from 'react';


export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const [lang, setLang] = useState('en'); 

  
  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };


  const siteDirection = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      <div dir={siteDirection}>{children}</div>
    </LanguageContext.Provider>
  );
};