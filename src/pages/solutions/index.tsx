import { useRouter } from "next/router";
import { useEffect } from "react";
import ServicesNavigationLayout from "src/layouts/ServicesNavigationLayout";
import { services } from "src/components/Solutions";

const Solutions = () => {
  const router = useRouter();
  useEffect(() => {
    router.push(services[0].linkPath);
  });
};

Solutions.getLayout = (page: React.ReactElement) => (
  <ServicesNavigationLayout>{page}</ServicesNavigationLayout>
);

export default Solutions;
