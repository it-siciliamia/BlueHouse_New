import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [languageIndex, setLanguageIndex] = useState(
    JSON.parse(localStorage.getItem("languageIndex")) || 0
  );

  useEffect(() => {
    localStorage.setItem("languageIndex", JSON.stringify(languageIndex));
  }, [languageIndex]);

  return (
    <LanguageContext.Provider value={{ languageIndex, setLanguageIndex }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
