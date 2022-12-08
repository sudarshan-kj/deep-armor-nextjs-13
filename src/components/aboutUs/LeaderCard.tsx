import React, { FC } from "react";
import styles from "./LeaderCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import LinkedinIcon from "src/assets/icons/linkedin.svg";

interface ILeaderCard {
  thumbnail: any;
  name: string;
  designation: string;
  linkedinLink: string;
  description: string;
}

const LeaderCard: FC<ILeaderCard> = ({
  thumbnail,
  name,
  designation,
  linkedinLink,
  description,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.thumbnailContainer}>
        <div className={styles.thumbnail}>
          <Image src={thumbnail} fill={true} alt="leader-image" />
        </div>
      </div>
      <div className={styles.contentContainer}>
        <h3>{name}</h3>
        <div className={styles.designation}>
          <h5>{designation}</h5>
          <Link target="_blank" rel="noreferrer" href={linkedinLink}>
            <LinkedinIcon />
          </Link>
        </div>
        <h4>{description}</h4>
      </div>
    </div>
  );
};

export default LeaderCard;
