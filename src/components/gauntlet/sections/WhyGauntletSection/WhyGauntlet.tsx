import React from "react";
import TextWithTickMark from "../../textWithTickMark/TextWithTickMark";
import styles from "./WhyGauntlet.module.scss";
import handleViewport from "react-in-viewport";

const whyGauntletPointers = [
  {
    id: 0,
    textContent: "150+ Security Checks",
  },
  {
    id: 1,
    textContent: "Automated Daily Scans",
  },
  {
    id: 2,
    textContent: "Easy to use Dashboards",
  },
  {
    id: 3,
    textContent: "Integrate with bug tracking tools",
  },
  {
    id: 4,
    textContent: "Managed Security Service from Deep Armor*",
  },
];

const WhyGauntlet = ({ inViewport, forwardedRef }: any) => {
  return (
    <div
      ref={forwardedRef}
      className={`${styles.container} ${inViewport && styles.drop}`}
    >
      <h1>why Gauntlet?</h1>
      <div className={styles.flexContainer}>
        <div>
          <div className={`${styles.triangle} ${styles.topTriangle}`} />
          <div className={styles.card}>
            <div className={styles.cardContent}>
              {whyGauntletPointers.map((reason) => (
                <TextWithTickMark key={reason.id} {...reason} />
              ))}
            </div>
          </div>
          <div className={`${styles.triangle} ${styles.bottomTriangle}`} />
        </div>
      </div>
    </div>
  );
};

export default handleViewport(WhyGauntlet);
