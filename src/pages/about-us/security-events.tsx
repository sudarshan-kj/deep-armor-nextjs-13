import { ReactElement } from "react";
import AboutUsNavigationLayout from "src/layouts/AboutUsNavigationLayout";
import AboutUsItemLayout from "src/layouts/AboutUsItemLayout";
import SecurityEventCard from "src/components/aboutUs/SecurityEventCard";
import hardware from "src/assets/images/hardware.jpg";
import { SecurityEventType } from "src/types";
import styles from "src/styles/pages/AboutUs.module.scss";
import BlackHat from "src/assets/conference-logos/1.png";
import BlackHatAsia from "src/assets/conference-logos/3.png";
import Shield from "src/assets/conference-logos/4.png";
import Target from "src/assets/conference-logos/5.png";
import Xv from "src/assets/conference-logos/6.png";
import Nasscom from "src/assets/conference-logos/7.png";
import Temple from "src/assets/conference-logos/8.png";
import Shakacon from "src/assets/conference-logos/9.png";
import BlackHatEurope from "src/assets/conference-logos/10.png";
import First from "src/assets/conference-logos/11.png";
import SanJose from "src/assets/conference-logos/12.jpg";
import Dsci from "src/assets/conference-logos/14.png";
import Lock from "src/assets/conference-logos/15.png";
import Sacon from "src/assets/conference-logos/16.png";

import Image from "next/image";

const conferenceLogos = [
  BlackHat,
  BlackHatAsia,
  Shield,
  Target,
  Xv,
  Nasscom,
  Temple,
  Shakacon,
  BlackHatEurope,
  First,
  SanJose,

  Dsci,
  Lock,
  Sacon,
];

const securityEvents: SecurityEventType[] = [
  {
    id: 0,
    name: "Black Hat Conference",
    description:
      "Minim sunt velit officia do voluptate ad aliqua nulla fugiat ut do in tempor. Ipsum quis occaecat reprehenderit Lorem tempor culpa aliqua consectetur non commodo. Mollit est duis mollit consectetur non consequat Lorem. Dolor Lorem ut cupidatat anim ipsum ut. ",
    location: "Las Vegas",
    date: "2019",
    image: hardware,
  },
  {
    id: 1,
    name: "Javascript Conference",
    description:
      "Minim sunt velit officia do voluptate ad aliqua nulla fugiat ut do in tempor. Ipsum quis occaecat reprehenderit Lorem tempor culpa aliqua consectetur non commodo. Mollit est duis mollit consectetur non consequat Lorem. Dolor Lorem ut cupidatat anim ipsum ut. ",
    location: "Bengaluru",
    date: "2022",
    image: hardware,
  },
  //dummy card so that we get atleast a card's space
];

const SecurityEvents = () => {
  return (
    <div className={styles.securityEventsContainer}>
      {securityEvents.map((event) => (
        <SecurityEventCard key={event.id} {...event} />
      ))}
      <h2>Training and Presentations at</h2>
      <div className={styles.logosContainer}>
        <div className={styles.conferenceLogos}>
          {conferenceLogos.map((logo, index) => (
            <div key={index} className={styles.logo}>
              <Image src={logo} fill={true} alt="logo image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

SecurityEvents.getLayout = (page: ReactElement) => (
  <AboutUsNavigationLayout>
    <AboutUsItemLayout header="Security Events">{page}</AboutUsItemLayout>
  </AboutUsNavigationLayout>
);

export default SecurityEvents;
