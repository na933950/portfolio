import styles from "./Projects.module.css";
import { projects } from "./projects";
import Project from "./Project";

const Projects = () => {
  return (
    <div className={styles.container}>
      <h2>Projects</h2>
      <p>
        I've worked on a variety of different projects showcasing my web
        development and object-oriented programming skills! They fundamentally
        demonstrate my understanding and skills in UI/UX design, handling HTTP
        requests, and writing algorithms!
      </p>
      <p><g>Hover or click to learn more!</g></p>
      <div className={styles.grid}>
        <div className={styles.rowOne}>
          <div className={styles.project}>
            <Project {...projects[0]} />
          </div>
          <div className={styles.project}>
            <Project {...projects[1]} />
          </div>
        </div>
        <div className={styles.rowTwo}>
          <div className={styles.project}>
            <Project {...projects[2]} />
          </div>
          <div className={styles.project}>
            <Project {...projects[3]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
