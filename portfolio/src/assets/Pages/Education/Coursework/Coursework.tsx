import styles from "./Coursework.module.css";
import { coursework } from "./coursework";

const Coursework = () => {
  return (
    <div className={styles.container}>
      <h3>Coursework</h3>
      <div className={styles.courseworkContainer}>
        {coursework.map((course) => (
          <div className={styles.courseContainer}>
            <h4>{course.code}</h4>
            <h5>{course.name}</h5>
            <p>{course.description}</p>
            <div className={styles.skillContainer}>
                <p>
              {course.skills.map((skill) => (
                <>
                <span className={styles.skill}>{skill}</span>{"\t"}
                </>
              ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coursework;
