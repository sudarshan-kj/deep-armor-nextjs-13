import SolutionsLayout from "src/components/SolutionsLayout";

const GdprPrivacyAndSoftwareLicensing = () => {
  return <div>GDPR Privacy and Software Licensing</div>;
};
GdprPrivacyAndSoftwareLicensing.getLayout = (page: React.ReactElement) => (
  <SolutionsLayout>{page}</SolutionsLayout>
);

export default GdprPrivacyAndSoftwareLicensing;
