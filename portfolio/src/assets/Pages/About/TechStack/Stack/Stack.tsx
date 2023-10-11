import { TechStackObject } from "../techstack";
import styles from "./Stack.module.css";

interface Props {
  stack: TechStackObject[];
  stackName: string;
}

const Stack = ({ stack, stackName }: Props) => {
  return (
    <div className={stackName === 'Web Development' ? [styles.container, styles.bottom].join(' ') : [styles.container, styles.top].join(' ')}>
      <h4 className={styles.stackName}>{stackName}</h4>
      <div className={styles.skillsContainer}>
        {stack.map((skill) => (
          <div className={styles.skillContainer}>
            <h1 className={styles.skillIcon}>{skill.comp}</h1>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
