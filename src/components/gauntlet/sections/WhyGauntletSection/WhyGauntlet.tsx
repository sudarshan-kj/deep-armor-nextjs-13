import React from "react";
import TextWithTickMark from "../../textWithTickMark/TextWithTickMark";
import styles from "./WhyGauntlet.module.scss";
import handleViewport from "react-in-viewport";

const whyGauntletPointers = [
  {
    id: 0,
    textContent: "Over 250 security checks run everyday",
  },
  {
    id: 1,
    textContent:
      "Discover, track and mitigate security misconfigurations in your cloud",
  },
  {
    id: 2,
    textContent:
      "Agent-less setup - almost zero customer-side setup & maintenance",
  },
  {
    id: 3,
    textContent:
      "Online dashboard gives complete visibility of security health",
  },
  { id: 4, textContent: "Easy integration with bug tracking tools" },
  {
    id: 5,
    textContent: "Managed Security Service from Deep Armor*",
  },
];

const WhyGauntlet = ({ inViewport, forwardedRef }: any) => {
  return (
    <div
      ref={forwardedRef}
      className={`${styles.container} ${inViewport && styles.drop}`}
    >
      <h1>Why Gauntlet?</h1>
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
