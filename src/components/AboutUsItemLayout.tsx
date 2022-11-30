import styles from "./AboutUsItemLayout.module.scss";

const AboutUsItemLayout = ({
  children,
  header,
}: {
  children: React.ReactNode;
  header: string;
}) => {
  return (
    <div className={styles.container}>
      <h2>{header}</h2>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default AboutUsItemLayout;
