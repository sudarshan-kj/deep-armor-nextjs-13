import AboutUsItemLayout from "src/components/AboutUsItemLayout";
import AboutUsNavigationLayout from "src/components/AboutUsNavigationLayout";

const Leadership = () => {
  return <div>Leadership cards to come here</div>;
};

Leadership.getLayout = (page: React.ReactElement) => (
  <AboutUsNavigationLayout>
    <AboutUsItemLayout header="Leadership">{page}</AboutUsItemLayout>
  </AboutUsNavigationLayout>
);

export default Leadership;
