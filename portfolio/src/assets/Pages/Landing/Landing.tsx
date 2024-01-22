import { useState } from "react";
import styles from "./Landing.module.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { PiArrowFatLinesDownFill } from "react-icons/pi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import resume from "../../resume.pdf";
import AnimationBubbles from "../../AnimationBubbles";

interface Props {
  scrollToAbout: () => void;
}

const Landing = ({ scrollToAbout }: Props) => {
  const [numTyped, setNumTyped] = useState(0);
  const [color, setColor] = useState("var(--accent)");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const breakpoint = 700;
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  const [text] = useTypewriter({
    words: [
      "Computer Scientist",
      "Software Engineer",
      "Data Scientist",
      "Web Developer",
    ],
    loop: 0,
    delaySpeed: 2000,
    typeSpeed: 90,
    deleteSpeed: 50,
    onType: () => {
      setNumTyped((numTyped + 1) % 62);
      if (numTyped == 0) {
        setColor("var(--accent)");
      }
      if (numTyped > 17) {
        setColor("var(--accent-blue)");
      }
      if (numTyped > 34) {
        setColor("var(--accent)");
      }
      if (numTyped > 48) {
        setColor("var(--accent-blue)");
      }
    },
  });

  return (
    <>
      <div className={styles.container}>
        <div className={styles.summaryContainer}>
          <div className={styles.auxillaryContainer}>
            <h5>My name is</h5>
            <h1 className={styles.title}>Noah Abji</h1>
            <h5>And I am a</h5>
            <h2 style={{ color: color }}>
              {text}
              <Cursor></Cursor>
            </h2>
            <div className={styles.linksContainer}>
              <a href="https://www.github.com/na933950" target="blank">
                <h4 className={styles.link}>
                  <FaGithub />
                </h4>
              </a>
              <a
                href="https://www.linkedin.com/in/noah-abji-418b7321b/"
                target="blank"
              >
                <h4 className={styles.link}>
                  <FaLinkedin />
                </h4>
              </a>
              <a href={resume} target="blank">
                <h4 className={styles.link}>
                  <FiFileText />
                </h4>
              </a>
            </div>
          </div>
        </div>
        {breakpoint < screenWidth ? (
          <div className={styles.bubbleContainer}>
            {breakpoint < screenWidth ? <AnimationBubbles /> : null}
          </div>
        ) : null}
      </div>
      <div className={styles.downArrowContainer} onClick={scrollToAbout}>
        <h2 className={styles.textDownArrow}>
          <PiArrowFatLinesDownFill className={styles.downArrow} />
        </h2>
      </div>
    </>
  );
};

export default Landing;
