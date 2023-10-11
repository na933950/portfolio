import Stack from "./Stack";
import { webdev, datascience, languages } from "./techstack";
import styles from "./TechStack.module.css";

const TechStack = () => {
  return (
    <div className={styles.container}>
      <Stack stack={languages} stackName="Languages" />
      <Stack stack={datascience} stackName="Data Science" />
      <Stack stack={webdev} stackName="Web Development" />
    </div>
  );
};

export default TechStack;
