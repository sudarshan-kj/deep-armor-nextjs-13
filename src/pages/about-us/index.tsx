import React from "react";
import AboutUsNavigationLayout from "src/layouts/AboutUsNavigationLayout";
import styles from "src/styles/pages/AboutUs.module.scss";
import spiralSteps from "src/assets/images/spiral-steps.jpg";
import Image from "next/image";
import AboutUsItemLayout from "src/layouts/AboutUsItemLayout";

export const aboutUsItems = [
  {
    id: 0,
    name: "About Us",
    linkPath: "/about-us",
  },
  {
    id: 1,
    name: "Leadership",
    linkPath: "/about-us/leadership",
  },
  {
    id: 2,
    name: "Security Events",
    linkPath: "/about-us/security-events",
  },
  // {
  //   id: 3,
  //   name: "Press",
  //   linkPath: "/about-us/press",
  // },
  // {
  //   id: 4,
  //   name: "Community Events",
  //   linkPath: "/about-us/community-events",
  // },
];

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutUsImage}>
        <Image src={spiralSteps} fill={true} alt={spiralSteps?.toString()} />
      </div>
      <p>
        Deep Armor is an award-winning information security firm and a trusted
        partner to over 35 companies around the world. We are experts in
        securing web applications, mobile apps, Internet of Things (IoT),
        wireless protocols and cloud environments. Our team frequently speaks
        and conducts trainings at prestigious security events such as Black Hat,
        Troopers, AppSec, Insomni’hack, FIRST, and other global events.
      </p>
      <p>
        Our deep-tech, architecture-to-deployment approach towards product
        security has enabled our customers to build and ship secure,
        privacy-preserving solutions. We are experts in secure product design,
        vulnerability assessments, penetration testing, security automation,
        privacy and incident response. As strong proponents of Security
        Shift-Left, we have helped our customers save significant costs in cyber
        incident damages by reporting security vulnerabilities early in the
        development cycle, and recommending mitigation techniques to resolve
        such vulnerabilities quickly and effectively.
      </p>
      <p>
        Deep Armor’s Gauntlet is a powerful security monitoring platform for
        third-party cloud environments. Misconfigured cloud continues to be the
        most neglected and often attacked component of SaaS solutions and web
        applications. Gauntlet has helped in identifying and quickly remediating
        hundreds of vulnerabilities in our client platforms -- before they could
        be discovered and exploited by attackers on the Internet.
      </p>
      <p>
        Browse through our Solutions page for more details on our consulting
        services and other offerings.
      </p>
    </div>
  );
};

AboutUs.getLayout = (page: React.ReactElement) => (
  <AboutUsNavigationLayout>
    <AboutUsItemLayout header="About Us">{page}</AboutUsItemLayout>
  </AboutUsNavigationLayout>
);

export default AboutUs;
