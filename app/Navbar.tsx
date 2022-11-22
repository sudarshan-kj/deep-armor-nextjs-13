import styles from "./Navbar.module.scss";
import LogoPath from "/assets/logo.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className={styles.container}>
      <Link href="/">
        <div className={styles.logo}>
          <LogoPath className={styles.svgLogo} />
        </div>
      </Link>
      {/*TODO: Create hamburger for mobile devices*/}
      <div className={styles.actions}>
        <Link href="/solutions">
          <h4>solutions</h4>
        </Link>
        <Link href="/blog">
          <h4>blog</h4>
        </Link>
        <Link href="/about-us">
          <h4>about us</h4>
        </Link>
        <h4 className={styles.contact}>contact</h4>
      </div>
    </header>
  );
};

export default Navbar;
