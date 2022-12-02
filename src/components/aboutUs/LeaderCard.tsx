import React, { FC } from "react";
import styles from "./LeaderCard.module.scss";
import Image from "next/image";

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
      <div className={styles.thumbnail}>
        <Image src={thumbnail} fill={true} alt="leader-image" />
      </div>
    </div>
  );
};

export default LeaderCard;
