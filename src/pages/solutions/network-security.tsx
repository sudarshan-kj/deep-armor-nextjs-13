import ServicesNavigationLayout from "src/layouts/ServicesNavigationLayout";
import network from "src/assets/images/network.jpg";
import SolutionItemLayout from "src/layouts/SolutionItemLayout";

const NetworkSecurity = () => {
  return (
    <div>
      <p>
        Culpa incididunt laboris sint ad in ut. Excepteur culpa sit occaecat
        fugiat. Ex aute est ea ad sit sit aliqua eiusmod tempor qui sit aute ut.
        Commodo excepteur eiusmod consequat eiusmod et ut. In et nisi veniam est
        cillum sit sit enim cupidatat. Adipisicing esse sit dolor tempor. Labore
        non cillum reprehenderit qui cupidatat laboris incididunt Lorem laboris
        elit nostrud quis.
      </p>
      <p>
        Cupidatat aliquip officia Lorem ea proident occaecat culpa. Voluptate
        laborum occaecat laborum officia. Ex cupidatat sint incididunt velit
        exercitation pariatur nulla aliquip magna do anim sit commodo consequat.
        Exercitation elit anim nostrud sunt ipsum nisi reprehenderit fugiat in
        ad exercitation.
      </p>
    </div>
  );
};

NetworkSecurity.getLayout = (page: React.ReactElement) => (
  <ServicesNavigationLayout>
    <SolutionItemLayout heading="Network Security" image={network}>
      {page}
    </SolutionItemLayout>
  </ServicesNavigationLayout>
);

export default NetworkSecurity;
