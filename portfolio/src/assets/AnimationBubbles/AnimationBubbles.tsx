import { useEffect, useState } from "react";
import styles from "./AnimationBubbles.module.css";

const AnimationBubbles = () => {
  const [dataLayout, setDataLayout] = useState(1);
  const dataLayoutLen = 6;

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setDataLayout(getRandomInt(dataLayoutLen));
    }, 4000);

    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, []);

  const getRandomInt = (max: number) => {
    const randNum = Math.floor(Math.random() * max) + 1;
    if (randNum === dataLayout) {
        return ((randNum + 1) % max) + 1
    } else {
        return randNum;
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.bubble1} data-layout={dataLayout}></div>
      <div className={styles.bubble2} data-layout={dataLayout}></div>
      <div className={styles.bubble3} data-layout={dataLayout}></div>
      <div className={styles.bubble4} data-layout={dataLayout}></div>
      <div className={styles.bubble5} data-layout={dataLayout}></div>
      <div className={styles.bubble6} data-layout={dataLayout}></div>
      <div className={styles.bubble7} data-layout={dataLayout}></div>
    </div>
  );
};

export default AnimationBubbles;
