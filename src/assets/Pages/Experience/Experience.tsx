import styles from "./Experience.module.css";
import workItems from "./workItems";
import WorkItem from "./WorkItem";

const Experience = () => {
  return (
    <div className={styles.container}>
      <h2>Experience</h2>
      <p>
        I have valuable experience as both a Software Development Engineering Intern
        at Amazon AGI, as well as a Web Developer and Data Scientist at Link Health.
        Through these experience, I learned how to write readable, and well documented code
        and picked up lots of new skills along the way!
      </p>
      <div className={styles.workItems}>
        {workItems.map((w) => (
          <WorkItem {...w} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
