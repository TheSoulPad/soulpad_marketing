import React, { CSSProperties } from "react";
import GlobalStyles from "../GlobalStyles";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { spacing } from "../styles";
import Footer from "./Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  height?: string;
  pageStyles: {
    backgroundImage: string;
    backgroundSize: string;
    color: string;
  };
}

const mainStyles: CSSProperties = {
  flex: 1,
  position: "relative",
};

const BaseLayout: React.FC<LayoutProps> = ({ children, title, pageStyles }) => {
  const { backgroundImage, backgroundSize, color } = pageStyles;
  const baseStyles: CSSProperties = {
    backgroundImage,
    backgroundSize,
    minHeight: "100vh",
  };

  const h1Styles: CSSProperties = {
    margin: 0,
    fontFamily: "Spicy Rice, serif",
    fontWeight: "400",
    padding: spacing.lg,
    textAlign: "center",
    marginTop: spacing.xxl,
    color: color,
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Grid
        className="base-layout"
        container
        direction="column"
        style={baseStyles}
      >
        <Grid>
          <Typography variant="h1" style={h1Styles}>
            {title}
          </Typography>
        </Grid>
        <main style={mainStyles}>{children}</main>
        <Grid size={"auto"}>
          <Footer />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default BaseLayout;
