import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <h1>Contact Us</h1>
      <div>
        <h3>Interested in our world-class product security services?</h3>
        <h3>
          Reach out to us at <span>services@deeparmor.com</span>
        </h3>
      </div>
      <h6>© 2023 All rights reserved</h6>
    </footer>
  );
};

export default Footer;
