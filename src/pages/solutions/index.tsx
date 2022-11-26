import SolutionsLayout from "src/components/SolutionsLayout";

const Solutions = () => {
  return <div>Main page Content</div>;
};

Solutions.getLayout = (page: React.ReactElement) => (
  <SolutionsLayout>{page}</SolutionsLayout>
);

export default Solutions;
