import React from "react";
import TextWithTickMark from "../../textWithTickMark/TextWithTickMark";
import styles from "./WhyGauntlet.module.scss";
import handleViewport from "react-in-viewport";
import Image from "next/image";

import AwsLogo from "src/assets/gauntlet-compliance-logos/aws.png";
import CisLogo from "src/assets/gauntlet-compliance-logos/cis.png";
import GdprLogo from "src/assets/gauntlet-compliance-logos/gdpr.png";
import HipaaLogo from "src/assets/gauntlet-compliance-logos/hipaa.png";
import PciDss from "src/assets/gauntlet-compliance-logos/pci-dss.png";
import Soc2Logo from "src/assets/gauntlet-compliance-logos/soc2.png";
import IsmLogo from "src/assets/gauntlet-compliance-logos/ism.png";

const complianceLogos = [
  AwsLogo,
  CisLogo,
  GdprLogo,
  HipaaLogo,
  PciDss,
  Soc2Logo,
  IsmLogo,
];

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
              <p>
                <i>
                  *Vulnerability triage & remediation guidance is available
                  under Gauntlet Premium Subscription
                </i>
              </p>
            </div>
          </div>
          <div className={`${styles.triangle} ${styles.bottomTriangle}`} />
        </div>
        <h1>Achieve & Stay Compliant with</h1>
        <div className={styles.logosContainer}>
          <div className={styles.complianceLogos}>
            {complianceLogos.map((logo, index) => (
              <div key={index} className={styles.logo}>
                <Image src={logo} fill={true} alt="logo image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default handleViewport(WhyGauntlet);
