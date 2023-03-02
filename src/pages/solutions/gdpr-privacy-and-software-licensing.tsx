import signature from "src/assets/images/signature.jpg";
import SolutionItemLayout from "src/layouts/SolutionItemLayout";
import ServicesNavigationLayout from "src/layouts/ServicesNavigationLayout";
import ListItemWithTopMargin from "src/components/ListItemWithTopMargin/ListItemWithTopMargin";

const listItems = [
  "General Data Protection Regulation (GDPR) audits",
  "Drafting Terms & Conditions for hardware, software and services",
  "Drafting privacy policies",
  "Technical evaluations to meet compliance requirements for PCI-DSS,SOC, ISO 27001/27002 and so on",
  "Open Source Security & Privacy",
];

const GdprPrivacyAndSoftwareLicensing = () => {
  return (
    <div>
      <p>
        Deep Armor’s extended team includes technology lawyers qualified for
        privacy and open source related services. Our offerings in this space
        include:
        <ol>
          {listItems.map((item, index) => (
            <ListItemWithTopMargin key={index}>{item}</ListItemWithTopMargin>
          ))}
        </ol>
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
