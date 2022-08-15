export const DefaultTheme = {
  fontFamily: {
    primary: "Outfit, sans-serif",
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
  fontweight: ["700", "800"], // ! Error in obejct
  fontWeight: {
    regular: "400",
    medium: "500",
    semiBold: "600",
    bold: "700",
    extraBold: "800",
  },
};

export const lightTheme = {
  id: "light",
  headingBgColor: "#fff",
  backgroundColor: "#E5E5E5",
  textColor: "#000",
};

export const darkTheme = {
  id: "dark",
  headingBgColor: "#353535",
  backgroundColor: "#131517",
  textColor: "#fff",
};
