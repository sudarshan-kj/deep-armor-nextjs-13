import React from "react";
import styles from "./Footer.module.scss";

const GauntletFooter = () => {
  return (
    <footer className={styles.container}>
      <div>
        <h1>Contact Us</h1>
        <p>
          You can write to us at <u>gauntlet@deeparmor.com</u>
        </p>
      </div>
    </footer>
  );
};

export default GauntletFooter;
