import ServicesNavigationLayout from "src/components/ServicesNavigationLayout";
import code from "src/assets/images/code.jpg";
import SolutionItemLayout from "src/components/SolutionItemLayout";

const SecureArchitectureAndDesignConsulting = () => {
  return (
    <div>
      <p>
        Nisi in magna ipsum est officia. Dolor sit proident mollit ut velit
        occaecat. Cupidatat deserunt cupidatat sunt labore nulla ex consectetur
        reprehenderit occaecat voluptate incididunt consequat ullamco do. Sit
        consequat nulla et dolore cupidatat dolore. Sit duis ut voluptate
        laboris.
      </p>
      <p>
        Culpa incididunt laboris sint ad in ut. Excepteur culpa sit occaecat
        fugiat. Ex aute est ea ad sit sit aliqua eiusmod tempor qui sit aute ut.
        Commodo excepteur eiusmod consequat eiusmod et ut. In et nisi veniam est
        cillum sit sit enim cupidatat. Adipisicing esse sit dolor tempor. Labore
        non cillum reprehenderit qui cupidatat laboris incididunt Lorem laboris
        elit nostrud quis.
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
