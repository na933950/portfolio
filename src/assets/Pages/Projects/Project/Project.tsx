import styles from "./Project.module.css";
import { ProjectObject } from "../projects.ts";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Project = ({
  name,
  github,
  description,
  link,
  bgImg,
  techs,
}: ProjectObject) => {
  const containerStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const [bgOpacity, setBgOpacity] = useState(0.5);
  const [textOpacity, setTextOpacity] = useState(0);

  const handleMouseEnter = () => {
    setBgOpacity(1);
    setTextOpacity(1);
  };

  const handleMouseLeave = () => {
    setBgOpacity(0.5);
    setTextOpacity(0);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.bgImgContainer}
        style={{ ...containerStyle }}
      ></div>
      <div className={styles.overlay} style={{ opacity: bgOpacity }}></div>
      <div
        className={styles.infoContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.titleContainer}>
          <h5>{name}</h5>
          <div className={styles.linkContainer}>
            <a href={github} target="blank"><h4><FaGithub /></h4></a>
            {link? <a href={link} target="blank"><h4><FaExternalLinkAlt /></h4></a> : null}
          </div>
        </div>
        <div className={styles.revealedInfo} style={{ opacity: textOpacity }}>
          <p>{description}</p>
          <div className={styles.techsContainer}>
            {techs.map((tech) => (
              <div className={styles.techContainer}>
                <h4>{tech()}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
