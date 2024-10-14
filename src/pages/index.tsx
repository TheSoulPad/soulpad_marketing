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
  fontFamily: "Courier Prime, monospace",
  fontWeight: "800",
  backgroundColor: `rgba(${colors.backgroundRGB}, 0.7)`,
  borderRadius: "5px",
  fontSize: 32,
  padding: spacing.xs,
  margin: "auto",
};

const cloudContainer: CSSProperties = {
  marginTop: spacing.layoutbg,
};

const pageText = {
  header: "SoulPad",
  subHeader: "Unleash your inner universe.",
};

const cloudTitle = {
  about: {
    title: "About SoulPad",
    link: "/About",
  },
  create: {
    title: "Create a new world",
    link: "/Create",
  },
  return: {
    title: "Return to the main page",
    link: "/Login",
  },
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <BaseLayout title={pageText.header}>
      <Grid style={pageStyles}>
        <Grid
          container
          direction="column"
          className="content"
          style={contentStyles}
        >
          <Typography variant="h2" style={subTitle}>
            {pageText.subHeader}
          </Typography>

          <Grid
            container
            style={cloudContainer}
            justifyContent="center"
            spacing={3}
          >
            {Object.entries(cloudTitle).map(([key, item]) => (
              <Clouds key={key} title={item.title} link={item.link} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </BaseLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
