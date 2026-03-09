import { createContext, useReducer, useEffect } from "react";
import { languageReducer } from "../reducers/languageReducer";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const initialLang = localStorage.getItem("lang") || "en";
  const [lang, dispatch] = useReducer(languageReducer, initialLang);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, dispatch }}>
      {children}
    </LanguageContext.Provider>
  );
};
