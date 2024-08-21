import { createContext, useContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Create a context for color mode
// This context will provide a way to toggle color mode across the app
const ColorModeContext = createContext({
  toggleColorMode: () => {}, // Initialize with an empty function
});

// Custom hook to use the color mode context
// This allows components to easily access and use the color mode functionality
export const useColorMode = () => {
  // Use the ColorModeContext and return its value
  // This line was missing the return statement, which has been added
  return useContext(ColorModeContext);
};

// ColorModeProvider component to manage and provide color mode
type ColorModeProviderProps = {
  children: React.ReactNode;
};

export function ColorModeProvider({ children }: ColorModeProviderProps) {
  // State to hold the current color mode
  const [mode, setMode] = useState("light");

  // Memoized color mode object with toggle function
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  // Memoized theme object based on the current mode
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode as "light" | "dark",
          ...(mode === "light"
            ? {
                // Custom colors for light mode
                primary: {
                  main: "#1976d2", // Custom primary color
                },
                secondary: {
                  main: "#9c27b0", // Custom secondary color
                },
                background: {
                  default: "#f5f5f5", // Custom background color for light mode
                  paper: "#ffffff",
                },
                text: {
                  primary: "#000000", // Custom text color for light mode
                  secondary: "#555555",
                },
                button: {
                  primary: "#BEBFC5",
                  secondary: "#808080",
                },
              }
            : {
                // Custom colors for dark mode
                primary: {
                  main: "#90caf9", // Custom primary color
                },
                secondary: {
                  main: "#f48fb1", // Custom secondary color
                },
                background: {
                  default: "#0a1929", // Custom dark blue background color
                  paper: "#102a43", // Custom paper color with a slightly different blue
                },
                text: {
                  primary: "#ffffff", // Custom text color for dark mode
                  secondary: "#bbbbbb",
                },
                button: {
                  primary: "#1B1B1B",
                  secondary: "#100C08",
                },
              }),
        },
      }),
    [mode]
  );
  // Provide the color mode context and theme to children components
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
