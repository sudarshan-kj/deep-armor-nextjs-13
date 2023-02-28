import ServicesNavigationLayout from "src/layouts/ServicesNavigationLayout";
import hardware from "src/assets/images/hardware.jpg";
import SolutionItemLayout from "src/layouts/SolutionItemLayout";

const HardWareAndEmbeddedSecurity = () => {
  return (
    <div>
      <p>
        Securing IoT products is hard for a multitude of reasons. They are often
        built with a bag of parts, each sourced from a different vendor and with
        varying assurances of security quality. Standards and best practices are
        few -- when everything from a pacemaker to a traffic light can be
        considered as an “IoT” product, it is difficult to establish an
        overarching set of security best practices.
      </p>
      <p>
        Deep Armor takes a holistic approach to IoT product security. We ensure
        that the individual building blocks (device, mobile, cloud/web and
        wireless protocols) as well as the integration touchpoints are
        thoroughly evaluated. For example, on the hardware/firmware side, this
        may mean the validation of hardware-backed secure boot, secure FOTA, key
        management, physical port access, and so on. Application security and
        cloud infrastructure security play an equally important role in IoT
        security. A one-size fits all approach never works for IoT solutions.
        Our methodologies lay emphasis on understanding your product
        architecture & implementation thoroughly, prioritizing business logic
        attacks, and creating customized security validation plans that cover
        common threats as well as specific use cases.
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
