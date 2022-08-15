import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }

  body {
    transition: all 0.35s;
    ${"" /* font-family: ${(props) => props.theme.fontFamily.secondary[0]}; */}
    background: ${(props) => props.theme.backgroundColor};
  }
`;

export default GlobalStyles;
