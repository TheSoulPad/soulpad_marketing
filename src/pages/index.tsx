/**
 * The main index page component for the SoulPad application.
 *
 * This component uses a base layout and displays a header, subheader, and a
 * series of cloud components
 * that link to different parts of the application.
 *
 * @component
 * @example
 * return (
 *   <IndexPage />
 * )
 *
 * @returns {React.FC<PageProps>} The rendered index page component.
 *
 * @remarks
 * - The page uses a combination of Material-UI components and custom styles.
 * - The `cloudTitle` object contains links and titles for the cloud components.
 * - The `BaseLayout` component is used to wrap the main content of the page.
 *
 * @see {@link https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/ | Gatsby Link Documentation}
 */

import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { CSSProperties } from "react";
import BaseLayout from "../BaseLayout";
import { spacing } from "../styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Window from "../Components/Window";
import { homePageLinks } from "../const";
import { Strings } from "../resources/strings";
import Box from "@mui/material/Box";
import { Margin } from "@mui/icons-material";
//later: add svg support

const strings = Strings.homePage;
const headStrings = Strings.metaData.home;
const person1Path = "/images/people_hp/soulperson1.svg";
const person2Path = "/images/people_hp/soulperson2.svg";
const person3Path = "/images/people_hp/soulperson3.svg";
const person4Path = "/images/people_hp/soulperson4.svg";
const maxWidthSubHeader = "510px";
const maxWidthContent = "600px";
const maxWidthHomePage = "1250px";

const homePageStyles = {
  maxHeight: "600px",
};

const imgBoxContainer = {
  width: "300px",
  height: "245px",
  display: "flex",
  alignContent: "start",
  marginBottom: spacing.sm + "rem",
  backgroundSize: "cover",
  backgroundPositionY: "0px",
  backgroundPositionX: "0px",
  // width: "100%",
  // height: "100%",
};

const person1ImgStyles = {
  backgroundImage: `url(${person1Path})`,
};

const subTitle: CSSProperties = {
  borderRadius: "5px",
  width: "100%",
  color: "rgba(0,0,0,0.87)",
  letterSpacing: "0.15rem",
  textShadow: "1px 1px 0px rgba(255,97,5,0.6)",
  fontWeight: 700,
  fontFamily: "Roboto Mono, monospace",
  textAlign: "center",
};

const Home = () => {
  return (
    <BaseLayout title={strings.header} isHomePage={true}>
      <Grid
        container
        display="flex"
        className="home-page"
        flexDirection="row"
        justifyContent="space-around"
        alignContent={"center"}
        // spacing={1}
        sx={homePageStyles}
      >
        {/* People Imgs Col 1 */}
        <Grid
          // display={(theme) =>
          //   theme.breakpoints.values.laptop ? "flex" : "none"
          // }
          display="flex"
          gap={3}
          flexDirection="column"
          className="home-page--imgs col1"
          pl="2rem"
        >
          <Box
            sx={{ ...imgBoxContainer, backgroundImage: `url(${person1Path})` }}
            className="home-page--person-img person-img-box person-img-1"
          ></Box>
          <Box
            sx={{ ...imgBoxContainer, backgroundImage: `url(${person3Path})` }}
            className="home-page--person-img person-img-box person-img-3"
          ></Box>
        </Grid>

        {/* Home Page Content Col 2 */}
        <Grid
          sx={{
            margin: "auto",
            maxWidth: maxWidthContent,
            width: "100%",
          }}
          className="home-page--content window-container col-2"
          flexDirection="column"
        >
          <Box
            className="home-page--subheader"
            sx={{
              margin: "auto",
              maxWidth: maxWidthSubHeader,
              width: "100%",
            }}
            display="flex"
            gap={1}
            justifyContent="center"
          >
            <Typography
              className="home-page--subheader__text"
              variant="h2"
              sx={subTitle}
            >
              {strings.subHeader}
            </Typography>
            <Box
              width="42px"
              height="42px"
              className="subheader-horn-img"
              sx={{
                backgroundSize: "cover",
                backgroundPositionY: "0px",
                backgroundPositionX: "0px",
                width: "42px",
                height: "42px ",
                backgroundImage: `url(/images/speakers.svg)`,
              }}
            ></Box>
          </Box>

          <Box
            display="flex"
            flexWrap="wrap"
            className="content-windows"
            justifyContent="center"
            sx={{
              maxWidth: "600px",
              width: "100%",
              margin: "auto",
            }}
          >
            {Object.entries(homePageLinks)
              .filter(([item]) => item !== "home")
              .map(([key, item]) => (
                <Window key={key} title={item.label} link={item.url} />
              ))}
          </Box>
        </Grid>

        {/* People Imgs Col 3 */}
        <Grid
          // display={(theme) => {
          //   const laptop = theme.breakpoints.values.laptop;
          //   return laptop ? "flex" : "none";
          // }}
          display="flex"
          gap={1}
          flexDirection="column"
          className="home-page--imgs col3"
          pr="2rem"
        >
          {" "}
          <Box
            sx={{ ...imgBoxContainer, backgroundImage: `url(${person2Path})` }}
            className="home-page--person-img person-img-box person-img-2"
          ></Box>
          <Box
            className="home-page--person-img person-img-box person-img-2"
            sx={{ ...imgBoxContainer, backgroundImage: `url(${person4Path})` }}
          ></Box>
        </Grid>
      </Grid>
    </BaseLayout>
  );
};

export default Home;

export const Head: HeadFC = () => <title>{headStrings}</title>;
