import Image from "next/image";
import React from "react";
import styles from "./Hero.module.scss";
import lighthouse from "src/assets/images/lighthouse.jpg";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>
          Deep-tech <span>security.</span>
        </h2>
        <h2>Peace of mind</h2>
        <p>
          an award-winning information security firm and a trusted partner to
          over 25 companies around the world.
        </p>
      </div>
      <div className={styles.image}>
        <Image src={lighthouse} fill={true} alt="lighthouse" />
        <div className={styles.mask} />
      </div>
    </div>
  );
};

export default Hero;
