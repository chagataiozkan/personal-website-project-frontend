import { mockData } from "../data/mockData";

export default function Hero() {

  const lang = "en";

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-parts">
          <div className="hero-left">
            <p className="hero-left-name">{mockData.hero.name}</p>
            <div className="hero-left-text">
              <span>{mockData.hero.summaryText[lang]}</span>
            </div>
            <p className="hero-left-desc">
             {mockData.hero.descText[lang]}
            </p>
            <div className="hero-left-buttons">
              <button className="hero-left-hire-button" type="button">
                {mockData.header.hireText[lang]}
              </button>
              <button className="hero-left-button" type="button">
                Github
              </button>
              <button className="hero-left-button" type="button">
                LinkedIn
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
