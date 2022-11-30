import React from "react";
import AboutUsNavigationLayout from "src/components/AboutUsNavigationLayout";
import styles from "src/styles/pages/AboutUs.module.scss";
import spiralSteps from "src/assets/images/spiral-steps.jpg";
import Image from "next/image";

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
  {
    id: 3,
    name: "Press",
    linkPath: "/about-us/press",
  },
  {
    id: 4,
    name: "Community Events",
    linkPath: "/about-us/community-events",
  },
];

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutUsImage}>
        <Image src={spiralSteps} fill={true} alt={spiralSteps?.toString()} />
      </div>
      Irure magna ea commodo adipisicing reprehenderit reprehenderit eiusmod. Id
      dolor deserunt adipisicing laborum occaecat dolor in elit ut ad do ea
      aliquip. Cupidatat minim laborum sit minim est aute aute consequat tempor
      officia. Labore amet enim id adipisicing. Esse do qui adipisicing enim in
      officia est veniam in eiusmod esse cillum. In amet dolore fugiat culpa
      duis consectetur amet ex adipisicing.
      <p>
        Consequat exercitation exercitation magna quis minim in labore nulla non
        ea excepteur ad. Consectetur ad enim cupidatat laboris. Magna id qui
        labore elit. Nostrud voluptate aute deserunt laboris sint ipsum irure
        ipsum commodo. Ad sunt officia id ex culpa velit.
      </p>
    </div>
  );
};

AboutUs.getLayout = (page: React.ReactElement) => (
  <AboutUsNavigationLayout>{page}</AboutUsNavigationLayout>
);

export default AboutUs;
