import React from "react";
import Hero from "src/components/main/Hero";
import Solutions from "src/components/main/Solutions";
import Testimonials from "src/components/main/Testimonials";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <>
      <Hero />
      <section className={styles.mainSection}>
        <Solutions />
        <Testimonials />
      </section>
    </>
  );
};

export default HomePage;
