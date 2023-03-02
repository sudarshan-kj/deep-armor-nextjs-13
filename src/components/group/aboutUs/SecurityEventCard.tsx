import { FC } from "react";
import { SecurityEventType } from "src/types";
import styles from "./SecurityEventCard.module.scss";
import Image from "next/image";
import Location from "src/assets/icons/location.svg";
import Calendar from "src/assets/icons/calendar.svg";

const SecurityEventCard: FC<SecurityEventType> = ({
  name,
  location,
  description,
  date,
  image,
  hidden,
}) => {
  return (
    <div className={`${styles.card} ${hidden ? styles.hidden : ""}`}>
      <div className={styles.image}>
        <Image src={image} fill={true} alt={image.toString()} />
      </div>
      <div className={styles.content}>
        <div className={styles.titleBar}>
          <section className={styles.mainTitle}>
            <h3>{name}</h3>
          </section>
          <section className={styles.metaData}>
            <div className={styles.location}>
              <Location />
              <h5>{location}</h5>
            </div>
            <div className={styles.date}>
              <Calendar />
              <h5>{date}</h5>
            </div>
          </section>
        </div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

export default SecurityEventCard;
