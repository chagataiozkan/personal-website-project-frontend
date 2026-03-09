import { createContext, useReducer, useEffect } from "react";
import { languageReducer } from "../reducers/languageReducer";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [storedLang, setStoredLang] = useLocalStorage("lang", "en");
  const [lang, dispatch] = useReducer(languageReducer, storedLang);

  useEffect(() => {
    setStoredLang(lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, dispatch }}>
      {children}
    </LanguageContext.Provider>
  );
};
