import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    border: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;
