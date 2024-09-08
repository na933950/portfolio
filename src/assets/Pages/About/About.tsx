import styles from "./About.module.css";
import TechStack from "./TechStack";

const About = () => {
  return (
    <div className={styles.container}>
      <h2>About Me</h2>
      <p className={styles.paragraph}>
        I am a student at the <b>University of California, Berkeley</b> who is
        studying computer science and expects to graduate in 2026! From my{" "}
        <g>projects</g> and <b>work experience</b>, I have experience in web
        development (full stack), data science, and object-oriented
        programming.<br></br><br></br>Some of my interests are singing, speedcubing, reading
        the news, trying new foods, and working out!
      </p>
      <h3 className={styles.techStack}>My Tech Stack</h3>
      <TechStack />
    </div>
  );
};

export default About;
