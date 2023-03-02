import React from "react";
import SecurityThreatSection from "src/components/gauntlet/sections/SecurityThreatSection/SecurityThreatSection";
import SkewedRectangle from "src/components/gauntlet/skewedRectangle/SkewedRectangle";
import SkewedRectangleContent from "src/components/gauntlet/skewedRectangleContent/SkewedRectangleContent";
import SectionBreak from "src/components/gauntlet/sectionbreak/SectionBreak";
import WhyGauntlet from "src/components/gauntlet/sections/WhyGauntletSection/WhyGauntlet";

const GauntletPage = () => {
  return (
    <>
      <SkewedRectangle>
        <SkewedRectangleContent />
      </SkewedRectangle>
      <SecurityThreatSection />
      <SectionBreak />
    </>
  );
};

GauntletPage.isGauntletPage = true;

export default GauntletPage;
