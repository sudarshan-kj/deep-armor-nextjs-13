import AboutUsNavigationLayout from "src/layouts/AboutUsNavigationLayout";
import AboutUsItemLayout from "src/layouts/AboutUsItemLayout";

const Press = () => {
  return <div>Press</div>;
};

Press.getLayout = (page: React.ReactElement) => (
  <AboutUsNavigationLayout>
    <AboutUsItemLayout header="Press">{page}</AboutUsItemLayout>
  </AboutUsNavigationLayout>
);

export default Press;
