import React from "react";
import Hero from "src/components/main/Hero";
import SideInfoBar from "src/components/main/SideInfoBar";
import Solutions from "src/components/main/Solutions";
import Testimonials from "src/components/main/Testimonials";
import styles from "./HomePage.module.scss";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [isMediumSizedOrGreaterScreen, setIsMediumSizedOrGreaterScreen] =
    useState<boolean | null>(null);

  const isScreenWidthGreaterThan768px = useMediaQuery({
    query: "(min-width: 1200px)",
  });
  /*it may look like we are unnecessarily using a state variable and useEffect here, but this is done to counter the rehydration
 problem mentioned here: https://nextjs.org/docs/messages/react-hydration-error*/
  useEffect(() => {
    setIsMediumSizedOrGreaterScreen(isScreenWidthGreaterThan768px);
  }, [isScreenWidthGreaterThan768px]);
  return (
    <>
      <Hero />
      <section className={styles.mainSection}>
        <Solutions />
        {isMediumSizedOrGreaterScreen && <SideInfoBar />}
        <Testimonials />
      </section>
    </>
  );
};

export default HomePage;
