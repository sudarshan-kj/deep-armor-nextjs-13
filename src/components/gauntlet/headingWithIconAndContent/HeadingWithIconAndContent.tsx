import React from "react";
import styles from "./HeadingWithIconAndContent.module.scss";

const HeadingWithIconAndContent = ({
  icon: Icon,
  heading,
  description,
}: {
  icon: any;
  heading: string;
  description: React.ReactElement;
}) => {
  return (
    <div className={styles.container}>
      <Icon />
      <h2>{heading}</h2>
      <div className={styles.descriptionContainer}>{description}</div>
    </div>
  );
};

export default HeadingWithIconAndContent;
