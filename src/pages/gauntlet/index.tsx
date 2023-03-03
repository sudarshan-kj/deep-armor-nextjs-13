import React from "react";
import SecurityThreatSection from "src/components/gauntlet/sections/CloudMisconfigurationSection/CloudMisconfigurationSection";
import SkewedRectangle from "src/components/gauntlet/skewedRectangle/SkewedRectangle";
import SkewedRectangleContent from "src/components/gauntlet/skewedRectangleContent/SkewedRectangleContent";
import SectionBreak from "src/components/gauntlet/sectionbreak/SectionBreak";
import WhyGauntlet from "src/components/gauntlet/sections/WhyGauntletSection/WhyGauntlet";
import RoleOfGauntletSection from "src/components/gauntlet/sections/RoleOfGauntletSection/RoleOfGauntletSection";
import SharedResponsiblitySection from "src/components/gauntlet/sections/SharedResponsibilitySection/SharedResponsibilitySection";

const GauntletPage = () => {
  return (
    <>
      <SkewedRectangle>
        <SkewedRectangleContent />
      </SkewedRectangle>
      <SecurityThreatSection />
      <SectionBreak />
      <WhyGauntlet />
      <SectionBreak />
      <RoleOfGauntletSection />
      <SectionBreak />
      <SharedResponsiblitySection />
    </>
  );
};

GauntletPage.isGauntletPage = true;

export default GauntletPage;
