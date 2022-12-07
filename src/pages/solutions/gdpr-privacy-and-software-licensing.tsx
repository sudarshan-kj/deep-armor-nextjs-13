import signature from "src/assets/images/signature.jpg";
import SolutionItemLayout from "src/layouts/SolutionItemLayout";
import ServicesNavigationLayout from "src/layouts/ServicesNavigationLayout";

const GdprPrivacyAndSoftwareLicensing = () => {
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
        Elit pariatur do qui irure proident non deserunt ad culpa Lorem enim et
        consequat. Reprehenderit sint nisi commodo dolore nisi quis tempor
        veniam officia minim enim laboris esse excepteur. Ea nulla mollit dolore
        laboris incididunt laborum nostrud do ad Lorem anim pariatur anim.
        Aliquip pariatur aute non veniam duis cupidatat veniam labore laborum
        est ipsum commodo excepteur. Aute deserunt excepteur ut duis eiusmod
        deserunt ex elit deserunt ullamco voluptate cillum sint eiusmod. Irure
        sit occaecat sunt excepteur.
      </p>
    </div>
  );
};
GdprPrivacyAndSoftwareLicensing.getLayout = (page: React.ReactElement) => (
  <ServicesNavigationLayout>
    <SolutionItemLayout
      heading="GDPR, Privacy and Software Licensing"
      image={signature}
    >
      {page}
    </SolutionItemLayout>
  </ServicesNavigationLayout>
);

export default GdprPrivacyAndSoftwareLicensing;
