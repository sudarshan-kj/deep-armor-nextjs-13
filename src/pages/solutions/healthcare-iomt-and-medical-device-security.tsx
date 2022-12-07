import ServicesNavigationLayout from "src/layouts/ServicesNavigationLayout";
import healthcare from "src/assets/images/healthcare.jpg";
import SolutionItemLayout from "src/layouts/SolutionItemLayout";

const HealthcareIomtAndMedicalDeviceSecurity = () => {
  return (
    <div>
      <p>
        Ullamco aliquip elit excepteur amet. Mollit cupidatat id excepteur esse
        ad sint nostrud cillum mollit cupidatat enim officia. Dolore nulla
        laborum id non cillum dolore in magna. Enim reprehenderit anim
        adipisicing pariatur dolor. Consequat nulla incididunt Lorem commodo
        cupidatat commodo est veniam ullamco irure cillum mollit ad deserunt.
        Culpa culpa fugiat tempor voluptate Lorem commodo commodo tempor ullamco
        aute eiusmod. Ullamco sit irure officia duis Lorem ex laborum amet enim
        velit.
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

HealthcareIomtAndMedicalDeviceSecurity.getLayout = (
  page: React.ReactElement
) => (
  <ServicesNavigationLayout>
    <SolutionItemLayout
      heading="Healthcare, IoMT and Medical Device Security"
      image={healthcare}
    >
      {page}
    </SolutionItemLayout>
  </ServicesNavigationLayout>
);

export default HealthcareIomtAndMedicalDeviceSecurity;
