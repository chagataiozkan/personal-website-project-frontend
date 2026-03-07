export default function Header() {
  return (
    <nav className="header">
      <div className="container">
        <div className="header-left">
          <img src="/images/logo.png" alt="hero image"></img>
        </div>
        <div className="header-right">
          <a href="#skills" className="header-text">
            Skills
          </a>
          <a href="#projects" className="header-text">
            Projects
          </a>
          <a href="#footer" className="header-hire-text">
            Hire me
          </a>
        </div>
      </div>
    </nav>
  );
}
