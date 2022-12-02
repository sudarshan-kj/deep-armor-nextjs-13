import AboutUsItemLayout from "src/components/AboutUsItemLayout";
import AboutUsNavigationLayout from "src/components/AboutUsNavigationLayout";
import styles from "src/styles/pages/AboutUs.module.scss";
import LeaderCard from "src/components/aboutUs/LeaderCard";
import hardware from "src/assets/images/hardware.jpg";

const Leadership = () => {
  return (
    <div className={styles.leadershipContainer}>
      <LeaderCard
        thumbnail={hardware}
        name="Sumanth"
        designation="CEO"
        linkedinLink="https://www.deeparmor.com"
        description="This is a description"
      />
    </div>
  );
};

Leadership.getLayout = (page: React.ReactElement) => (
  <AboutUsNavigationLayout>
    <AboutUsItemLayout header="Leadership">{page}</AboutUsItemLayout>
  </AboutUsNavigationLayout>
);

export default Leadership;
