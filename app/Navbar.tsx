import styles from "./Navbar.module.scss";
import LogoPath from "/assets/logo.svg";

const Navbar = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <LogoPath className={styles.svgLogo} />
      </div>
      {/*TODO: Create hamburger for mobile devices*/}
      <div className={styles.actions}>
        <h4>solutions</h4>
        <h4>blog</h4>
        <h4>about us</h4>
        <h4 className={styles.contact}>contact</h4>
      </div>
    </header>
  );
};

export default Navbar;
