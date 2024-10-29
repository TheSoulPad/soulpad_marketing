import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { CSSProperties } from "react";
import BaseLayout from "../BaseLayout";
import { spacing, aboutColors } from "../styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import { Strings } from "../resources/strings";
import CloseIcon from "@mui/icons-material/Close";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import MinimizeIcon from "@mui/icons-material/Minimize";

//use the retro web style for the about section

const strings = Strings.about;
const headStrings = Strings.metaData.about;

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
  color: "#000000",
};

const containerStyles = {
  color: "#232129",
};

const paperStyles = {
  backgroundColor: aboutColors.paper,
  height: "100%",
  maxWidth: "900px",
  marginBottom: spacing.xl,
  border: "6px solid black",
  boxShadow: "9px 9px 0px 0px black",
  borderRadius: "20px",
};

const contentStyles: CSSProperties = {
  marginTop: spacing.lg,
  padding: ` 0 ${spacing.xl}px ${spacing.xl}px ${spacing.xl}px`,
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
  width: "50%",
  margin: "auto",
};

const AboutPage: React.FC<PageProps> = () => {
  return (
    <div className="overlay" style={overlayStyles}>
      <BaseLayout title={strings.header} pageStyles={pageStyles}>
        <Grid
          display="flex"
          justifyContent="center"
          className="about-container"
          style={containerStyles}
        >
          {/* THE PAPER */}
          <Paper style={paperStyles} elevation={6}>
            {/* THE MENU BAR */}
            <Grid
              container
              style={{
                borderBottom: "3px solid black",
                paddingLeft: spacing.sm,
                paddingRight: spacing.sm,
                backgroundColor: aboutColors.menu,
                borderRadius: "14px 14px 0 0",
              }}
            >
              <Typography variant="h6" sx={{ marginTop: 1 }}>
                {" "}
                <strong>{strings.subHeader}</strong>
              </Typography>
              <Grid
                display={"flex"}
                justifyContent="flex-end"
                alignItems="center"
                style={{ marginLeft: "auto", fontWeight: "bold" }}
              >
                <MinimizeIcon
                  style={{ marginRight: "2px", marginTop: "-3px" }}
                />
                <CropSquareIcon style={{ marginRight: "2px" }} />
                <CloseIcon />
              </Grid>
            </Grid>
            {/* THE CONTENT */}
            <Grid
              container
              flexDirection="column"
              className="about-content"
              style={contentStyles}
            >
              <Typography variant="body1" style={bodyTextStyles}>
                {aboutContent.about.p1.title}
                <Typography variant="subtitle1" gutterBottom>
                  {aboutContent.about.p1.three}
                </Typography>
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
                    <Typography variant="subtitle1" gutterBottom>
                      {aboutContent.about.p1.numbers[index]}
                    </Typography>
                    <Typography variant="body1" style={bodyTextStyles}>
                      {bullet}
                    </Typography>
                  </li>
                ))}
              </ul>
              <Typography variant="body1" style={bodyTextStyles}>
                {aboutContent.about.p2.title}
                <Typography variant="subtitle1" gutterBottom>
                  {aboutContent.about.p2.first}
                </Typography>
                {aboutContent.about.p2.title2}
              </Typography>
              <blockquote style={blockquoteStyles}>
                {aboutContent.about.p2.highlight}
              </blockquote>
              <Typography variant="body1" style={bodyTextStyles}>
                {aboutContent.about.p2.p}
              </Typography>
            </Grid>
          </Paper>
        </Grid>
      </BaseLayout>
    </div>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>{headStrings}</title>;
