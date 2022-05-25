import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import FeaturedMovie from "./components/FeaturedMovie/FeaturedMovie";
import { MovieContextProvider } from "./contexts/MovieContext";
import GlobalStyle from "./GlobalStyle";
import DarkTheme from "./themes/dark";
import LightTheme from "./themes/light";

function App() {
  const [currentTheme, setCurrentTheme] = useState(DarkTheme);

  function HandleTheme() {
    return currentTheme === DarkTheme
      ? setCurrentTheme(LightTheme)
      : setCurrentTheme(DarkTheme);
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <MovieContextProvider>
        <GlobalStyle />
        <FeaturedMovie />
      </MovieContextProvider>
    </ThemeProvider>
  );
}

export default App;
