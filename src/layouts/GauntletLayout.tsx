import Footer from "../components/gauntlet/footer/Footer";
import React from "react";
import styles from "src/styles/pages/Gauntlet.module.scss";

export default function GauntletLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <div className={styles.bodyContainer}>
      {children}
      <Footer />
    </div>
  );
}
