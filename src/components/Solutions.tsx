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

const ServiceItem = ({ label, Icon }: { label: string; Icon: any }) => {
  return (
    <div className={styles.serviceItemContainer}>
      <div className={styles.serviceItem}>
        <Icon />
      </div>
      <p className={styles.label}>{label}</p>
    </div>
  );
};

const ProductItem = ({ label, Icon }: { label: string; Icon: any }) => {
  return (
    <div className={styles.productItem}>
      <Icon />
      <p className={styles.label}>{label}</p>
    </div>
  );
};

interface ServiceType {
  id: number;
  serviceName: string;
  icon: React.ReactSVGElement;
}

const Services = () => {
  const productSecurityAssessments: Array<ServiceType> = [
    {
      id: 0,
      serviceName: "Hardware & Embedded System Security",
      icon: HardwareIcon,
    },
    {
      id: 1,
      serviceName: "Healthcare, IoMT and Medical Device Security",
      icon: DeviceIcon,
    },
    {
      id: 2,
      serviceName: "Web, Mobile & Cloud Security",
      icon: WebMobileCloudIcon,
    },
    {
      id: 3,
      serviceName: "Network Security",
      icon: NetworkIcon,
    },
  ];

  const nonProductSecurityServices: Array<ServiceType> = [
    {
      id: 1,
      serviceName: "Secure Architecture and Design Consulting",
      icon: ConsultingIcon,
    },
    {
      id: 2,
      serviceName: "GDPR, Privacy and Software Licensing",
      icon: GdprIcon,
    },
    {
      id: 3,
      serviceName: "Security Trainings",
      icon: TrainingIcon,
    },
    {
      id: 4,
      serviceName: "Virtual CISO Services for Products",
      icon: VirtualCisoIcon,
    },
  ];

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
            />
          ))}
        </div>
      </div>
      <div className={styles.nonPsServicesContainer}>
        <div className={styles.servicesItemsContainer}>
          {nonProductSecurityServices.map((service) => (
            <ServiceItem
              key={service.id}
              label={service.serviceName}
              Icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ProductType {
  id: number;
  productName: string;
  icon: React.ReactSVGElement;
}

const Products = () => {
  const products: Array<ProductType> = [
    {
      id: 0,
      productName: "Cloud Security (Gauntlet)",
      icon: CloudSecurityGauntletIcon,
    },
    {
      id: 1,
      productName: "Cloud Cost Optimization (Recon)",
      icon: CloudCostOptimizationIcon,
    },
    {
      id: 2,
      productName: "Medtech Vulnerability Scoring",
      icon: MedtechIcon,
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
          />
        ))}
      </div>
    </div>
  );
};

const Solutions = () => {
  return (
    <div>
      <Services />
      <Products />
    </div>
  );
};

export default Solutions;
