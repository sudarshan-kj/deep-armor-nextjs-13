import React from "react";
import handleViewport from "react-in-viewport";
import styles from "./Footer.module.scss";

const GauntletFooter = ({ inViewport, forwardedRef }: any) => {
  return (
    <footer className={styles.container}>
      <div ref={forwardedRef} className={`${inViewport && styles.drop}`}>
        <h1>Contact Us</h1>
        <p>
          You can write to us at <u>gauntlet@deeparmor.com</u>
        </p>
      </div>
    </footer>
  );
};

export default handleViewport(GauntletFooter);
