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
  const { officialBackgroundColor, officialTextColor, officialTextShadow } =
    colors;
  const widthLogo = "475px";
  const heightLogo = isMobile ? "185px" : "205px";

  const baseLayoutStyles: CSSProperties = {
    backgroundColor: officialBackgroundColor,
  };

  // const mainStyles: CSSProperties = {
  //   flex: 1,
  //   position: "relative",
  //   padding: `0 ${isMobile ? 0 : spacing.lg}rem`,
  //   height: "auto",
  //   maxHeight: `${isHomePage ? "600px" : "auto"} `,
  // };

  // const h1Styles: CSSProperties = {
  //   padding: 0,
  //   color: officialTextColor,
  //   textShadow: officialTextShadow,
  //   alignSelf: "flex-end",
  //   transform: "rotate(-9deg)",
  //   fontSize: isHomePage ? "5rem" : "2rem",
  // };

  const headerStyles: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
    padding: `${spacing.sm}rem ${spacing.sm}rem 0`,
    flexWrap: "wrap",
    maxWidth: widthLogo,
    height: heightLogo,
    position: "relative",
    margin: "1rem auto",
  };

  const notHomeHeaderStyles: CSSProperties = {
    ...headerStyles,
    justifyContent: "start",
    alignItems: "start",
  };

  // const notHomePageStyles: CSSProperties = {
  //   ...h1Styles,
  //   alignSelf: "flex-start",
  // };

  // const boxStyles: CSSProperties = {
  //   width: widthLogo,
  //   height: heightLogo,
  //   marginLeft: "-4rem",
  //   marginBottom: "44px",
  // };

  // const notHomeBoxStyles: CSSProperties = {
  //   ...boxStyles,
  //   width: "75px",
  //   height: "42px",
  //   marginLeft: "-14px",
  //   marginBottom: "0px",
  //   marginTop: "-21px",
  //   backgroundSize: "100%",
  // };

  const boxStylesToCenter = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(/images/SoulPadTitle.svg)`,
    backgroundSize: "cover",
    color: "transparent",
    zIndex: 1,
    position: "absolute",
  };

  const boxStars = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(/images/soulpadstars.svg)`,
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    position: "absolute",
    color: "transparent",
    backgroundPositionY: "84%",
  };

  // const setTitleTextStyles = isHomePage ? h1Styles : notHomePageStyles;
  const setHeaderStyles = isHomePage ? headerStyles : notHomeHeaderStyles;
  // const boxStylesToUse = isHomePage ? boxStylesToCenter : notHomeBoxStyles;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Grid
        className="base-layout"
        container
        flexDirection="column"
        style={baseLayoutStyles}
      >
        <Link to="/">
          <Grid
            width="100%"
            sx={setHeaderStyles}
            className="base-layout--header"
          >
            {/* need to create a unique logo*/}
            <Box sx={boxStylesToCenter}>TEST</Box>
            <Box sx={boxStars}>stars</Box>
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
