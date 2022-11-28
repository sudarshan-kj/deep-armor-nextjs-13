import SolutionsLayout from "src/components/SolutionsLayout";
import training from "src/assets/images/training.jpg";
import SolutionItemLayout from "src/components/SolutionItemLayout";

const SecurityTrainings = () => {
  return (
    <SolutionItemLayout heading="Security Trainings" image={training}>
      <p>
        Culpa incididunt laboris sint ad in ut. Excepteur culpa sit occaecat
        fugiat. Ex aute est ea ad sit sit aliqua eiusmod tempor qui sit aute ut.
        Commodo excepteur eiusmod consequat eiusmod et ut. In et nisi veniam est
        cillum sit sit enim cupidatat. Adipisicing esse sit dolor tempor. Labore
        non cillum reprehenderit qui cupidatat laboris incididunt Lorem laboris
        elit nostrud quis.
      </p>
      <p>
        Aute aliqua consequat occaecat aute ex ullamco cillum fugiat ut cillum.
        Sit reprehenderit occaecat voluptate qui culpa consectetur commodo
        veniam ipsum veniam sint. Officia aliquip aliqua incididunt nostrud aute
        irure id reprehenderit deserunt amet cillum. Deserunt dolore duis minim
        est id. Ex nisi do officia proident voluptate.
      </p>
    </SolutionItemLayout>
  );
};

SecurityTrainings.getLayout = (page: React.ReactElement) => (
  <SolutionsLayout>{page}</SolutionsLayout>
);

export default SecurityTrainings;
