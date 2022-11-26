import SolutionsLayout from "src/components/SolutionsLayout";

const HardWareAndEmbeddedSecurity = () => {
  return <div style={{ height: "2000px" }}>Hardware and Embedded Security</div>;
};

HardWareAndEmbeddedSecurity.getLayout = (page: React.ReactElement) => (
  <SolutionsLayout>{page}</SolutionsLayout>
);

export default HardWareAndEmbeddedSecurity;
