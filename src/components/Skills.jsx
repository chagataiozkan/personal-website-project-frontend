import { mockData } from "../data/mockData";

export default function Skills() {
  const lang = "en";
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>{mockData.header.skillText[lang]}</h2>
        <div className="skills-row">
          {mockData.skills.map((skill) => (
            <div key={skill.id} className="skill">
              <h3>{skill.title[lang]}</h3>
              <p>{skill.text[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
