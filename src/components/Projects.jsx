import { mockData } from "../data/mockData";

export default function Projects() {
  const lang = "en";

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="divider-line"></div>
        <h2>{mockData.header.projectText[lang]}</h2>

        <div className="projects-parts">
          {mockData.projects.map((project) => (
            <div key={project.id} className="projects-row">
              <img src={`/images/project_image_${project.id}.png`} />
              <h3>{project.title[lang]}</h3>
              <p>{project.text[lang]}</p>
              <div className="projects-row-pills">
                <p>react</p>
                <p>redux</p>
                <p>axios</p>
              </div>
              <div className="projects-row-details">
                <a href="https://github.com">Github</a>
                <a href="https://github.com">{project.viewSite[lang]}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
