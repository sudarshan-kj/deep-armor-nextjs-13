import { useEffect } from "react";
import styles from "./Testimonials.module.scss";
import TestimonialCard from "./TestimonialCard";
import mobile from "src/assets/images/mobile.jpg";
import { TestimonialType } from "src/types";
import { useState } from "react";
import ArrowRight from "src/assets/icons/arrow-right.svg";
import ArrowLeft from "src/assets/icons/arrow-left.svg";
import { useMediaQuery } from "react-responsive";

import IntelSportsImage from "src/assets/images/intel-sports.png";
import IntelIotgImage from "src/assets/images/intel-iotg.png";
import CiscoImage from "src/assets/images/cisco.png";
import SwiggyImage from "src/assets/images/swiggy.png";
import RocksetImage from "src/assets/images/rockset.jpg";
import WillowImage from "src/assets/images/willow.jpg";
import BlackHatImage from "src/assets/images/black-hat.png";
import PlanetLabsImage from "src/assets/images/planet-labs.png";

const testimonials: TestimonialType[] = [
  {
    id: 0,
    from: "Head of Security, Intel Sports Group",
    description:
      "“The quality of work delivered by Deep Armor so far has been outstanding. I can recommend you to other BUs without a doubt and would be happy to kick start the 'preferred vendors' process.”",
    image: IntelSportsImage,
  },
  {
    id: 1,
    from: "Principal Architect, Swiggy",
    description:
      "“Thank you so much. Your prompt and detailed responses have always been a great help for me to put together these processes that would hopefully help us improve our security posture over time.”",
    image: SwiggyImage,
  },
  {
    id: 2,
    from: "CTO & Senior Director, Cisco Cloud Networking",
    description:
      "“There are collaterals we are deriving out of this effort that can be leveraged for long term integration into our release process. Thank you and your team, it has been great experience. Deep Armor team has done excellent work in doing PEN testing for DC products”",
    image: CiscoImage,
  },
  {
    id: 3,
    from: "VP of Software Engineering, Willow Innovations",
    description:
      "“Thank you for all the fantastic work on [our products] in the past few years.”",
    image: WillowImage,
  },
  {
    id: 4,
    from: "Director of Security, Planet Labs",
    description:
      "“We are very happy with the quality of vulnerabilities that were uncovered as part of this engagement. The CTF and the [security] labs were stars of the show and everyone really enjoyed them (including the security team)”",
    image: PlanetLabsImage,
  },
  {
    id: 5,
    from: "Senior Architect, Intel IoT Group",
    description:
      "“Thanks again for all the help. It really helped to close security validation items. We enjoyed working with you on this.”",
    image: IntelIotgImage,
  },
  {
    id: 6,
    from: "SRE, Rockset",
    description:
      "“Excellent findings. Having a 3rd party review a new feature like our [redacted] implementation is a great way to validate that we have built it correctly.”",
    image: RocksetImage,
  },
  {
    id: 7,
    from: "Black Hat Trainings",
    description:
      "“Course was great overall and met expectations. Even with my limited background with Linux, Python, Etc. I was still able to learn and understand the concepts. Instructors knew the material well and were prepared to answer questions. Great course! Thank you.”",
    image: BlackHatImage,
  },
];

const Testimonials = () => {
  const [testimonialSection, setTestimonialSection] = useState(0);
  const [isMediumSizedOrGreaterScreen, setIsMediumSizedOrGreaterScreen] =
    useState<boolean | null>(null);
  const [animationDirection, setAnimationDirection] = useState<
    "left" | "right"
  >("right");

  let MAX_TESTIMONIALS_PER_SECTION = isMediumSizedOrGreaterScreen ? 3 : 1;

  const slicedTestimonials = testimonials.slice(
    MAX_TESTIMONIALS_PER_SECTION * testimonialSection,
    MAX_TESTIMONIALS_PER_SECTION * (testimonialSection + 1)
  );

  const isScreenWidthGreaterThan768px = useMediaQuery({
    query: "(min-width: 768px)",
  });

  /*it may look like we are unnecessarily using a state variable and useEffect here, but this is done to counter the rehydration
   problem mentioned here: https://nextjs.org/docs/messages/react-hydration-error*/
  useEffect(() => {
    setIsMediumSizedOrGreaterScreen(isScreenWidthGreaterThan768px);
  }, [isScreenWidthGreaterThan768px]);

  const handleNextClick = () => {
    setTestimonialSection((p) => p + 1);
    setAnimationDirection("left");
  };

  const handlePreviousClick = () => {
    setTestimonialSection((p) => p - 1);
    setAnimationDirection("right");
  };

  const shouldDisabledPreviousClick = testimonialSection === 0;

  const totalNumberOfSections = Math.ceil(
    testimonials.length / MAX_TESTIMONIALS_PER_SECTION
  );

  const shouldDisabledNextClick =
    testimonialSection === totalNumberOfSections - 1;

  return (
    <div className={styles.container}>
      <h2>Testimonials</h2>
      <div className={styles.testimonials}>
        {slicedTestimonials.map((testimonial) => (
          <TestimonialCard
            animationDirection={animationDirection}
            key={testimonial.id}
            {...testimonial}
          />
        ))}
        <div className={styles.controls}>
          <button
            disabled={shouldDisabledPreviousClick}
            onClick={handlePreviousClick}
          >
            <ArrowLeft />
          </button>
          <button disabled={shouldDisabledNextClick} onClick={handleNextClick}>
            <ArrowRight />
          </button>
        </div>
      </div>

      <div className={styles.indicators}>
        {Array(totalNumberOfSections)
          .fill(0)
          .map((_: any, index: number) => (
            <div
              key={index}
              className={`${styles.indicator} ${
                index === testimonialSection ? styles.active : ""
              } `}
            />
          ))}
      </div>
    </div>
  );
};

export default Testimonials;
