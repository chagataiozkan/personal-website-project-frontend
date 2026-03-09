import { createRoot } from "react-dom/client";
import "./styles/reset.css";
import "./styles/global.css";
import App from "./App.jsx";
import React from "react";
import { LanguageProvider } from "./contexts/LanguageContext.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </LanguageProvider>,
);
