import React from "react";
import SideNavigationLayout from "./SideNavigationLayout";
import { aboutUsItems } from "src/pages/about-us";

const AboutUsNavigationLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <SideNavigationLayout header="About Us" items={aboutUsItems}>
      {children}
    </SideNavigationLayout>
  );
};

export default AboutUsNavigationLayout;
