import React from "react";
import styles from "./Footer.module.scss";

const GauntletFooter = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Contact Us</h1>
        <p>
          You can write to us at <u>gauntlet@deeparmor.com</u>
        </p>
      </div>
    </div>
  );
};

export default GauntletFooter;
