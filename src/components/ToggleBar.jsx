import { mockData } from "../data/mockData";

export default function ToggleBar() {

  const lang = "en";
  
  return (
    <section className="toggle-bar">
      <div className="container">
        <div className="toggle-bar-right">
          <button className="mode-btn" type="button">
            <span className="mode-btn-circle"></span>
          </button>
          <span className="mode-text">DARK MODE</span>
          <span className="divider">|</span>
          <button className="lang-btn" type="button">
            TÜRKÇE
            <span className="lang-text">'YE GEÇ</span>
          </button>
        </div>
      </div>
    </section>
  );
}
