import React from "react";

import Favorite from "../../../assets/Favorite.svg";
import Home from "../../../assets/Home.svg";
import Movies from "../../../assets/Movies.svg";
import Series from "../../../assets/Series.svg";
import { Navbar, Button } from "./Styles";

function NavbarComponent() {
  return (
    <Navbar>
      <Button type="button">
        <img src={Home} alt="Home Icon" />
      </Button>
      <Button type="button">
        <img src={Movies} alt="Movie Icon" />
      </Button>
      <Button type="button">
        <img src={Series} alt="Serie Icon" />
      </Button>
      <Button type="button">
        <img src={Favorite} alt="Favorite Icon" />
      </Button>
    </Navbar>
  );
}

export default NavbarComponent;
