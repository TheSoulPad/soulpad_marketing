import * as React from "react";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ThemeModeProvider } from "../../contexts/ThemeModeContext";
import { MarketingTopBar } from "./MarketingTopBar";
import { MarketingFooter } from "./MarketingFooter";
import { MarketingDoodles } from "./MarketingDoodles";

type MarketingPageShellProps = {
  children: React.ReactNode;
};

const marketingMuiTheme = createTheme({
  typography: {
    fontFamily:
      '"Nunito", "Quicksand", ui-rounded, system-ui, sans-serif',
  },
});

export function MarketingPageShell({ children }: MarketingPageShellProps) {
  return (
    <ThemeProvider theme={marketingMuiTheme}>
      <ThemeModeProvider>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "var(--bg)",
          color: "var(--text)",
          fontFamily:
            '"Nunito", "Quicksand", ui-rounded, system-ui, sans-serif',
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflowX: "hidden",
        }}
      >
        <MarketingDoodles />
        <Box
          sx={{
            width: "100%",
            maxWidth: 1200,
            mx: "auto",
            px: "24px",
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <MarketingTopBar />
          <Box component="main" sx={{ flex: 1 }}>
            {children}
          </Box>
        </Box>
        <Box sx={{ maxWidth: 1200, mx: "auto", width: "100%" }}>
          <MarketingFooter />
        </Box>
      </Box>
      </ThemeModeProvider>
    </ThemeProvider>
  );
}
