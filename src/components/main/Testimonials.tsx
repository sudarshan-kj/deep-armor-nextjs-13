import styles from "./Testimonials.module.scss";
import TestimonialCard from "./TestimonialCard";
import hardware from "src/assets/images/hardware.jpg";
import { TestimonialType } from "src/types";
import { useState } from "react";
import ArrowRight from "src/assets/icons/arrow-right.svg";
import ArrowLeft from "src/assets/icons/arrow-left.svg";

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
      "Occaecat pariatur occaecat nostrud culpa adipisicing sunt. Deserunt amet labore non aute Lorem.",
    image: hardware,
  },
  {
    id: 2,
    from: "Third, Cisco",
    description:
      "Occaecat pariatur occaecat nostrud culpa adipisicing sunt. Deserunt amet labore non aute Lorem.",
    image: hardware,
  },
  {
    id: 3,
    from: "Fourth, Dark Labs",
    description:
      "Occaecat pariatur occaecat nostrud culpa adipisicing sunt. Deserunt amet labore non aute Lorem.",
    image: hardware,
  },
  {
    id: 4,
    from: "Fifth, Alibaba",
    description:
      "Occaecat pariatur occaecat nostrud culpa adipisicing sunt. Deserunt amet labore non aute Lorem.",
    image: hardware,
  },
  {
    id: 5,
    from: "Sixth, McAfee",
    description:
      "Occaecat pariatur occaecat nostrud culpa adipisicing sunt. Deserunt amet labore non aute Lorem.",
    image: hardware,
  },
  {
    id: 6,
    from: "Seventh, Cisco",
    description:
      "Occaecat pariatur occaecat nostrud culpa adipisicing sunt. Deserunt amet labore non aute Lorem.",
    image: hardware,
  },
  {
    id: 7,
    from: "Eigth, Dark Labs",
    description:
      "Occaecat pariatur occaecat nostrud culpa adipisicing sunt. Deserunt amet labore non aute Lorem.",
    image: hardware,
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
    image: hardware,
  },
];

const MAX_TESTIMONIALS_PER_SECTION = 4;

const Testimonials = () => {
  const [testimonialSection, setTestimonialSection] = useState(0);
  const slicedTestimonials = testimonials.slice(
    MAX_TESTIMONIALS_PER_SECTION * testimonialSection,
    MAX_TESTIMONIALS_PER_SECTION * (testimonialSection + 1)
  );

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
          <TestimonialCard {...testimonial} />
        ))}
      </div>
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
