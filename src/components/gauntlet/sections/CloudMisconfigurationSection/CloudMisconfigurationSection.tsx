import React from "react";
import { CloudMisconfigurationInfoType } from "src/types";
import styles from "./CloudMisconfigurationSection.module.scss";
import CloudMisconfigurationCard from "src/components/gauntlet/CloudMiconfigurationCard/CloudMisconfigurationCard";
import handleViewport from "react-in-viewport";

const cloudMisconfigurationInfo: Array<CloudMisconfigurationInfoType> = [
  {
    id: 0,
    description: "Overly Permissive Access Privileges",
    additionalInfo:
      "Overly permissive access policies and privileges enable expanded access to far more assets than needed",
  },
  {
    id: 1,
    description: "Storage Misconfiguration",
    additionalInfo:
      "Confidential or regulated assets can inadvertently get mislabeled and find their way to external audiences",
  },
  {
    id: 2,
    description: "Insufficient / Misconfigured Logging & Monitoring",
    additionalInfo:
      "When monitoring & logging are compromised, it is difficult to detect events/changes & where they originated",
  },
  {
    id: 3,
    description: "Open Inbound and Outbound Ports",
    additionalInfo:
      "Minimizing unnecessary inbound and outbound ports is half the battle. Restricting access is the other half",
  },
  {
    id: 4,
    description: "Default System Credentials",
    additionalInfo:
      "Overly permissive access policies and privileges enable expanded access to far more assets than needed",
  },
  {
    id: 5,
    description: "Development settings in production",
    additionalInfo:
      "Do not use the production instances for development work. Misconfigured development settings lead to attacks",
  },
];

const CloudMisconfigurationSection = () => {
  return (
    <div className={styles.container}>
      <h1>Cloud Misconfigurations and Security Risks</h1>
      <div className={styles.contentContainer}>
        {cloudMisconfigurationInfo.map((miconfiguration) => (
          <CloudMisconfigurationCard
            key={miconfiguration.id}
            {...miconfiguration}
          />
        ))}
      </div>
    </div>
  );
};

export default CloudMisconfigurationSection;
