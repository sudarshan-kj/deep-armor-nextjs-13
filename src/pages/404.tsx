import React from "react";
import styles from "./404.module.scss";
import ErrorIcon from "src/assets/icons/404.svg";

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.errorMsgContainer}>
        <ErrorIcon />
        <h2>We could not find the page you were looking for</h2>
      </div>
    </div>
  );
};

export default NotFoundPage;
