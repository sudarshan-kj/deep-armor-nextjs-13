import React from "react";
import { SecurityThreatInfoType } from "src/types";
import SecurityThreatCard from "src/components/gauntlet/securityThreatCard/SecurityThreatCard";
import styles from "./SecurityThreatSection.module.scss";

const securityThreatInfo: Array<SecurityThreatInfoType> = [
  {
    id: 0,
    percentage: 56,
    description1: "of the organizations have",
    description2: "of the organizations have",
  },
  {
    id: 1,
    percentage: 77,
    description1: "of the organizations have",
    description2: "of the organizations have",
  },
  {
    id: 2,
    percentage: 26,
    description1: "of the organizations have",
    description2: "of the organizations have",
  },
  {
    id: 3,
    percentage: 97,
    description1: "of the organizations have",
    description2: "of the organizations have",
  },
  {
    id: 0,
    percentage: 56,
    description1: "of the organizations have",
    description2: "of the organizations have",
  },
  {
    id: 1,
    percentage: 77,
    description1: "of the organizations have",
    description2: "of the organizations have",
  },
];

const SecurityThreatSection = () => {
  return (
    <div className={styles.container}>
      {securityThreatInfo.map((threat) => (
        <SecurityThreatCard key={threat.id} {...threat} />
      ))}
    </div>
  );
};

export default SecurityThreatSection;
