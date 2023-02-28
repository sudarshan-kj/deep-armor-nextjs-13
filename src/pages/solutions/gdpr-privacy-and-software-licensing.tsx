import signature from "src/assets/images/signature.jpg";
import SolutionItemLayout from "src/layouts/SolutionItemLayout";
import ServicesNavigationLayout from "src/layouts/ServicesNavigationLayout";
import ListItemWithTopMargin from "src/components/ListItemWithTopMargin/ListItemWithTopMargin";

const GdprPrivacyAndSoftwareLicensing = () => {
  const listItems = [
    "General Data Protection Regulation (GDPR) audits",
    "Drafting Terms & Conditions for hardware, software and services",
    "Drafting privacy policies",
    "Technical evaluations to meet compliance requirements for PCI-DSS,SOC, ISO 27001/27002 and so on",
    "Open Source Security & Privacy",
  ];

  return (
    <div>
      <p>
        Deep Armor’s extended team includes technology lawyers qualified for
        privacy and open source related services. Our offerings in this space
        include:
        <ol>
          {listItems.map((item) => (
            <ListItemWithTopMargin>{item}</ListItemWithTopMargin>
          ))}
        </ol>
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
