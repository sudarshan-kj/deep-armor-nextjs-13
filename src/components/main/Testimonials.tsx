import { useEffect } from "react";
import styles from "./Testimonials.module.scss";
import TestimonialCard from "./TestimonialCard";
import hardware from "src/assets/images/hardware.jpg";
import sumanth from "src/assets/images/man-sumanth.png";
import sridhar from "src/assets/images/man-sridhar.jpg";
import mobile from "src/assets/images/mobile.jpg";
import signature from "src/assets/images/signature.jpg";
import training from "src/assets/images/training.jpg";
import { TestimonialType } from "src/types";
import { useState } from "react";
import ArrowRight from "src/assets/icons/arrow-right.svg";
import ArrowLeft from "src/assets/icons/arrow-left.svg";
import { useMediaQuery } from "react-responsive";

const testimonials: TestimonialType[] = [
  {
    id: 0,
    from: "First, Jacklabs",
    description:
      "Occaecat pariatur occaecat nostrud culpa adipisicing sunt. Deserunt amet labore non aute Lorem.",
    image: hardware,
  },
  {
    id: 1,
    from: "Second, McAfee",
    description:
      "Eiusmod ex excepteur aliqua reprehenderit mollit cillum cillum magna.",
    image: sumanth,
  },
  {
    id: 2,
    from: "Third, Cisco",
    description:
      "Eu cillum consectetur voluptate Lorem fugiat enim in cillum nostrud minim. ",
    image: sridhar,
  },
  {
    id: 3,
    from: "Fourth, Dark Labs",
    description:
      "Magna consequat incididunt nisi do ipsum incididunt veniam do. Dolor incididunt labore non laboris. ",
    image: mobile,
  },
  {
    id: 4,
    from: "Fifth, Alibaba",
    description:
      "Occaecat pariatur occaecat nostrud culpa adipisicing sunt. Deserunt amet labore non aute Lorem.",
    image: mobile,
  },
  {
    id: 5,
    from: "Sixth, McAfee",
    description:
      "Eu cillum consectetur voluptate Lorem fugiat enim in cillum nostrud minim. ",
    image: hardware,
  },
  {
    id: 6,
    from: "Seventh, Cisco",
    description:
      "Occaecat pariatur occaecat nostrud culpa adipisicing sunt. Deserunt amet labore non aute Lorem.",
    image: signature,
  },
  {
    id: 7,
    from: "Eigth, Dark Labs",
    description:
      "Dolore eiusmod fugiat reprehenderit mollit excepteur qui ullamco non ut. ",
    image: training,
  },

  {
    id: 8,
    from: "Ninth, McAfee",
    description:
      "Occaecat pariatur occaecat nostrud culpa adipisicing sunt. Deserunt amet labore non aute Lorem.",
    image: hardware,
  },
  {
    id: 9,
    from: "Tenth, Cisco",
    description:
      "Occaecat pariatur occaecat nostrud culpa adipisicing sunt. Deserunt amet labore non aute Lorem.",
    image: hardware,
  },
  {
    id: 10,
    from: "Eleventh, Dark Labs",
    description:
      "Occaecat pariatur occaecat nostrud culpa adipisicing sunt. Deserunt amet labore non aute Lorem.",
    image: training,
  },
];

const Testimonials = () => {
  const [testimonialSection, setTestimonialSection] = useState(0);
  const [isMediumScreen, setIsMediumScreen] = useState<boolean | null>(null);

  let MAX_TESTIMONIALS_PER_SECTION = isMediumScreen ? 4 : 2;

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
    setIsMediumScreen(isScreenWidthGreaterThan768px);
  }, [isScreenWidthGreaterThan768px]);

  const handleNextClick = () => {
    setTestimonialSection((p) => p + 1);
  };

  const handlePreviousClick = () => {
    setTestimonialSection((p) => p - 1);
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
          <TestimonialCard key={testimonial.id} {...testimonial} />
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
