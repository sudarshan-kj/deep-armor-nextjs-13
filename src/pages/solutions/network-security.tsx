import SolutionsLayout from "src/components/SolutionsLayout";

const NetworkSecurity = () => {
  return <div>Network Security</div>;
};

NetworkSecurity.getLayout = (page: React.ReactElement) => (
  <SolutionsLayout>{page}</SolutionsLayout>
);

export default NetworkSecurity;
