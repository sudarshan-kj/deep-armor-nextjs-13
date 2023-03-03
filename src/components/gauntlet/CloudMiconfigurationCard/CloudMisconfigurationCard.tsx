import React, { FC } from "react";
import { CloudMisconfigurationInfoType } from "src/types";
import styles from "./CloudMisconfigurationCard.module.scss";

const CloudMisconfigurationCard: FC<CloudMisconfigurationInfoType> = ({
  description,
  additionalInfo,
}) => {
  return (
    <div className={styles.container}>
      <h2>{description}</h2>
      <div className={styles.overlay}>
        <span>{additionalInfo}</span>
      </div>
    </div>
  );
};

export default CloudMisconfigurationCard;
