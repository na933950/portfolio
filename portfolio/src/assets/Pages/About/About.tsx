import { useState } from "react";
import styles from "./About.module.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import MagicCard from "../../MagicCard";

const About = () => {
  const [numTyped, setNumTyped] = useState(0);
  const [color, setColor] = useState("var(--accent)");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const breakpoint = 700;
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  }

  window.addEventListener('resize', handleResize);

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
        </div>
      </div>
      {breakpoint < screenWidth? <MagicCard></MagicCard> : null}
    </div>
  );
};

export default About;
