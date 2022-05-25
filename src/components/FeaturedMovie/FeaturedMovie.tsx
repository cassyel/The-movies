import React from "react";

import NavbarComponent from "./Navbar/Navbar";
import SpotlightComponent from "./Spotlight/Spotlight";
import { FeatureSection } from "./Styles";

function FeaturedMovie() {
  return (
    <FeatureSection>
      <NavbarComponent />
      <SpotlightComponent />
    </FeatureSection>
  );
}

export default FeaturedMovie;
