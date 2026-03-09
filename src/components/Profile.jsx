import { mockData } from "../data/mockData";

export default function Profile() {
  const lang = "en";
  return (
    <section className="profile">
      <div className="container">
        <div className="divider-line"></div>
        <h2>{mockData.profile.headerText[lang]}</h2>
        <div className="profile-parts">
          <div className="profile-left">
            <h3>{mockData.profile.headerText[lang]}</h3>
            {mockData.profile.info.map((item) => (
              <div className="profile-left-row" key={item.id}>
                <span className="profile-label">{item.label[lang]}</span>
                <span className="profile-value">{item.value[lang]}</span>
              </div>
            ))}
          </div>
          <div className="profile-right">
            <h3>{mockData.profile.aboutTitle[lang]}</h3>
            <p>{mockData.profile.aboutText[lang]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
