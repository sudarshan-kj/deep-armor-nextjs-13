import React from "react";
import styles from "./Solutions.module.scss";
import DeviceIcon from "src/assets/icons/device-security.svg";
import NetworkIcon from "src/assets/icons/network-security.svg";
import WebMobileCloudIcon from "src/assets/icons/web-mobile-cloud-security.svg";
import HardwareIcon from "src/assets/icons/hardware-security.svg";
import VirtualCisoIcon from "src/assets/icons/virtual-ciso.svg";
import TrainingIcon from "src/assets/icons/training.svg";
import GdprIcon from "src/assets/icons/gdpr.svg";
import ConsultingIcon from "src/assets/icons/consulting.svg";
import MedtechIcon from "src/assets/icons/medtech-vulnerability-calculator.svg";
import CloudCostOptimizationIcon from "src/assets/icons/cloud-cost-optimization-recon.svg";
import CloudSecurityGauntletIcon from "src/assets/icons/cloud-security-gauntlet.svg";
import Link from "next/link";

const ServiceItem = ({
  label,
  Icon,
  linkPath,
}: {
  label: string;
  Icon: any;
  linkPath: string;
}) => {
  return (
    <Link className={styles.serviceItemContainer} href={linkPath}>
      <div className={styles.serviceItem}>
        <Icon />
      </div>
      <p className={styles.label}>{label}</p>
    </Link>
  );
};

const ProductItem = ({
  label,
  Icon,
  linkPath,
}: {
  label: string;
  Icon: any;
  linkPath: string;
}) => {
  return (
    <Link target="_blank" href={linkPath} className={styles.productItem}>
      <Icon />
      <p className={styles.label}>{label}</p>
    </Link>
  );
};

interface ServiceType {
  id: number;
  serviceName: string;
  icon: React.ReactSVGElement;
  linkPath: string;
}

const productSecurityAssessments: Array<ServiceType> = [
  {
    id: 0,
    serviceName: "Hardware & Embedded System Security",
    icon: HardwareIcon,
    linkPath: "/solutions/hardware-and-embedded-security",
  },
  {
    id: 1,
    serviceName: "Healthcare, IoMT and Medical Device Security",
    icon: DeviceIcon,
    linkPath: "/solutions/healthcare-iomt-and-medical-device-security",
  },
  {
    id: 2,
    serviceName: "Web, Mobile & Cloud Security",
    icon: WebMobileCloudIcon,
    linkPath: "/solutions/web-mobile-and-cloud-security",
  },
  {
    id: 3,
    serviceName: "Network Security",
    icon: NetworkIcon,
    linkPath: "/solutions/network-security",
  },
];

const nonProductSecurityServices: Array<ServiceType> = [
  {
    id: 4,
    serviceName: "Secure Architecture and Design Consulting",
    icon: ConsultingIcon,
    linkPath: "/solutions/secure-architecture-and-design-consulting",
  },
  {
    id: 5,
    serviceName: "GDPR, Privacy and Software Licensing",
    icon: GdprIcon,
    linkPath: "/solutions/gdpr-privacy-and-software-licensing",
  },
  {
    id: 6,
    serviceName: "Security Trainings",
    icon: TrainingIcon,
    linkPath: "/solutions/security-trainings",
  },
  {
    id: 7,
    serviceName: "Virtual CISO Services for Products",
    icon: VirtualCisoIcon,
    linkPath: "/solutions/virtual-ciso-for-products",
  },
];

export const services = [
  ...productSecurityAssessments,
  ...nonProductSecurityServices,
];

const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <h2>Services</h2>
      <div className={styles.psAssessmentsContainer}>
        <h4 className={styles.heading}>Product Security Assessments</h4>
        <div className={styles.servicesItemsContainer}>
          {productSecurityAssessments.map((service) => (
            <ServiceItem
              key={service.id}
              label={service.serviceName}
              Icon={service.icon}
              linkPath={service.linkPath}
            />
          ))}
        </div>
      </div>
      <div className={styles.servicesItemsContainer}>
        {nonProductSecurityServices.map((service) => (
          <ServiceItem
            key={service.id}
            label={service.serviceName}
            Icon={service.icon}
            linkPath={service.linkPath}
          />
        ))}
      </div>
    </div>
  );
};

interface ProductType {
  id: number;
  productName: string;
  icon: React.ReactSVGElement;
  linkPath: string;
}

const Products = () => {
  const products: Array<ProductType> = [
    {
      id: 0,
      productName: "Cloud Security (Gauntlet)",
      icon: CloudSecurityGauntletIcon,
      linkPath: "https://deeparmor.com/",
    },
    {
      id: 1,
      productName: "Cloud Cost Optimization (Recon)",
      icon: CloudCostOptimizationIcon,
      linkPath: "https://deeparmor.com/",
    },
    {
      id: 2,
      productName: "Medtech Vulnerability Scoring",
      icon: MedtechIcon,
      linkPath: "https://deeparmor.com/",
    },
  ];
  return (
    <div className={styles.productsContainer}>
      <h2>Products</h2>
      <div className={styles.productsItemsContainer}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            label={product.productName}
            Icon={product.icon}
            linkPath={product.linkPath}
          />
        ))}
      </div>
    </div>
  );
};

const Solutions = () => {
  return (
    <div className={styles.solutionsContainer}>
      <Services />
      <Products />
    </div>
  );
};

export default Solutions;
