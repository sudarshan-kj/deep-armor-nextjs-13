import ServicesNavigationLayout from "src/components/ServicesNavigationLayout";
import hardware from "src/assets/images/hardware.jpg";
import SolutionItemLayout from "src/components/SolutionItemLayout";

const HardWareAndEmbeddedSecurity = () => {
  return (
    <div>
      <p>
        Ex eiusmod in et velit do ad ex culpa consectetur eu id minim ea.
        Incididunt consequat aliquip irure amet occaecat magna labore
        adipisicing. Ipsum duis aute labore laboris enim nulla aute Lorem velit
        Lorem. Ullamco enim irure anim adipisicing incididunt aute irure commodo
        qui sunt irure. Eu duis labore dolore qui cupidatat nostrud sint ad
        adipisicing eu.
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

HardWareAndEmbeddedSecurity.getLayout = (page: React.ReactElement) => (
  <ServicesNavigationLayout>
    <SolutionItemLayout
      heading="Hardware and Embedded System Security"
      image={hardware}
    >
      {page}
    </SolutionItemLayout>
  </ServicesNavigationLayout>
);

export default HardWareAndEmbeddedSecurity;
