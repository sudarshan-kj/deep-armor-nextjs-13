import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.scss";
import Logo from "src/assets/icons/logo.svg";
import OptionsIcon from "src/assets/icons/options.svg";
import CloseIcon from "src/assets/icons/close.svg";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { services, products } from "src/components/main/Solutions";

const Navbar = () => {
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

  useEffect(() => {
    //prevent the body scrolling when the pop up is open
    if (openOptions) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [openOptions]);

  const handleSolutionLinkClick = () => {
    setOpenSolutionsPopup(false);
    setOpenOptions(false);
  };

  const handleContactClick = () => {
    document?.querySelector("footer")?.scrollIntoView({ behavior: "smooth" });
    setOpenOptions(false);
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
                onMouseEnter={() => {
                  if (!window.matchMedia("(hover: none)").matches) {
                    setOpenSolutionsPopup(true);
                  }
                }}
                onMouseLeave={() => setOpenSolutionsPopup(false)}
                className={styles.solutionsActionItem}
              >
                <h4>
                  <Link href="/solutions">solutions</Link>
                </h4>
                {openSolutionsPopup && (
                  <div className={styles.solutionsPopupMenu}>
                    <div className={styles.services}>
                      <h3>services</h3>
                      <ul>
                        {services.map((service) => (
                          <Link
                            key={service.id}
                            onClick={handleSolutionLinkClick}
                            href={service.linkPath}
                          >
                            <li>{service.name}</li>
                          </Link>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.products}>
                      <h3>products</h3>
                      <ul>
                        {products.map((product) => (
                          <Link
                            key={product.id}
                            onClick={handleSolutionLinkClick}
                            target="_blank"
                            href={product.linkPath}
                            rel="noreferrer"
                          >
                            <li>{product.name}</li>
                          </Link>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <h4>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href="https://medium.com/deep-armor"
                >
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
                onClick={() => setOpenOptions((p) => !p)}
                className={styles.optionsIcon}
              >
                {!openOptions ? <OptionsIcon /> : <CloseIcon />}
              </div>

              <div
                className={`${styles.optionsMenu} ${
                  openOptions && styles.openOptions
                }`}
              >
                <h1>
                  <Link onClick={handleSolutionLinkClick} href="/solutions">
                    solutions
                  </Link>
                </h1>
                <h1>
                  <Link
                    onClick={handleSolutionLinkClick}
                    target="_blank"
                    href="https://medium.com/deep-armor"
                    rel="noreferrer"
                  >
                    blog
                  </Link>
                </h1>
                <h1>
                  <Link onClick={handleSolutionLinkClick} href="/about-us">
                    about us
                  </Link>
                </h1>
                <h1 onClick={handleContactClick}>contact us</h1>
              </div>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
