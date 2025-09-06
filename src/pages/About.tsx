import * as React from "react";
import type { HeadFC } from "gatsby";
import BaseLayout from "../BaseLayout";
import {
  spacing,
  paperMobileStyles,
  tabletAndGreaterStyles,
  isMobileWidth,
  istabletAndGreaterWidth,
  MAX_MOBILE_WIDTH,
} from "../styles";

import Grid from "@mui/material/Grid2";
import { Strings } from "../resources/strings";
import useMediaQuery from "@mui/material/useMediaQuery";
import AboutPageContent from "../Components/AboutPageContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FundraisingBanner from "../Components/FundraisingComp";

const strings = Strings.about;
const headStrings = Strings.metaData.about;
const content = Strings.about.content;
const person5Path = "/images/people_hp/p5.svg";
const person6Path = "/images/people_hp/p6.svg";
const person7Path = "/images/people_hp/p7.svg";
const person8Path = "/images/people_hp/p8.svg";
const person9Path = "/images/people_hp/p9.svg";
const person10Path = "/images/people_hp/p10.svg";
const person11Path = "/images/people_hp/p11.svg";
const person13Path = "/images/people_hp/p13.svg";

const AboutPage = () => {
  const isMobile = useMediaQuery(isMobileWidth);
  const tabletAndGreater = useMediaQuery(istabletAndGreaterWidth);
  const isTablet = useMediaQuery(
    "(min-width: 759px)" + " and (max-width: 1024px)",
  );
  const isMobileContentWidth = "310px";
  const finalContentWidth = isMobile ? isMobileContentWidth : "600px";

  const containerStyles = {
    color: "#232129",
    padding: `${isMobile ? spacing.sm : 0}em`,
    width: "100%",
    maxWidth: isMobile ? MAX_MOBILE_WIDTH : "1200px",
    margin: isMobile ? "1rem" : "auto",
  };

  const columnStyles = {
    display: isMobile ? "none" : "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: spacing.sm + "rem",
    maxWidth: "300px",
    width: "100%",

    ".col--img": {
      width: "100%",
      backgroundSize: "cover",
    },
  };

  const paperStyles = {
    fontFamily: "Fredoka, sans-serif",
    whiteSpace: "break-spaces",
    borderRadius: "5px",
    background: "linear-gradient(90deg, #edf9f9 0%, #ffe0b2 100%)",
    width: "100%",
    border: "2px solid black",
    ...(tabletAndGreater ? tabletAndGreaterStyles : paperMobileStyles),
  };

  return (
    <BaseLayout isHomePage={false}>
      <Typography variant="h1">{strings.header}</Typography>

      {/* Post ONE */}
      <Grid
        display="flex"
        justifyContent="center"
        className="about-container"
        sx={containerStyles}
      >
        {/* IMG COLUMN 1   */}

        <Grid
          className="about--column"
          sx={{
            ...columnStyles,
            zIndex: 0,
            position: "relative",
            left: "4rem ",
          }}
        >
          <Box
            className="col--img img1"
            sx={{
              backgroundImage: `url(${person6Path})`,
              minHeight: "350px",
            }}
          />
          <Box
            className="col--img img2"
            sx={{
              backgroundImage: `url(${person5Path})`,
              minHeight: "158px",
            }}
          />

          <Box
            className="col--img img3"
            sx={{
              backgroundImage: `url(${person10Path})`,
              minHeight: "266px",
            }}
          />

          <Box
            className="col--img img4"
            sx={{
              backgroundImage: `url(${person11Path})`,
              minHeight: "286px",
            }}
          />
        </Grid>

        {/******  CONTENT *****/}

        <Grid
          display="flex"
          className="about--content"
          flexDirection="column"
          mt={6}
          sx={{
            maxWidth: finalContentWidth,
            width: "100%",
            zIndex: 2,
          }}
        >
          <Typography
            className="about--intro"
            sx={{
              paddingBottom: spacing.sm + "rem",
              margin: "auto",
              textAlign: "center",
              width: "100%",
              fontSize: "1.5rem",
            }}
            variant="body2"
          >
            {/* Today’s most popular social media apps all share three big problems:  */}
            {strings.content.point1.title}
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            className="content-windows"
            alignItems="center"
            sx={{
              maxWidth: "700px",
              width: "100%",
              margin: "auto",
            }}
          >
            <AboutPageContent point={content.point1} />
            <AboutPageContent point={content.point2} />
            <AboutPageContent point={content.point3} />
            <AboutPageContent point={content.point4} />
            <AboutPageContent point={content.point5} />
            <FundraisingBanner paperStyles={paperStyles} />
          </Box>
        </Grid>

        {/* IMG COLUMN 2   */}
        <Grid
          className="about--column about--column2"
          sx={{
            ...columnStyles,
            display: isTablet || isMobile ? "none" : "flex",
            zIndex: 3,
            position: "relative",
          }}
        >
          <Box
            className="col--img col--img img5"
            sx={{
              backgroundImage: `url(${person7Path})`,
              minHeight: "235px",
            }}
          ></Box>
          <Box
            className="col--img img6"
            sx={{
              backgroundImage: `url(${person8Path})`,
              minHeight: "306px",
            }}
          ></Box>
          <Box
            className="col--img img7"
            sx={{
              backgroundImage: `url(${person9Path})`,
              minHeight: "301px",
              backgroundPositionX: "45px",
            }}
          ></Box>
          <Box
            className="col--img img8"
            sx={{
              backgroundImage: `url(${person13Path})`,
              minHeight: "290px",
            }}
          ></Box>
        </Grid>
      </Grid>
    </BaseLayout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>{headStrings}</title>;
