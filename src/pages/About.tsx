import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { CSSProperties } from "react";
import BaseLayout from "../BaseLayout";
import { spacing } from "../styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import { Strings } from "../resources/strings";

const strings = Strings.about;
const headStrings = Strings.metaData.about;

const pageStyles = {
  color: "#232129",
};

const heroStyles: CSSProperties = {
  padding: spacing.lg,
  textAlign: "center",
  marginTop: spacing.xl,
  color: "#ffffff",
};

const pageText = {
  header: "About SoulPad",
  subHeader: "What is SoulPad?",
  subHeader2: "How does it work?",
};

const aboutContent = {
  about: {
    p1: {
      title: "The most popular social media apps today have 3 major problems:",
      bullets: [
        "They keep our attention glued to the timeline or feed rather than on each other’s profiles.",
        "They highlight celebrity culture by listing the number of followers, followed by, likes, and other reactions.",
        "They don’t give us the freedom to design our profiles the way we want.",
      ],
    },
    p2: {
      title: "Let’s explore the first point a little deeper:",
      highlight:
        'They keep our attention glued to the timeline or "feed" rather than on each other’s profiles.',
      p: `When was the last time you spent more than five minutes on your friend's profile page vs scrolling through the feed? Probably not many times because social media account profiles are all the same, which makes them boring. Instead, we spend more of our time going through endless videos, photos, sponsored content, or ads. In fact, TikTok has determined that it takes about 250 videos to get people addicted to the app. We’re hooked on the feed and interact more with content from famous social media stars vs engaging with the profiles of our friends and new people.`,
    },
  },
};

const paperStyles = {
  backgroundImage: "url('/images/paper-bg-about.jpeg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "100%",
  maxWidth: "900px",
  margin: "auto",
  padding: spacing.xl,
};

const bodyTextStyles: CSSProperties = {
  fontFamily: "Afacad Flux, sans-serif",
  fontWeight: "500",
  fontSize: "1.2rem",
  textAlign: "left",
  padding: spacing.sm,
};

const blockquoteStyles: CSSProperties = {
  fontFamily: "Afacad Flux, sans-serif",
  fontWeight: "500",
  fontSize: "1.5rem",
  textAlign: "center",
  padding: spacing.sm,
  width: "50%",
  margin: "auto",
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <BaseLayout title={strings.header}>
      <Grid className="homepage-container" style={pageStyles}>
        <Grid container direction="column" className="hero" style={heroStyles}>
          <Paper style={paperStyles} elevation={3}>
            <Typography variant="h2">{strings.subHeader}</Typography>
            <div className="about-content">
              <Typography variant="body1" style={bodyTextStyles}>
                {aboutContent.about.p1.title}
              </Typography>
              <ul>
                {aboutContent.about.p1.bullets.map((bullet, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    style={bodyTextStyles}
                  >
                    <li>{bullet}</li>
                  </Typography>
                ))}
              </ul>
              <Typography variant="body1" style={bodyTextStyles}>
                {aboutContent.about.p2.title}
              </Typography>
              <blockquote style={blockquoteStyles}>
                {aboutContent.about.p2.highlight}
              </blockquote>
              <Typography variant="body1" style={bodyTextStyles}>
                {aboutContent.about.p2.p}
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </BaseLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>{headStrings}</title>;
