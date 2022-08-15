import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";
import Games from "./pages/games-page/Games";
import GlobalStyles from "./styles/GlobalStyles";
import { darkTheme, DefaultTheme, lightTheme } from "./styles/theme";

const App = () => {
  const [themeContent, setThemeContent] = useState("dark");

  const [theme, setNewTheme] = useState({
    ...DefaultTheme,
    ...lightTheme,
  });

  useEffect(() => {
    if (themeContent === "light") {
      setNewTheme({
        ...DefaultTheme,
        ...lightTheme,
      });
    } else {
      setNewTheme({
        ...DefaultTheme,
        ...darkTheme,
      });
    }
  }, [themeContent]);

  return (
    <>
      <ThemeContext.Provider value={{ themeContent, setThemeContent }}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Games />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
};
export default App;
