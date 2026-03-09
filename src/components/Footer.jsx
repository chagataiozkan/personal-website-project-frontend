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
              <p>almilasucode@gmail.com</p>
            </div>
            <div className="footer-bottom-right">
              <a>{mockData.footer.blog[lang]}</a>
              <a>Github</a>
              <a>LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
