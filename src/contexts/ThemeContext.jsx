import { createContext, useReducer, useEffect } from "react";
import { themeReducer } from "../reducers/themeReducer";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [storedTheme, setStoredTheme] = useLocalStorage("theme", "light");
  const [theme, dispatch] = useReducer(themeReducer, storedTheme);

  useEffect(() => {
    setStoredTheme(theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
