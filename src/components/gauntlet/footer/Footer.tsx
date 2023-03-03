import React from "react";
import handleViewport from "react-in-viewport";
import styles from "./Footer.module.scss";

const GauntletFooter = () => {
  return (
    <footer className={styles.container}>
      <div>
        <h1>Contact Us</h1>
        <p>
          Reach out to us at <u>gauntlet@deeparmor.com</u>
        </p>
        <h6>© 2023 All rights reserved</h6>
      </div>
    </footer>
  );
};

export default GauntletFooter;
