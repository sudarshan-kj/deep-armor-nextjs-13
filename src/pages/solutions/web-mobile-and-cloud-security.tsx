import SolutionsLayout from "src/components/SolutionsLayout";

const WebMobileAndCloudSecurity = () => {
  return <div>Web Mobile And Cloud Security</div>;
};

WebMobileAndCloudSecurity.getLayout = (page: React.ReactElement) => (
  <SolutionsLayout>{page}</SolutionsLayout>
);

export default WebMobileAndCloudSecurity;
