import { mockData } from "../data/mockData";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ToggleBar() {
  const { lang, dispatch: langDispatch } = useContext(LanguageContext);
  const { theme, dispatch: themeDispatch } = useContext(ThemeContext);

  return (
    <section className="toggle-bar">
      <div className="container">
        <div className="toggle-bar-right">
          <button
            className="mode-btn"
            type="button"
            onClick={() => themeDispatch({ type: "TOGGLE_THEME" })}
          >
            <span className="mode-btn-circle"></span>
          </button>
          <span className="mode-text">
            {lang === "en"
              ? mockData.toggleBar.darkModeText.en[theme]
              : mockData.toggleBar.darkModeText.tr[theme]}
          </span>
          <span className="divider">|</span>
          <button
            className="lang-btn"
            type="button"
            onClick={() => {
              langDispatch({ type: "TOGGLE_LANGUAGE" });
            }}
          >
            {lang === "en" ? (
              <>
                <span>{mockData.toggleBar.langSelectorText.en.purple}</span>
                <span className="lang-text">
                  {mockData.toggleBar.langSelectorText.en.gray}
                </span>
              </>
            ) : (
              <>
                <span className="lang-text">
                  {mockData.toggleBar.langSelectorText.tr.gray}
                </span>
                <span>{mockData.toggleBar.langSelectorText.tr.purple}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
