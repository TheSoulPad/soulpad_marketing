import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { CSSProperties } from "react";
import BaseLayout from "../BaseLayout";
import { spacing, aboutColors, funFont1 } from "../styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import { Strings } from "../resources/strings";
import RichTextPost from "../Components/RichTextPost";
import useMediaQuery from "@mui/material/useMediaQuery";
import { about } from "../styles/about/comps";
import Box from "@mui/material/Box";

const strings = Strings.about;
const headStrings = Strings.metaData.about;
const content = Strings.about.content;

const aboutContent = {
  about: {
    p1: {
      title: `The most popular social media apps today have `,
      three: "three",
      title2: ` major problems:`,
      numbers: ["1", "2", "3"],
      bullets: [
        `They keep our attention glued to the timeline or "feed" rather than on each other’s profiles.`,
        "They highlight celebrity culture by showing the number of followers, followed by, likes, and other reactions.",
        "They don’t give us the freedom to design our profiles the way we want.",
      ],
    },
    p2: {
      title: "Let’s explore the ",
      first: "first",
      title2: " point a little deeper:",
      highlight:
        'They keep our attention glued to the timeline or "feed" rather than on each other’s profiles.',
      p: `When was the last time you spent more than five minutes on your friend's profile page vs scrolling through the feed? Probably not many times because social media account profiles are all the same, which makes them boring. Instead, we spend more of our time going through endless videos, photos, sponsored content, or ads. In fact, TikTok has determined that it takes about 250 videos to get people addicted to the app. We’re hooked on the feed and interact more with content from famous social media stars vs engaging with the profiles of our friends and new people.`,
    },
  },
};

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
    padding: isMobile ? spacing.sm : 0,
    maxWidth: "900px",
    width: "100%",
    margin: "auto",
  };

  const contentStyles: CSSProperties = {
    marginTop: spacing.lg,
  };

  const bodyTextStyles: CSSProperties = {
    textAlign: "left",
    paddingLeft: spacing.sm,
  };

  const blockquoteStyles: CSSProperties = {
    fontFamily: "Galindo, sans-serif",
    fontWeight: "500",
    fontSize: "1.5rem",
    textAlign: "center",
    padding: spacing.sm,
    width: isMobile ? "unset" : "50%",
    margin: "auto",
  };

  const numberStyles: CSSProperties = {
    paddingRight: `${spacing.sm / 2}em`,
  };

  return (
    <div className="overlay" style={overlayStyles}>
      <BaseLayout title={strings.header} pageStyles={pageStyles}>
        <Grid
          display="flex"
          flexDirection="column"
          justifyContent="center"
          className="about-container"
          style={containerStyles}
        >
          {/* THE PAPER */}
          <RichTextPost
            subHeader={strings.subHeader}
            paper={about.paper}
            card={about.card}
            content={about.content}
            header={about.richTextPost.header}
            icons={about.icons}
            size="large"
          >
            {/* THE CONTENT */}
            <Grid
              container
              flexDirection="column"
              className="about-content"
              style={contentStyles}
            >
              <Typography variant="body1" style={bodyTextStyles}>
                {aboutContent.about.p1.title}
                <span style={funFont1}>{aboutContent.about.p1.three}</span>
                {aboutContent.about.p1.title2}
              </Typography>

              <ul
                style={{
                  listStyleType: "none",
                  paddingLeft: spacing.md,
                  margin: "0",
                }}
              >
                {aboutContent.about.p1.bullets.map((bullet, index) => (
                  <li
                    key={index}
                    style={{
                      marginBottom: spacing.sm,
                      display: "flex",
                    }}
                  >
                    <Box className="number" sx={funFont1}>
                      <div style={numberStyles}>
                        {aboutContent.about.p1.numbers[index]}
                      </div>
                    </Box>
                    <Typography variant="body1" style={bodyTextStyles}>
                      {bullet}
                    </Typography>
                  </li>
                ))}
              </ul>
              <Typography variant="body1" style={bodyTextStyles}>
                {aboutContent.about.p2.title}
                <span style={funFont1}>{aboutContent.about.p2.first}</span>
                {aboutContent.about.p2.title2}
              </Typography>
              <blockquote style={blockquoteStyles}>
                {aboutContent.about.p2.highlight}
              </blockquote>
              <Typography variant="body1" style={bodyTextStyles}>
                {aboutContent.about.p2.p}
              </Typography>
            </Grid>
          </RichTextPost>
          {/* <RichTextPost
            subHeader={strings.subHeader2}
            paper={about.paper}
            card={about.card}
            content={about.content}
            header={about.richTextPost.header}
            icons={about.icons}
            >
          </RichTextPost> */}
        </Grid>
      </BaseLayout>
    </div>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>{headStrings}</title>;
