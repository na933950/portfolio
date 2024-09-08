import { useEffect, useState } from "react";
import styles from "./AnimationBubbles.module.css";

const AnimationBubbles = () => {
  const [dataLayout, setDataLayout] = useState(1);
  const [dataLayoutOrder, setDataLayoutOrder] = useState([1, 2, 3, 4, 5, 6]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setDataLayout(getInfluencedInt);
    }, 4000);

    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, []);

  const getInfluencedInt = () => {
    let counter = 0;
    let idx = 0;

    while (counter < 20) {

        const randNum = Math.floor(Math.random() * 3);

        if (randNum == 1) {
            const newDataLayoutOrder = [];

            for (let i = 0; i < dataLayoutOrder.length; i++) {
                if (idx != i) {
                    newDataLayoutOrder.push(dataLayoutOrder[i]);
                }
            }
            newDataLayoutOrder.push(dataLayoutOrder[idx]);
            const returnNum = dataLayoutOrder[idx]
            setDataLayoutOrder(newDataLayoutOrder);
            return returnNum;
        } else {
            counter += 1;
            idx = (idx + 1) % 6
        }
    }
    return dataLayoutOrder[idx]
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
