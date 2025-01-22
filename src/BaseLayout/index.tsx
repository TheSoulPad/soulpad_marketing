import React, { CSSProperties } from "react";
import GlobalStyles from "../GlobalStyles";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { spacing } from "../styles";
import Footer from "./Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import useMediaQuery from "@mui/material/useMediaQuery";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  pageStyles: {
    backgroundImage: string;
    backgroundSize: string;
    color: string;
  };
}

const BaseLayout: React.FC<LayoutProps> = ({ children, title, pageStyles }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { backgroundImage, backgroundSize, color } = pageStyles;

  const mainStyles: CSSProperties = {
    flex: 1,
    position: "relative",
    marginBottom: `${spacing.xxl}em`,
    padding: `${isMobile ? spacing.sm : 0}em`,
  };

  const baseStyles: CSSProperties = {
    backgroundImage,
    backgroundSize,
    minHeight: "100vh",
  };

  const h1Styles: CSSProperties = {
    margin: 0,
    padding: `${isMobile ? 0 : spacing.xs}em`,
    color,
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
