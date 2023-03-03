import React from "react";
import styles from "./RoleOfGauntletSection.module.scss";
import GauntletLogo from "src/assets/icons/gauntlet-logo-small.svg";
import handleViewport from "react-in-viewport";

const RoleOfGauntletSection = ({ forwardedRef, inViewport }: any) => {
  return (
    <div
      ref={forwardedRef}
      className={`${styles.container} ${inViewport && styles.drop}`}
    >
      <h1>Role of Gauntlet in your Product Security</h1>
      <div className={styles.contentBox}>
        <h2>Cloud and Web App Security</h2>
        <div className={styles.content}>
          <div className={styles.consultingServicesContainer}>
            <div className={styles.squareBoxesContainer}>
              <div className={styles.squareBox}>
                <h3>Web Pages</h3>
              </div>
              <div className={styles.squareBox}>
                <h3>APIs</h3>
              </div>
            </div>
            <div className={styles.separator} />
            <div className={styles.description}>
              <p>Secure with Deep Armor&apos;s expert</p>
              <h4>Consulting Services</h4>
            </div>
          </div>
          <div className={styles.cloudInfrastructureContainer}>
            <div className={styles.flexiBoxContainer}>
              <div className={styles.flexiBox}>
                <h3>Cloud Infrastructure</h3>
              </div>
            </div>
            <div className={styles.separator} />
            <div className={styles.description}>
              <p>Automate Security and Compliance monitoring with</p>
              <div className={styles.gauntletLogo}>
                <GauntletLogo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default handleViewport(RoleOfGauntletSection);
