import ServicesNavigationLayout from "src/layouts/ServicesNavigationLayout";
import code from "src/assets/images/code.jpg";
import SolutionItemLayout from "src/layouts/SolutionItemLayout";

const SecureArchitectureAndDesignConsulting = () => {
  return (
    <div>
      <p>
        We can help you build highly secure and resilient systems from the
        ground up.
      </p>
      <p>
        Incorporating cybersecurity activities early in the product development
        life cycle (Security Shift-left, in other words) can significantly
        reduce the cost of handling vulnerabilities post-production. Our product
        security architecture and design consulting services help in identifying
        security objectives and threats even before your product is fully
        implemented.
      </p>
      <p>
        At this stage of the product life cycle, we use your product
        architecture & design specifications documents, data flow diagrams, etc.
        to derive Key Security Attributes (KSA) -- Assets, Trust Boundaries,
        Adversary Profiles, Security objectives and security non-objectives for
        the product. This information, combined with our comprehensive threat
        models can help architects, developers and QA teams to build
        high-quality, secure products.
      </p>
    </div>
  );
};

SecureArchitectureAndDesignConsulting.getLayout = (
  page: React.ReactElement
) => (
  <ServicesNavigationLayout>
    <SolutionItemLayout
      heading="Secure Architecture and Design Consulting"
      image={code}
    >
      {page}
    </SolutionItemLayout>
  </ServicesNavigationLayout>
);

export default SecureArchitectureAndDesignConsulting;
