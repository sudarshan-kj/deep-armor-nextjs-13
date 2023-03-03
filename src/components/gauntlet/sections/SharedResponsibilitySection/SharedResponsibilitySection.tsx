import React from "react";
import handleViewport from "react-in-viewport";
import HeadingWithIcon from "src/components/gauntlet/headingWithIconAndContent/HeadingWithIconAndContent";
import styles from "./SharedResponsibilitySection.module.scss";
import customerIcon from "src/assets/icons/customer-icon.svg";
import cspIcon from "src/assets/icons/csp.svg";

const SharedResponsibilitySection = ({ forwardedRef, inViewport }: any) => {
  return (
    <div
      ref={forwardedRef}
      className={`${styles.container} ${inViewport && styles.drop} `}
    >
      <h1>Cloud Security is Shared Responsibility</h1>
      <div className={styles.contentBox}>
        <div className={styles.comparisonBox}>
          <HeadingWithIcon
            icon={customerIcon}
            heading="Customer"
            description={
              <p>
                Responsible for security <span>in</span> the cloud
              </p>
            }
          />

          <div className={styles.verticalSeparator} />
          <HeadingWithIcon
            icon={cspIcon}
            heading="Cloud Service Provider"
            description={
              <p>
                Responsible for security <span>of</span> the cloud
              </p>
            }
          />
        </div>
        <h4>
          You cannot solely rely on your Cloud Service Provider to secure your
          environment
        </h4>
      </div>
    </div>
  );
};

export default handleViewport(SharedResponsibilitySection);
