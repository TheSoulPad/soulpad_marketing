/**
 * The main index page component for the SoulPad application.
 *
 * This component uses a base layout and displays a header, subheader, and a series of cloud components
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
import { colors, spacing } from "../styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Window from "../Components/Window";
import { homePageLinks } from "../const";
import { Strings } from "../resources/strings";
//add svg support

const strings = Strings.homePage;
const headStrings = Strings.metaData.home;
const gridStyles = {
  color: "#232129",
  overflow: "hidden",
};

const contentStyles: CSSProperties = {
  padding: `${spacing.md}rem`,
  textAlign: "center",
  color: "#ffffff",
};

const subTitle: CSSProperties = {
  borderRadius: "5px",
  fontSize: "32px",
  width: "100%",
  color: "rgba(0,0,0,0.87)",
  letterSpacing: "0.15rem",
  textShadow: "1px 1px 0px rgba(255,97,5,0.6)",
};

const windowContainer: CSSProperties = {
  marginTop: `${spacing.sm}rem`,
};

const homeStyles = {
  backgroundSize: "cover",
  backgroundColor: "#ffe7c1", // official bg color
  color: "#ff6c05", // official text color
  textShadow: "6px 7px 2px #caf105",
};

const subHeaderImgBox = {
  width: "50%",
  marging: "auto",
};

const Home = () => {
  return (
    <BaseLayout title={strings.header} pageStyles={homeStyles}>
      <Grid style={gridStyles}>
        <Grid
          container
          direction="column"
          className="home-page--content"
          style={contentStyles}
        >
          <Typography
            style={subTitle}
            className="home-page--subtitle"
            variant="h2"
          >
            {strings.subHeader0}
          </Typography>

          <Typography
            className="home-page--subtitle"
            variant="h2"
            style={subTitle}
          >
            {strings.subHeader}
          </Typography>

          {/* <Box
            sx={subHeaderImgBox}
            display="flex"
            gap={1}
            justifyContent="space-between"
          >
            <Typography
              className="home-page--subtitle"
              variant="h2"
              style={subTitle}
            >
              {strings.subHeader}
            </Typography>

            <Box>
              <img src="" alt="soundhorn" />
            </Box>
          </Box> */}

          <Grid
            container
            style={windowContainer}
            justifyContent="center"
            className="window-container"
            flexDirection="column"
          >
            <Grid display={"flex"} justifyContent="center">
              {Object.entries(homePageLinks)
                .filter(([item]) => item !== "home" && item !== "demo")
                .map(([key, item]) => (
                  <Window key={key} title={item.label} link={item.url} />
                ))}
            </Grid>
            <Grid display={"flex"} justifyContent="center">
              {Object.entries(homePageLinks)
                .filter(([item]) => item === "demo")
                .map(([key, item]) => (
                  <Window key={key} title={item.label} link={item.url} />
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </BaseLayout>
  );
};

export default Home;

export const Head: HeadFC = () => <title>{headStrings}</title>;
