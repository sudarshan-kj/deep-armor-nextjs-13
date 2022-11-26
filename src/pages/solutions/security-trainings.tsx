import SolutionsLayout from "src/components/SolutionsLayout";

const SecurityTrainings = () => {
  return <div>Security Trainings</div>;
};

SecurityTrainings.getLayout = (page: React.ReactElement) => (
  <SolutionsLayout>{page}</SolutionsLayout>
);

export default SecurityTrainings;
