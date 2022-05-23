import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import FeaturedMovie from "./components/FeaturedMovie/FeaturedMovie";
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
      <GlobalStyle />
      <FeaturedMovie />
    </ThemeProvider>
  );
}

export default App;
