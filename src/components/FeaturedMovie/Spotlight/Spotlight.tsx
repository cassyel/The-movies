import React, { useState, useEffect } from "react";

import {
  Spotlight,
  Details,
  Type,
  Star,
  ViewMovie,
  Title,
  Preview,
} from "./Styles";

function SpotlightComponent() {
  const [rating, setRating] = useState(10);

  useEffect(() => setRating(Math.round(rating / 2)), []);

  return (
    <Spotlight image="https://www.publicitarioscriativos.com/wp-content/uploads/2018/01/16-mil-cartazes-de-filmes-e-series-em-hd-sem-textos-4.jpg">
      <Details>
        <div style={{ margin: "10px" }}>
          <Type>Type</Type>
          {Array.from({ length: rating }).map(() => (
            <Star />
          ))}
          <Title>Title</Title>
          <Preview>Preview</Preview>
          <ViewMovie type="button"> View Movie</ViewMovie>
        </div>
      </Details>
    </Spotlight>
  );
}

export default SpotlightComponent;
