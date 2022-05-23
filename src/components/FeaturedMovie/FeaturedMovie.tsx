import React from "react";

import NavbarComponent from "./Navbar/Navbar";
import { FeatureSection } from "./Styles";

function FeaturedMovie() {
  return (
    <FeatureSection>
      <NavbarComponent />
      <div>FeaturedMovie</div>
    </FeatureSection>
  );
}

export default FeaturedMovie;
