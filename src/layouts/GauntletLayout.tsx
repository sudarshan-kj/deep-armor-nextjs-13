import Footer from "../components/gauntlet/footer/Footer";
import React from "react";
import styles from "./GauntletLayout.module.scss";

export default function GauntletLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return <div style={{ padding: "5rem" }}>This page is under development.</div>;
  // return (
  //   <div className={styles.bodyContainer}>
  //     <div className={styles.contentContainer}>{children}</div>
  //     <Footer />
  //   </div>
  // );
}
