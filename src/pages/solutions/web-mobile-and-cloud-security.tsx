import ServicesNavigationLayout from "src/layouts/ServicesNavigationLayout";
import mobile from "src/assets/images/mobile.jpg";
import SolutionItemLayout from "src/layouts/SolutionItemLayout";
import Link from "next/link";

const WebMobileAndCloudSecurity = () => {
  return (
    <div>
      <p>
        Deep Armor’s cloud and web application security assessments ensure
        complete coverage of the three common building blocks: (1) Web
        Applications (portals, consoles, pages); (2) APIs, and (3) Cloud
        Infrastructure
      </p>
      <p>
        Deep Armor’s extensive security assessment templates for mobile and web
        applications using the comprehensive OWASP Security Testing Guides, the
        NIST Cybersecurity framework, and from our own experience performing
        vulnerability assessment of applications and reviewing CWEs. Also, we
        enhance these templates to derive project-specific vulnerability vectors
        for execution.
      </p>
      <p>
        Cloud-based web applications and SaaS solutions proliferate the market
        today. While they offer great convenience in terms of rapid prototyping
        and deployment, it is important to understand that{" "}
        <b>
          <u>Cloud Security is Shared Responsibility.</u>
        </b>{" "}
        While the cloud service provider (for example, AWS, GCP or Azure)
        provides assurance for the security of the core services and
        infrastructure, it is{" "}
        <b>
          <u>your responsibility</u>
        </b>{" "}
        to ensure the security of your applications, APIs, user authentication &
        authorization, configurations and controls. Per the study by IBM
        Security Research and the Ponemon Institute in 2022,{" "}
        <b>
          <i>
            “Nearly half, or 43%, of organizations had not started or were in
            early stages of applying practices to secure their cloud
            environments”
          </i>
        </b>
        . Cloud misconfigurations continue to be one of the primary sources of
        cyberattacks for all businesses - large and small.
      </p>
      <p>
        Many security compliance frameworks require your web applications, APIs
        and cloud environment to be continuously monitored for security threats.
        Deep Armor’s Gauntlet can help you achieve that for your cloud
        environments, particularly for SOC2, PCI DSS, CIS, GDPR, HIPAA, AWS Well
        Architected Framework and ISO 27001. For more details on Gauntlet, visit{" "}
        <a
          style={{ color: "#0087b2" }}
          href="/gauntlet"
          target="_blank"
          rel="noreferrer"
        >
          www.deeparmor.com/gauntlet
        </a>
      </p>
      <p>
        We can help you achieve a high security bar for your mobile
        applications.
      </p>
    </div>
  );
};

WebMobileAndCloudSecurity.getLayout = (page: React.ReactElement) => (
  <ServicesNavigationLayout>
    <SolutionItemLayout heading="Web, mobile and Cloud Security" image={mobile}>
      {page}
    </SolutionItemLayout>
  </ServicesNavigationLayout>
);

export default WebMobileAndCloudSecurity;
