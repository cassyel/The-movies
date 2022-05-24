import React from "react";

import NavbarComponent from "./Navbar/Navbar";
import { FeatureSection } from "./Styles";

function FeaturedMovie() {
  return (
    <FeatureSection>
      <NavbarComponent />
      <div style={{ width: "100%", height: "350px" }}>FeaturedMovie</div>
    </FeatureSection>
  );
}

export default FeaturedMovie;
