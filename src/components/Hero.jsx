export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-parts">
          <div className="hero-left">
            <p className="hero-left-name">Almila Su</p>
            <div className="hero-left-text">
              <span>Creative thinker Minimalism lover</span>
            </div>
            <p className="hero-left-desc">
              Hi, I’m Almila. I’m a full-stack developer. If you are looking for a
              Developer who to craft solid and scalable frontend products with
              great user experiences. Let’s shake hands with me.
            </p>
            <div className="hero-left-buttons">
              <button className="hero-left-hire-button" type="button">
                Hire me
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
