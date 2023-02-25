import React from "react";
import SkewedRectangle from "src/components/gauntlet/skewedRectangle/SkewedRectangle";
import SkewedRectangleContent from "src/components/gauntlet/skewedRectangleContent/SkewedRectangleContent";

const GauntletPage = () => {
  return (
    <div>
      <SkewedRectangle>
        <SkewedRectangleContent />
      </SkewedRectangle>
    </div>
  );
};

GauntletPage.isGauntletPage = true;

export default GauntletPage;
