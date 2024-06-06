import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import projects from "../../common/Projects";

function Projects() {
  const projRes = projects();

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle"> Projects </h1>
      <div className={styles.projectContainer}>
          {projRes.map((proj, index) => (
            <ProjectCard
              key={index}
              src={proj.src}
              link={proj.link}
              h3={proj.name}
              p={proj.type}
            />
          ))}
      </div>
    </section>
  );
}

export default Projects;
