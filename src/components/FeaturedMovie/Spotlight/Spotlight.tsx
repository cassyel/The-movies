/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react";

import { Spotlight, Details, Type, Star } from "./Styles";

function SpotlightComponent() {
  const [rating, setRating] = useState(0);

  useEffect(() => setRating(Math.round(rating / 2)), []);

  return (
    <Spotlight image="https://www.publicitarioscriativos.com/wp-content/uploads/2018/01/16-mil-cartazes-de-filmes-e-series-em-hd-sem-textos-4.jpg">
      <Details>
        <div style={{ margin: "10px" }}>
          <Type>Science Fiction</Type>
          {Array.from({ length: rating }).map(() => (
            <Star />
          ))}
          <h1>Title</h1>
          <p>Resumo</p>
          <h2>atores</h2>
          <button type="button"> View Movie</button>
        </div>
      </Details>
    </Spotlight>
  );
}

export default SpotlightComponent;
