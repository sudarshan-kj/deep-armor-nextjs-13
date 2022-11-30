import AboutUsNavigationLayout from "src/components/AboutUsNavigationLayout";
import AboutUsItemLayout from "src/components/AboutUsItemLayout";

const Press = () => {
  return <div>Press</div>;
};

Press.getLayout = (page: React.ReactElement) => (
  <AboutUsNavigationLayout>
    <AboutUsItemLayout header="Press">{page}</AboutUsItemLayout>
  </AboutUsNavigationLayout>
);

export default Press;
