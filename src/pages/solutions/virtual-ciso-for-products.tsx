import SolutionsLayout from "src/components/SolutionsLayout";

const VirtualCisoForProducts = () => {
  return <div>VirtualCisoForProducts</div>;
};

VirtualCisoForProducts.getLayout = (page: React.ReactElement) => (
  <SolutionsLayout>{page}</SolutionsLayout>
);

export default VirtualCisoForProducts;
