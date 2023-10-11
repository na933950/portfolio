import styles from "./Experience.module.css";
import workItems from "./workItems";
import WorkItem from "./WorkItem";

const Experience = () => {
  return (
    <div className={styles.container}>
      <h2>Experience</h2>
      <p>
        I have experience as both a web developer and data scientist through my
        work at Link Health! Through this work, I have been able to use my
        technical skills to help Link Health--a Boston-based nonprofit
        organization--distribute aid to underserved individuals.
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
