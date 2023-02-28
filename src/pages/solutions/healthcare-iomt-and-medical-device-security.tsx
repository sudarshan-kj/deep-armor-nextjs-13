import ServicesNavigationLayout from "src/layouts/ServicesNavigationLayout";
import healthcare from "src/assets/images/healthcare.jpg";
import SolutionItemLayout from "src/layouts/SolutionItemLayout";

const HealthcareIomtAndMedicalDeviceSecurity = () => {
  return (
    <div>
      <p>
        Healthcare products (Internet of Medical Things) are governed by
        regulatory requirements to ensure that the hardware and software adopt a
        defense-in-depth approach and are adequately secured by the
        manufacturer. In the United States, the Food & Drug Administration (US
        FDA) has clearly defined{" "}
        <a
          style={{ color: "#0087b2" }}
          target="_blank"
          rel="noreferrer"
          href="https://www.fda.gov/medical-devices/digital-health-center-excellence/cybersecurity"
        >
          cybersecurity guidelines
        </a>
        to be followed by manufacturers and documentation to be included as part
        of their 510(k) submission. Similarly, the CE Mark for healthcare
        products sold in Europe requires cybersecurity evaluations to be in
        compliance with the MDCG 2021-6 guidelines.
      </p>
      <p>
        For the 510(k) Premarket Cybersecurity Readiness, the FDA recommends to
        include the following documents:
        <ul>
          <li>Threat models</li>
          <li>Cybersecurity risk assessment report</li>
          <li>Security testing/assessment reports</li>
          <li>
            Proofs of vulnerability assessment for third-party software (if any)
          </li>
          <li>Plan for continuing cybersecurity support</li>
        </ul>
      </p>
      <p>
        Deep Armor has played a key role in securing the FDA 510(k)
        cybersecurity approval for several medical devices. We can help you in
        completing all the essential technical activities (threat modeling,
        vulnerability assessments, penetration testing and red-teaming),
        preparing supporting documentation, and assisting with clarifications if
        the FDA requires more proofs/information. Our services will help you
        complete the 510(k) Premarket Cybersecurity Readiness with minimal
        effort from your side.
      </p>
      <p>
        If you have a product that is required to go through the FDA or CE Mark
        security certifications, talk to us. We will help you understand the
        process using our templates. We can then work with you on a stepwise
        plan to execute all technical activities and prepare documents for the
        certification process.
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
