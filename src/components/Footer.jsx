import { mockData } from "../data/mockData";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export default function Footer() {
  const { lang } = useContext(LanguageContext);
  return (
    <section className="footer" id="footer">
      <div className="container">
        <div className="footer-parts">
          <h2>{mockData.footer.text[lang]}</h2>
          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <a href="https://gmail.com">chagataiozkan@gmail.com</a>
            </div>
            <div className="footer-bottom-right">
              <a href="https://github.com/chagataiozkan">{mockData.footer.blog[lang]}</a>
              <a href="https://github.com/chagataiozkan">Github</a>
              <a href="https://www.linkedin.com/in/%C3%A7a%C4%9Fatay-%C3%B6zkan-7a1481231/">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
