import { createContext, useReducer, useEffect } from "react";
import { themeReducer } from "../reducers/themeReducer";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const initialTheme = localStorage.getItem("theme") || "light";
  const [theme, dispatch] = useReducer(themeReducer, initialTheme);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
