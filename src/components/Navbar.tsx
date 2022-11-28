import { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import LogoPath from "src/assets/icons/logo.svg";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const handleContactClick = () => {
    document?.querySelector("footer")?.scrollIntoView({ behavior: "smooth" });
  };

  const [isMediumScreen, setIsMediumScreen] = useState<boolean | null>(null);
  const isScreenWidthGreaterThan768px = useMediaQuery({
    query: "(min-width: 768px)",
  });

  /*it may look like we are unnecessarily using a state variable and useEffect here, but this is done to counter the rehydration
   problem mentioned here: https://nextjs.org/docs/messages/react-hydration-error*/
  useEffect(() => {
    setIsMediumScreen(isScreenWidthGreaterThan768px);
  }, [isScreenWidthGreaterThan768px]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">
          <div className={styles.logo}>
            <LogoPath className={styles.svgLogo} />
          </div>
        </Link>
        <nav className={styles.actions}>
          {isMediumScreen && (
            <>
              <h4>
                <Link href="/solutions/hardware-and-embedded-security">
                  solutions
                </Link>
              </h4>
              <h4>
                <Link target="_blank" href="https://medium.com/deep-armor">
                  blog
                </Link>
              </h4>
              <h4>
                <Link href="/about-us">about us</Link>
              </h4>
              <h4 className={styles.contact} onClick={handleContactClick}>
                contact
              </h4>
            </>
          )}
          {isMediumScreen === false && (
            <div className={styles.menuIcon}>Hamburger Icon</div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
