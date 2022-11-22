import React from "react";
import styles from "./Solutions.module.scss";
import DeviceSecurity from "/assets/icons/device-security.svg";
import NetworkSecurity from "/assets/icons/network-security.svg";
import WebMobielCloudSecurity from "/assets/icons/web-mobile-cloud-security.svg";
import HardwareSecurity from "/assets/icons/hardware-security.svg";

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

const Services = () => {
  const services = [
    {
      id: 0,
      serviceName: "Hardware & Embedded System Security",
      icon: HardwareSecurity,
    },
    {
      id: 1,
      serviceName: "Healthcare, IoMT & Medical Device Security",
      icon: DeviceSecurity,
    },
    {
      id: 2,
      serviceName: "Web, Mobile & Cloud Security",
      icon: WebMobielCloudSecurity,
    },
    {
      id: 3,
      serviceName: "Network Security",
      icon: NetworkSecurity,
    },
  ];

  return (
    <div className={styles.servicesContainer}>
      <h2>Services</h2>
      <div className={styles.psAssessmentsContainer}>
        <h4 className={styles.heading}>Product Security Assessments</h4>
        <div className={styles.servicesItemsContainer}>
          {services.map((service) => (
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
