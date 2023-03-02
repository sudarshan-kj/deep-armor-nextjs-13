import React from "react";
import styles from "./SkewedRectangle.module.scss";

const SkewedRectangle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <div className={styles.skewedRectangle}>{children}</div>
    </div>
  );
};

export default SkewedRectangle;
