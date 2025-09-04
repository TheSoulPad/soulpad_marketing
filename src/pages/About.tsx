import * as React from "react";
import type { HeadFC } from "gatsby";
import BaseLayout from "../BaseLayout";
import { spacing } from "../styles";

import Grid from "@mui/material/Grid2";
import { Strings } from "../resources/strings";
import useMediaQuery from "@mui/material/useMediaQuery";
import AboutPageContent from "../Components/AboutPageContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
  const isMobile = useMediaQuery("(max-width: 600px)");

  const isTablet = useMediaQuery(
    "(min-width: 759px)" + " and (max-width: 1024px)",
  );

  const containerStyles = {
    color: "#232129",
    padding: `${isMobile ? spacing.sm : 0}em`,
    width: "100%",
  };

  const columnStyles = {
    display: isMobile ? "none" : "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: spacing.sm + "rem",
    maxWidth: "300px",
    width: "100%",
    padding: spacing.xs + "rem",
    ".col--img": {
      width: "100%",
      backgroundSize: "cover",
    },
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

        <Grid className="about--column" sx={columnStyles}>
          <Box
            className="col--img img1"
            sx={{
              backgroundImage: `url(${person6Path})`,
              minHeight: "350px",
            }}
          />
          <Box
            sx={{
              backgroundImage: `url(${person5Path})`,
              minHeight: "158px",
            }}
            className="col--img img2"
          />

          <Box
            sx={{
              backgroundImage: `url(${person10Path})`,
              minHeight: "250px",
            }}
            className="col--img img3"
          />

          <Box
            sx={{
              backgroundImage: `url(${person11Path})`,
              minHeight: "276px",
            }}
            className="col--img img4"
          />
        </Grid>

        {/******  CONTENT *****/}

        <Grid
          display="flex"
          className="about--content"
          flexDirection="column"
          mt={6}
          sx={{
            maxWidth: isTablet ? "450px" : "100%",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              paddingBottom: spacing.sm + "rem",
              margin: "auto",
              maxWidth: "700px",
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
          </Box>
        </Grid>

        {/* IMG COLUMN 2   */}
        <Grid
          className="about--column about--column2"
          sx={{
            ...columnStyles,
            display: isTablet || isMobile ? "none" : "flex",
          }}
        >
          <Box
            className="col--img col--img2 img4"
            sx={{
              backgroundImage: `url(${person7Path})`,
              minHeight: "220px",
            }}
          ></Box>
          <Box
            sx={{
              backgroundImage: `url(${person8Path})`,
              minHeight: "281px",
            }}
            className="col--img img5"
          ></Box>
          <Box
            sx={{
              backgroundImage: `url(${person9Path})`,
              minHeight: "285px",
              backgroundPositionX: "45px",
            }}
            className="col--img img6"
          ></Box>
          <Box
            sx={{
              backgroundImage: `url(${person13Path})`,
              minHeight: "270px",
            }}
            className="col--img img7"
          ></Box>
        </Grid>
      </Grid>

      {/********************* Post TWO *********** */}
    </BaseLayout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>{headStrings}</title>;
