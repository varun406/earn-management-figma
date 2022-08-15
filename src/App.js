import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";
import Games from "./pages/games-page/Games";
import GlobalStyles from "./styles/GlobalStyles";
import { darkTheme, DefaultTheme, lightTheme } from "./styles/theme";

const App = () => {
  const [theme, setNewTheme] = useState({ DefaultTheme });
  const handleToggle = () => {
    if (theme.id === "light") {
      setNewTheme({
        ...DefaultTheme,
        ...darkTheme,
      });
    } else {
      setNewTheme({
        ...DefaultTheme,
        ...lightTheme,
      });
    }
  };

  useEffect(() => {
    setNewTheme({
      ...DefaultTheme,
      ...lightTheme,
    });
  }, []);

  return (
    <>
      <ThemeContext.Provider value={{ handleToggle }}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Games />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
};
export default App;
