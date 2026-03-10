import { mockData } from "../data/mockData";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { toast } from "react-toastify";

export default function Header() {
  const { lang } = useContext(LanguageContext);
  const toastOptions = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    theme: "dark",
  };

  return (
    <nav className="header">
      <div className="container">
        <div className="header-parts">
          <div className="header-left">
            <img src="/images/logo.png" alt="hero image"></img>
          </div>
          <div className="header-right">
            <a
              href="#skills"
              className="header-text"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#skills")
                  .scrollIntoView({ behavior: "smooth" });
                toast(mockData.toastText[lang].skills, toastOptions);
              }}
            >
              {mockData.header.skillText[lang]}
            </a>
            <a
              href="#projects"
              className="header-text"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  .scrollIntoView({ behavior: "smooth" });
                toast(mockData.toastText[lang].projects, toastOptions);
              }}
            >
              {mockData.header.projectText[lang]}
            </a>
            <a
              href="#footer"
              className="header-hire-text"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#footer")
                  .scrollIntoView({ behavior: "smooth" });
                toast(mockData.toastText[lang].hire, toastOptions);
              }}
            >
              {mockData.header.hireText[lang]}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
