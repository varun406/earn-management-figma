import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }

  body {
    transition: all 0.35s;
    font-family: "Outfit", sans-serif;
    background: #111111;
  }
`;

export default GlobalStyles;
