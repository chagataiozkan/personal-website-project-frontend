import { mockData } from "../data/mockData";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export default function Header() {

  const { lang } = useContext(LanguageContext);

  return (
    <nav className="header">
      <div className="container">
        <div className="header-parts">
          <div className="header-left">
            <img src="/images/logo.png" alt="hero image"></img>
          </div>
          <div className="header-right">
            <a href="#skills" className="header-text">
              {mockData.header.skillText[lang]}
            </a>
            <a href="#projects" className="header-text">
              {mockData.header.projectText[lang]}
            </a>
            <a href="#footer" className="header-hire-text">
              {mockData.header.hireText[lang]}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
