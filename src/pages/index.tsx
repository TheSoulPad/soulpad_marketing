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
import Clouds from "../Components/Clouds";
import { homePageLinks } from "../const";
import { Strings } from "../resources/strings";
import useMediaQuery from "@mui/material/useMediaQuery";

const strings = Strings.homePage;
const headStrings = Strings.metaData.home;
const pageStyles = {
  color: "#232129",
  overflow: "hidden",
};

const contentStyles: CSSProperties = {
  padding: spacing.lg,
  textAlign: "center",
  color: "#ffffff",
};

const subTitle: CSSProperties = {
  backgroundColor: `rgba(${colors.backgroundRGB}, 0.7)`,
  borderRadius: "5px",
  padding: spacing.xs,
  margin: "auto",
};

const cloudContainer: CSSProperties = {
  marginTop: spacing.layoutbg,
};

const homeStyles = {
  backgroundImage: "url('/images/home-bg.jpg')",
  backgroundSize: "cover",
  color: "#ffffff",
};

const IndexPage: React.FC<PageProps> = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const spacingClouds = isMobile ? 13 : 3;
  return (
    <BaseLayout title={strings.header} pageStyles={homeStyles}>
      <Grid style={pageStyles}>
        <Grid
          container
          direction="column"
          className="content"
          style={contentStyles}
        >
          <Typography variant="h2" style={subTitle}>
            {strings.subHeader}
          </Typography>

          <Grid
            container
            style={cloudContainer}
            justifyContent="center"
            spacing={spacingClouds}
          >
            {Object.entries(homePageLinks)
              .slice(1)
              .map(([key, item]) => (
                <Clouds key={key} title={item.label} link={item.url} />
              ))}
          </Grid>
        </Grid>
      </Grid>
    </BaseLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>{headStrings}</title>;
