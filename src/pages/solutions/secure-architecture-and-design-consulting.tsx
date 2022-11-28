import SolutionsLayout from "src/components/SolutionsLayout";
import code from "src/assets/images/code.jpg";
import SolutionItemLayout from "src/components/SolutionItemLayout";

const SecureArchitectureAndDesignConsulting = () => {
  return (
    <SolutionItemLayout
      heading="Secure Architecture and Design Consulting"
      image={code}
    >
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
    </SolutionItemLayout>
  );
};

SecureArchitectureAndDesignConsulting.getLayout = (
  page: React.ReactElement
) => <SolutionsLayout>{page}</SolutionsLayout>;

export default SecureArchitectureAndDesignConsulting;
