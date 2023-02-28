import React from "react";
import styles from "./SideInfoBar.module.scss";
import HatIcon from "src/assets/icons/hat.svg";
import TrustBadgeIcon from "src/assets/icons/trust-badge.svg";
import HandsHoldingGlobeIcon from "src/assets/icons/hands-holding-globe.svg";

const SectionItem = ({
  icon: Icon,
  content,
}: {
  icon: any;
  content: string;
}) => (
  <div className={styles.sectionItemContainer}>
    <Icon />
    <h2>{content}</h2>
  </div>
);

const SideInfoBar = () => {
  return (
    <div className={styles.container}>
      <SectionItem icon={HatIcon} content="Powered by Black Hat Trainers" />
      <hr />
      <SectionItem
        icon={TrustBadgeIcon}
        content="Trusted by Fortune 50 Companies and Startups"
      />
      <hr />
      <SectionItem
        icon={HandsHoldingGlobeIcon}
        content="Powered by Black Hat Trainers"
      />
    </div>
  );
};

export default SideInfoBar;
