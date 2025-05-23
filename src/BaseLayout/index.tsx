import React, { CSSProperties } from "react";
import GlobalStyles from "../GlobalStyles";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { spacing } from "../styles";
import Footer from "./Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
// import { Image } from "@mui/icons-material";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  pageStyles: {
    backgroundSize: string;
    backgroundColor: string;
    color: string;
    textShadow?: string;
  };
}

const BaseLayout: React.FC<LayoutProps> = ({ children, title, pageStyles }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { backgroundSize, backgroundColor, color, textShadow } = pageStyles;
  const widthLogo = "165px";
  const heightLogo = "150px";

  const mainStyles: CSSProperties = {
    flex: 1,
    position: "relative",
    padding: `${isMobile ? spacing.sm : 0}rem`,
  };

  const baseStyles: CSSProperties = {
    backgroundSize,
    backgroundColor,
    minHeight: "100vh",
  };

  const h1Styles: CSSProperties = {
    padding: 0,
    color,
    textShadow,
    // margin: `${spacing.sm}rem ${spacing.sm}rem`,
    alignSelf: "flex-end",
    transform: "rotate(-9deg)",
  };

  const boxStyles: CSSProperties = {
    width: widthLogo,
    height: heightLogo,
    backgroundImage: `url(/images/soulpadlogo.svg)`,
    backgroundPosition: "center",
    backgroundSize: "350px",
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
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: `${spacing.sm}rem ${spacing.sm}rem 0`,
          }}
        >
          <Typography className="page-title" variant="h1" sx={h1Styles}>
            {title}
          </Typography>

          {/* need to create a unique logo*/}
          <Box sx={boxStyles} />
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
