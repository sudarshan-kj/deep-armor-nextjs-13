import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.scss";
import Logo from "src/assets/icons/logo.svg";
import OptionsIcon from "src/assets/icons/options.svg";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { services, products } from "./Solutions";

const Navbar = () => {
  const handleContactClick = () => {
    document?.querySelector("footer")?.scrollIntoView({ behavior: "smooth" });
  };

  const [isMediumScreen, setIsMediumScreen] = useState<boolean | null>(null);
  const isScreenWidthGreaterThan768px = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const [openOptions, setOpenOptions] = useState(false);
  const [openSolutionsPopup, setOpenSolutionsPopup] = useState(false);

  /*it may look like we are unnecessarily using a state variable and useEffect here, but this is done to counter the rehydration
   problem mentioned here: https://nextjs.org/docs/messages/react-hydration-error*/
  useEffect(() => {
    setIsMediumScreen(isScreenWidthGreaterThan768px);
  }, [isScreenWidthGreaterThan768px]);

  const handleSolutionLinkClick = () => {
    setOpenSolutionsPopup(false);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">
          <div className={styles.logo}>
            <Logo className={styles.svgLogo} />
          </div>
        </Link>
        <nav className={styles.actions}>
          {isMediumScreen && (
            <>
              <div
                onMouseEnter={() => setOpenSolutionsPopup(true)}
                onMouseLeave={() => setOpenSolutionsPopup(false)}
                className={styles.solutionsActionItem}
              >
                <h4>
                  <Link href="/solutions/hardware-and-embedded-security">
                    solutions
                  </Link>
                </h4>
                {openSolutionsPopup && (
                  <div className={styles.solutionsPopupMenu}>
                    <div className={styles.services}>
                      <h3>services</h3>
                      <ul>
                        {services.map((service) => (
                          <Link
                            onClick={handleSolutionLinkClick}
                            href={service.linkPath}
                          >
                            <li>{service.serviceName}</li>
                          </Link>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.products}>
                      <h3>products</h3>
                      <ul>
                        {products.map((product) => (
                          <Link
                            onClick={handleSolutionLinkClick}
                            target="_blank"
                            href={product.linkPath}
                          >
                            <li>{product.productName}</li>
                          </Link>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

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
            <div>
              <div
                onClick={() => setOpenOptions(true)}
                className={styles.optionsIcon}
              >
                <OptionsIcon />
              </div>

              <div
                onClick={() => setOpenOptions(false)}
                className={`${styles.optionsMenu} ${
                  openOptions && styles.open
                }`}
              >
                <div></div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
