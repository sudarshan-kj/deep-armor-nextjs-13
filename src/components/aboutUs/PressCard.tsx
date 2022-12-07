import React, { FC } from "react";
import styles from "./PressCard.module.scss";
import { PressType } from "src/types";
import Calendar from "src/assets/icons/calendar.svg";

const PressCard: FC<PressType> = ({ name, date, description, link }) => {
  return (
    <div className={styles.card}>
      <div className={styles.titleBar}>
        <h3>{name}</h3>
        <div className={styles.date}>
          <Calendar />
          <h5>{date}</h5>
        </div>
      </div>
      <p>{description}</p>
      <a target="_blank" href={link}>
        Read Article
      </a>
    </div>
  );
};

export default PressCard;
