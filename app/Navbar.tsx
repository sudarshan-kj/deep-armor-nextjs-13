import styles from "./Navbar.module.scss";
import LogoPath from "/assets/logo.svg";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <LogoPath className={styles.svgLogo} />
      </div>
      <div className={styles.actions}></div>
    </div>
  );
};

export default Navbar;
