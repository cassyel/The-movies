import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

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
      <h1>Teste</h1>
    </ThemeProvider>
  );
}

export default App;
