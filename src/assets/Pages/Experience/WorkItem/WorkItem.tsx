import styles from "./WorkItem.module.css";

interface Props {
  logo: string;
  companyName: string;
  title: string;
  location: string;
  date: string;
  description: string;
  techs: React.ReactNode[];
}

const WorkItem = ({
  logo,
  companyName,
  title,
  location,
  date,
  description,
  techs,
}: Props) => {
  return (
    <div className={styles.allContainer}>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <div className={styles.logoContainer}>
            <img className={styles.logo} src={logo} />
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.row}>
              <h5 className={styles.titleLeft}>{title}</h5>
              <h5 className={styles.titleRight}>{date}</h5>
            </div>
            <div className={styles.row}>
              <h6 className={styles.titleLeft}>{companyName}</h6>
              <h6 className={styles.titleRight}>{location}</h6>
            </div>
          </div>
        </div>
        <div className={styles.descriptionContainer}>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.techContainer}>
        {techs.map((tech) => (
          <div className={styles.singleTechContainer}>
            <h3 className={styles.tech}>{tech}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkItem;
