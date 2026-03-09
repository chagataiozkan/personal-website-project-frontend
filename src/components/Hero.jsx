import { mockData } from "../data/mockData";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export default function Hero() {
  const { lang } = useContext(LanguageContext);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-parts">
          <div className="hero-left">
            <p className="hero-left-name">{mockData.hero.name}</p>
            <div className="hero-left-text">
              <span>{mockData.hero.summaryText[lang]}</span>
            </div>
            <p className="hero-left-desc">{mockData.hero.descText[lang]}</p>
            <div className="hero-left-buttons">
              <button className="hero-left-hire-button" type="button">
                <a href="#footer">{mockData.header.hireText[lang]}</a>
              </button>
              <button className="hero-left-button" type="button">
                <img src="/images/github.png"></img>
                <a href="https://github.com">Github</a>
              </button>
              <button className="hero-left-button" type="button">
                <img src="/images/LinkedIn.png"></img>
                <a href="https://linkedin.com">LinkedIn</a>
              </button>
            </div>
          </div>
          <div className="hero-right">
            <img src="/images/image_1.png" alt="hero-img"></img>
          </div>
        </div>
      </div>
    </section>
  );
}
