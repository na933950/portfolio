import Coursework from "./Coursework";
import styles from "./Education.module.css";
import { ucb } from "../../Images";

const Education = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.infoTextContainer}>
          <h2>Education</h2>
          <h4>University of California, Berkeley</h4>
          <h5>
            <g>GPA:</g> 4.0/4.0
          </h5>
          <h5>
            <g>Recognitions:</g> Dean's List - College of Letters and Science
          </h5>
          <p>
            I'm a Golden Bear! I attend the{" "}
            <b>University of California, Berkeley</b> and am currently in my
            Junior year. I am studying <b>Computer Science</b>, but also love{" "}
            <g>Data Science</g>-- as shown through my projects, club, and
            coursework.
          </p>
          <p>
            I also belong to the wonderful organization{" "}
            <a href="">Political Computer Science @ Berkeley</a> where I can
            explore my interest in public policy. I am also the{" "}
            <g>Education Chair</g> and am responsible for planning workshops!
          </p>
        </div>
        <div className={styles.imgContainer}>
          <img src={ucb} />
        </div>
      </div>
      <Coursework />
    </div>
  );
};

export default Education;
