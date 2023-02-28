import ServicesNavigationLayout from "src/layouts/ServicesNavigationLayout";
import network from "src/assets/images/network.jpg";
import SolutionItemLayout from "src/layouts/SolutionItemLayout";

const NetworkSecurity = () => {
  return (
    <div>
      <p>
        Deep Armor has worked extensively on securing network software and
        applications. As a long term partner for Cisco, we have played a
        strategic role in improving the security of Cisco’s products. Our work
        on data center and cloud networking switches helped in reducing a large
        number of vulnerabilities in Cisco’s core components and
        third-party/open source software. We developed new security automation
        capabilities that helped in continuous monitoring for vulnerability
        regressions.
      </p>
      <p>
        If you develop networking equipment, software and applications, we can
        help you with deep-tech penetration testing, fuzzing (protocol and
        binary) and threat modeling for your solutions. Via red-teaming
        activities, we can help in scanning for externally-exposed
        vulnerabilities, open ports/services, and vulnerabilities that can be
        exploited to breach VPN controls.
      </p>
    </div>
  );
};

NetworkSecurity.getLayout = (page: React.ReactElement) => (
  <ServicesNavigationLayout>
    <SolutionItemLayout
      heading="Network & Telecommunications Security"
      image={network}
    >
      {page}
    </SolutionItemLayout>
  </ServicesNavigationLayout>
);

export default NetworkSecurity;
