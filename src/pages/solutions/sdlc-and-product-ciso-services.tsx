import ServicesNavigationLayout from "src/layouts/ServicesNavigationLayout";
import ciso from "src/assets/images/ciso.jpg";
import SolutionItemLayout from "src/layouts/SolutionItemLayout";

const SDLCAndProductCisoServices = () => {
  return (
    <div>
      <p>
        Many of our customers prefer to devote their time, energy and finances
        towards building a product. They may not have the need or budget for
        internal security teams or the right kind of subject matter experts for
        a particular product. Deep Armor offers Product CISO service to plan
        strategic security programs for your solutions, identify security
        activities that should be executed at each stage of the product life
        cycle, execute these activities and help ensure that you ship high
        quality, secure products.
      </p>
      <p>
        Deep Armor’s world-class end-to-end Security & Privacy Development Life
        Cycle (SDLC) defines activities that are woven into the product
        development life cycle. This includes architecture, secure design,
        threat modeling, vulnerability assessment/penetration testing (VAPT),
        incident response planning, DevSecOps and Continuous Security for CI/CD.
      </p>
      <p>
        At each program milestone, we ensure that the required security tasks
        are completed. When the product is ready to ship, it is also secure
        without the need for a separate security assessment activity.
      </p>
    </div>
  );
};

SDLCAndProductCisoServices.getLayout = (page: React.ReactElement) => (
  <ServicesNavigationLayout>
    <SolutionItemLayout heading="SDLC and Product CISO Services" image={ciso}>
      {page}
    </SolutionItemLayout>
  </ServicesNavigationLayout>
);

export default SDLCAndProductCisoServices;
