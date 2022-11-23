import styles from "./Navbar.module.scss";
import LogoPath from "src/assets/icons/logo.svg";
import Link from "next/link";

const Navbar = () => {
  const handleContactClick = () => {
    document?.querySelector("footer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={styles.container}>
      <Link href="/">
        <div className={styles.logo}>
          <LogoPath className={styles.svgLogo} />
        </div>
      </Link>
      {/*TODO: Create hamburger for mobile devices*/}
      <nav className={styles.actions}>
        <h4>
          <Link href="/solutions">solutions</Link>
        </h4>
        <h4>
          <Link href="/blog">blog</Link>
        </h4>
        <h4>
          <Link href="/about-us">about us</Link>
        </h4>
        <h4 className={styles.contact} onClick={handleContactClick}>
          contact
        </h4>
      </nav>
    </header>
  );
};

export default Navbar;
