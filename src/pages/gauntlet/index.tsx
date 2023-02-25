import React from "react";
import SecurityThreatSection from "src/components/gauntlet/sections/SecurityThreatSection/SecurityThreatSection";
import SkewedRectangle from "src/components/gauntlet/skewedRectangle/SkewedRectangle";
import SkewedRectangleContent from "src/components/gauntlet/skewedRectangleContent/SkewedRectangleContent";

const GauntletPage = () => {
  return (
    <div>
      <SkewedRectangle>
        <SkewedRectangleContent />
      </SkewedRectangle>
      <SecurityThreatSection />
    </div>
  );
};

GauntletPage.isGauntletPage = true;

export default GauntletPage;
