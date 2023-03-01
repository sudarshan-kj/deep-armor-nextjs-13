import { FC } from "react";
import { TestimonialType } from "src/types";
import styles from "./Testimonials.module.scss";
import Image from "next/image";

const TestimonialCard: FC<TestimonialType> = ({
  animationDirection,
  from,
  description,
  image,
}) => {
  return (
    <div
      className={`${styles.card} ${
        animationDirection === "left" ? styles.slideLeft : styles.slideRight
      }`}
    >
      <section className={styles.from}>
        <div className={styles.image}>
          <Image src={image} fill={true} alt="testimonial image" />
        </div>
        <h5>{from}</h5>
      </section>
      <section className={styles.description}>{description}</section>
    </div>
  );
};

export default TestimonialCard;
