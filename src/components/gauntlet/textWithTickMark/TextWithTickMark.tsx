import React from "react";
import TickIcon from "src/assets/icons/tick-icon.svg";
import styles from "./TextWithTickMark.module.scss";

const TextWithTickMark = ({ textContent }: { textContent: string }) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <TickIcon />
      </div>
      <div className={styles.textContainer}>
        <h2>{textContent}</h2>
      </div>
    </div>
  );
};

export default TextWithTickMark;
