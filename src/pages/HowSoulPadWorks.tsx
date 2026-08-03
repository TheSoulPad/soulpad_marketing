import * as React from "react";
import type { HeadFC } from "gatsby";
import BaseLayout from "../BaseLayout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  isMobileWidth,
  istabletAndGreaterWidth,
  MAX_MOBILE_WIDTH,
  paperMobileStyles,
  spacing,
  tabletAndGreaterStyles,
} from "../styles";
import { Strings } from "../resources/strings";

const strings = Strings.howSoulPadWorksPage;
const headStrings = Strings.metaData.howSoulPadWorks;

const HowSoulPadWorks: React.FC = () => {
  const isMobile = useMediaQuery(isMobileWidth);
  const tabletAndGreater = useMediaQuery(istabletAndGreaterWidth);

  const paperStyles = {
    fontFamily: "'Fredoka Local', Fredoka, sans-serif",
    borderRadius: "5px",
    background: "linear-gradient(90deg, #edf9f9 0%, #ffe0b2 100%)",
    width: "100%",
    border: "2px solid black",
    ...(tabletAndGreater ? tabletAndGreaterStyles : paperMobileStyles),
  };

  return (
    <BaseLayout>
      <Box
        className="how-soulpad-works"
        sx={{
          width: "100%",
          maxWidth: isMobile ? MAX_MOBILE_WIDTH : "900px",
          margin: "0 auto",
          padding: isMobile ? `${spacing.sm}rem` : `${spacing.lg}rem`,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontSize: isMobile ? "2rem" : "xxx-large",
            marginBottom: spacing.sm + "rem",
          }}
        >
          {strings.header}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            marginBottom: spacing.lg + "rem",
            maxWidth: "720px",
            marginInline: "auto",
          }}
        >
          {strings.intro}
        </Typography>

        <Box
          component="section"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: spacing.lg + "rem",
          }}
        >
          {strings.sections.map((section, index) => (
            <Paper
              key={section.title}
              className="how-soulpad-works-section"
              sx={{
                ...paperStyles,
                padding: isMobile ? spacing.sm + "rem" : spacing.md + "rem",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: isMobile ? "1.35rem" : "1.75rem",
                  marginBottom: spacing.sm + "rem",
                }}
              >
                {index + 1}. {section.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#000000",
                  marginBottom: spacing.md + "rem",
                  lineHeight: 1.7,
                }}
              >
                {section.description}
              </Typography>

              <Box
                component="img"
                src={section.image}
                alt={section.imageAlt}
                sx={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  borderRadius: "4px",
                  border: "1px solid rgba(0, 0, 0, 0.15)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.12)",
                }}
              />
            </Paper>
          ))}
        </Box>
      </Box>
    </BaseLayout>
  );
};

export const Head: HeadFC = () => <title>{headStrings}</title>;
export default HowSoulPadWorks;
