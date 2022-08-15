import { ThemeProvider } from "styled-components";

export const DefaultTheme = {
  fontFamily: {
    primary: ["Outfit, sans-serif"],
    secondary: [" Nunito, sans-serif"],
  },
  fontSizes: {
    fs100: "0.625rem", //10px
    fs200: "0.75rem", //12px
    fs300: "0.875rem", // 14px
    fs400: "1rem", // 16px
    fs500: "1.25rem", // 20px
    fs600: "1.5rem", // 24px
    fs700: "1.875rem", // 30px
  },
  fontWeight: {
    regular: "400",
    medium: "500",
    semiBold: "600",
    bold: "700",
    extraBold: "800",
  },
};

export const lightTheme = {
  backgroundColor: "#fff",
  textColor: "#000",
};

export const darkTheme = {
  backgroundColor: "#131517",
  textColor: "#fff",
};

const Theme = ({ children }) => {
  <ThemeProvider theme={DefaultTheme}>{children}</ThemeProvider>;
};

export default Theme;
