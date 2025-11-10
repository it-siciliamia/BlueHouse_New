import React, { createContext, useContext, useState, useEffect, useMemo } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [languageIndex, setLanguageIndex] = useState(() => {
    const stored = localStorage.getItem("languageIndex");
    return stored ? JSON.parse(stored) : 0;
  });

  useEffect(() => {
    localStorage.setItem("languageIndex", JSON.stringify(languageIndex));
  }, [languageIndex]);

  const contextValue = useMemo(
    () => ({ languageIndex, setLanguageIndex }),
    [languageIndex]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    console.warn("useLanguage must be used within LanguageProvider");
  }
  return context;
};
