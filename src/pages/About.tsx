import * as React from "react";
import type { HeadFC } from "gatsby";
import { CSSProperties } from "react";
import BaseLayout from "../BaseLayout";
import { spacing, aboutColors } from "../styles";

import Grid from "@mui/material/Grid2";
import { Strings } from "../resources/strings";
import RichTextPost from "../Components/RichTextPost";
import useMediaQuery from "@mui/material/useMediaQuery";
import { about } from "../styles/about/comps";
import AboutPageContent from "../Components/AboutPageContent";
import { markAsUntransferable } from "worker_threads";

const strings = Strings.about;
const headStrings = Strings.metaData.about;
const content = Strings.about.content;

const AboutPage = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const overlayStyles: CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    minHeight: "100vh",
    background: `linear-gradient(to bottom, ${aboutColors.background1}, ${aboutColors.background2})`,
    opacity: 1,
    zIndex: 1,
  };

  const pageStyles = {
    backgroundImage: `linear-gradient(to right, grey 1px, transparent 1px),
    linear-gradient(to bottom, grey 1px, transparent 1px)`,
    backgroundSize: "40px 40px",
    color: "#ffffff",
  };

  const containerStyles = {
    color: "#232129",
    padding: `${isMobile ? spacing.sm : 0}em`,
    maxWidth: "900px",
    width: "100%",
    marginTop: `${spacing.xl}em`,
    marginLeft: "auto",
    marginRight: "auto",
  };

  return (
    <div className="overlay" style={overlayStyles}>
      <BaseLayout title={strings.header} pageStyles={pageStyles}>
        {/* Post ONE */}
        <Grid
          display="flex"
          flexDirection="column"
          justifyContent="center"
          className="about-container"
          style={containerStyles}
        >
          <RichTextPost
            title={"The problem with modern social media"}
            size="large"
            themeType = "SOULPAD"
          >
            {/* THE CONTENT */}
            <AboutPageContent point={content.point1} />

            <AboutPageContent point={content.point2} />

            <AboutPageContent point={content.point3} />

            <AboutPageContent point={content.point4} />
          </RichTextPost>
        </Grid>

        {/********************* Post TWO *********** */}
      </BaseLayout>
    </div>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>{headStrings}</title>;
