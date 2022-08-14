import { ThemeProvider } from "styled-components";
import "./App.css";
import Games from "./pages/games-page/Games";
import GlobalStyles from "./styles/GlobalStyles";
import { DefaultTheme } from "./styles/theme.js";

const App = () => {
  return (
    <>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyles />
        <Games />
      </ThemeProvider>
    </>
  );
};
export default App;
