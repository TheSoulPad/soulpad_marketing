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
//add svg support

const strings = Strings.homePage;
const headStrings = Strings.metaData.home;
// const gridStyles = {
//   color: "#232129",
//   overflow: "hidden",
// };

const topPageStyles: CSSProperties = {
  textAlign: "center",
  color: "#ffffff",
};

const subTitle: CSSProperties = {
  borderRadius: "5px",
  width: "100%",
  color: "rgba(0,0,0,0.87)",
  letterSpacing: "0.15rem",
  textShadow: "1px 1px 0px rgba(255,97,5,0.6)",
};

const windowContainer: CSSProperties = {
  marginTop: `${spacing.lg}rem`,
};

const subHeaderImgBox = {
  margin: "auto",
};

const imgBoxContainer = {
  height: "180px",
  width: "270px",
  border: "1px solid red",
  display: "flex",
  alignContent: "start",
};
const imgBox = {
  border: "5px solid black",
  width: "100%",
  color: "black",
  position: "relative",
  bottom: "4rem",
};

const Home = () => {
  return (
    <BaseLayout title={strings.header} isHomePage={true}>
      <Grid
        container
        direction="column"
        className="home-page--top"
        sx={topPageStyles}
      >
        <Box
          sx={subHeaderImgBox}
          display="flex"
          gap={1}
          justifyContent="space-between"
        >
          <Typography
            className="home-page--subtitle"
            variant="h2"
            sx={subTitle}
          >
            {strings.subHeader}
          </Typography>

          <Box
            width="42px"
            height="42px"
            sx={{
              border: "1px solid red",
              color: "black",
            }}
          >
            Img Box
          </Box>
        </Box>
      </Grid>

      <Grid
        container
        sx={windowContainer}
        justifyContent="center"
        className="home-page--content window-container"
        flexDirection="column"
      >
        <Grid
          container
          className="content-row-1"
          display={"flex"}
          justifyContent="start"
          flexDirection="row"
        >
          <Box sx={imgBoxContainer}>
            <Box sx={imgBox}> Img Person</Box>
          </Box>
          <Box
            display="flex"
            className="content-windows"
            sx={{ padding: `0 ${spacing.lg}rem` }}
          >
            {Object.entries(homePageLinks)
              .filter(([item]) => item !== "home" && item !== "demo")
              .map(([key, item]) => (
                <Window key={key} title={item.label} link={item.url} />
              ))}
          </Box>
          <Box sx={imgBoxContainer}>
            <Box sx={{ ...imgBox, bottom: "4rem" }}> Img Person</Box>
          </Box>
        </Grid>

        <Grid
          className="content-row-2"
          display={"flex"}
          justifyContent="center"
        >
          {Object.entries(homePageLinks)
            .filter(([item]) => item === "demo")
            .map(([key, item]) => (
              <Window key={key} title={item.label} link={item.url} />
            ))}
        </Grid>
      </Grid>
    </BaseLayout>
  );
};

export default Home;

export const Head: HeadFC = () => <title>{headStrings}</title>;
