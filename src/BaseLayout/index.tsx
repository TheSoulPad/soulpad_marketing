import React, { CSSProperties } from "react";
import GlobalStyles from "../GlobalStyles";
import Grid from "@mui/material/Grid2";
import { spacing, colors } from "../styles";
import Footer from "./Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import { Link } from "gatsby";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  isHomePage?: boolean;
}

const BaseLayout: React.FC<LayoutProps> = ({ children, title, isHomePage }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { officialBackgroundColor } = colors;
  const mobileHeight = "185px";
  const widthLogo = "475px";
  const notHomeWidthLogo = isMobile ? widthLogo : "208px";
  const heightLogo = isMobile ? mobileHeight : "205px";
  const notHomeHeightLogo = isMobile ? mobileHeight : "85px";

  const baseLayoutStyles: CSSProperties = {
    backgroundColor: officialBackgroundColor,
  };

  const headerStyles: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0",
    flexWrap: "wrap",
    maxWidth: widthLogo,
    height: heightLogo,
    position: "relative",
    margin: "1rem auto",
  };

  const notHomeHeaderStyles: CSSProperties = {
    ...headerStyles,
    justifyContent: "start",
    alignItems: "center",
    maxWidth: notHomeWidthLogo,
    height: notHomeHeightLogo,
    margin: "0",
  };

  const boxStylesToCenter = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(/images/SoulPadTitle.svg)`,
    backgroundSize: "cover",
    color: "transparent",
    zIndex: 1,
    position: "absolute",
  };

  const starsWrapperStyles = {
    position: "absolute",
  };

  const boxStars = {
    width: "20%",
    height: "100px",
    backgroundImage: `url(/images/soulpadstars.gif)`,
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundPositionY: "100%",
  };

  const setHeaderStyles = isHomePage ? headerStyles : notHomeHeaderStyles;
  const setGridStyles = isHomePage ? "100%" : "14%";

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Grid
        className={isHomePage ? `base-layout--home` : "base-layout--not-home"}
        container
        flexDirection="column"
        style={baseLayoutStyles}
      >
        <Link to="/">
          <Grid
            width={isMobile ? "100%" : setGridStyles}
            className="base-layout--header"
          >
            <Box sx={setHeaderStyles} className="header--wrapper">
              {/* need to create a unique logo*/}
              <Box
                width="100%"
                className="stars--wrapper"
                display={isHomePage ? "flex" : "none"}
              >
                <Box sx={boxStars} />
                <Box sx={boxStars} />
                <Box sx={boxStars} />
                <Box sx={boxStars} />
                <Box sx={boxStars} />
              </Box>
              <Box sx={boxStylesToCenter}>TEST</Box>
              <Box width="100%" className="stars--wrapper" display="flex">
                <Box sx={boxStars} />
                <Box sx={boxStars} />
                <Box sx={boxStars} />
                <Box sx={boxStars} />
                <Box sx={boxStars} />
              </Box>
            </Box>
          </Grid>
        </Link>

        {children}

        <Grid className="base-layout--footer-wrapper" size={"auto"}>
          <Footer />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default BaseLayout;
