import React from "react";
import Hero from "../components/Hero";
import Solutions from "../components/Solutions";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <>
      <Hero />
      <section className={styles.mainSection}>
        <Solutions />
      </section>
    </>
  );
};

export default HomePage;
