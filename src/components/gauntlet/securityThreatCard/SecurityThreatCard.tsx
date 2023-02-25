import React, { FC } from "react";
import { SecurityThreatInfoType } from "src/types";
import styles from "./SecurityThreatCard.module.scss";

const SecurityThreatCard: FC<SecurityThreatInfoType> = ({
  percentage,
  description1,
  description2,
}) => {
  return (
    <div className={styles.container}>
      <h2>{percentage}%</h2>
      <p>{description1}</p>
      <p>{description2}</p>
    </div>
  );
};

export default SecurityThreatCard;
