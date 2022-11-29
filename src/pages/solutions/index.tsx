import { useRouter } from "next/router";
import { useEffect } from "react";
import SolutionsLayout from "src/components/SolutionsLayout";
import { services } from "src/components/Solutions";

const Solutions = () => {
  const router = useRouter();
  useEffect(() => {
    router.push(services[0].linkPath);
  });
};

Solutions.getLayout = (page: React.ReactElement) => (
  <SolutionsLayout>{page}</SolutionsLayout>
);

export default Solutions;
