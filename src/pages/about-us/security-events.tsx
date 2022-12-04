import AboutUsNavigationLayout from "src/layouts/AboutUsNavigationLayout";
import AboutUsItemLayout from "src/layouts/AboutUsItemLayout";

const SecurityEvents = () => {
  return <div>Security Events</div>;
};

SecurityEvents.getLayout = (page: React.ReactElement) => (
  <AboutUsNavigationLayout>
    <AboutUsItemLayout header="Security Events">{page}</AboutUsItemLayout>
  </AboutUsNavigationLayout>
);

export default SecurityEvents;
