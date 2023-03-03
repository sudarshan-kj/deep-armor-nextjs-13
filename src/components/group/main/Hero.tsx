import Image from "next/image";
import React from "react";
import styles from "./Hero.module.scss";
import lighthouse from "src/assets/images/lighthouse.jpg";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <h2>
            Deep-tech <span>security.</span>
          </h2>
          <h2>Peace of mind.</h2>
          <p>
            Award-winning cybersecurity firm. Trusted partner to over 35
            companies across industry sectors & geographies.
          </p>
        </div>
        <div className={styles.image}>
          <Image src={lighthouse} fill={true} alt="lighthouse" />
          <div className={styles.mask} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
