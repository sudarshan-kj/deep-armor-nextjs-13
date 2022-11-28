import Image from "next/image";
import styles from "./SolutionItem.module.scss";

interface ISolutionItemLayout {
  heading: string;
  image: any;
  children: React.ReactNode;
}

const SolutionItemLayout = ({
  heading,
  image,
  children,
}: ISolutionItemLayout) => {
  return (
    <div className={styles.container}>
      <div className={styles.headingAndImageStickyContainer}>
        <div className={styles.headingAndImageContainer}>
          <section className={styles.headingContainer}>
            <h2>{heading}</h2>
          </section>
          <section className={styles.image}>
            <Image src={image} fill={true} alt={image?.toString()} />
            <div className={styles.mask} />
          </section>
        </div>
        <div className={styles.dummyBox} />
      </div>
      <div className={styles.textContent}>{children}</div>
    </div>
  );
};

export default SolutionItemLayout;
