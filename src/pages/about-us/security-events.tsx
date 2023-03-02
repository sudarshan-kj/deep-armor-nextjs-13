import { ReactElement } from "react";
import AboutUsNavigationLayout from "src/layouts/AboutUsNavigationLayout";
import AboutUsItemLayout from "src/layouts/AboutUsItemLayout";
import SecurityEventCard from "src/components/aboutUs/SecurityEventCard";
import hardware from "src/assets/images/hardware.jpg";
import { SecurityEventType } from "src/types";
import styles from "src/styles/pages/AboutUs.module.scss";

import BlackHat from "src/assets/conference-logos/blackhat-logo.png";
import First from "src/assets/conference-logos/first-logo.png";
import OwaspAppSec from "src/assets/conference-logos/owasp-appsec-logo.png";
import InsomniHack from "src/assets/conference-logos/insomnihack-logo.png";
import Troopers from "src/assets/conference-logos/troopers-logo.png";
import NuitDuHack from "src/assets/conference-logos/nuit-du-hack-logo.png";
import SecurityFest from "src/assets/conference-logos/security-fest-logo.png";
import IotShow from "src/assets/conference-logos/iot-show-logo.png";
import Nasscom from "src/assets/conference-logos/nasscom-logo.png";
import Dsci from "src/assets/conference-logos/dsci-logo.png";
import IotSf from "src/assets/conference-logos/iot-sf-logo.png";
import Pacsec from "src/assets/conference-logos/pacsec-logo.png";
import Shakacon from "src/assets/conference-logos/shakacon-logo.png";
import Ciso from "src/assets/conference-logos/ciso-logo.jpeg";
import OwaspSeaside from "src/assets/conference-logos/owasp-seaside-logo.jpeg";

import Image from "next/image";
import BlackHatSummitEventImage from "src/assets/images/blackhat-summit.png";
import SaconBreachAndAttackSummitImage from "src/assets/images/sacon-breach-and-attack-summit.png";

const conferenceLogos = [
  BlackHat,
  First,
  OwaspAppSec,
  InsomniHack,
  Troopers,
  NuitDuHack,
  SecurityFest,
  IotShow,
  Nasscom,
  Dsci,
  IotSf,
  Pacsec,
  Shakacon,
  Ciso,
  OwaspSeaside,
];

const securityEvents: SecurityEventType[] = [
  {
    id: 0,
    name: "Black Hat Events",
    description:
      "Deep Armor has been invited three times to conduct trainings at Black Hat USA, Las Vegas. This is one of the most prestigious security events in the world. Our innovative research and hands-on approaches for learning IoT security has been very well received by students at Black Hat Events. Our security team has also presented our research at Black Hat Europe and Asia.",
    location: "Las Vegas",
    date: "2019",
    image: BlackHatSummitEventImage,
  },
  {
    id: 1,
    name: "SACON and Breach & Attack Summit",
    description:
      "Our team regularly speaks and conducts deep-tech security trainings at the Security Architecture Conference (SACON) and the Breach & Attack Summit in Bangalore, India. In addition to technical sessions, our team has participated in CISO programs to discuss the latest security threats and ways to improve security posture across multiple industry sectors",
    location: "Bengaluru",
    date: "2020",
    image: SaconBreachAndAttackSummitImage,
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
