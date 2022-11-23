import React from "react";
import styles from "./Solutions.module.scss";
import DeviceIcon from "/assets/icons/device-security.svg";
import NetworkIcon from "/assets/icons/network-security.svg";
import WebMobileCloudIcon from "/assets/icons/web-mobile-cloud-security.svg";
import HardwareIcon from "/assets/icons/hardware-security.svg";
import VirtualCisoIcon from "/assets/icons/virtual-ciso.svg";
import TrainingIcon from "/assets/icons/training.svg";
import GdprIcon from "/assets/icons/gdpr.svg";
import ConsultingIcon from "/assets/icons/consulting.svg";

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

const Products = () => {
  return <div>Products</div>;
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
