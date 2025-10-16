import React, { CSSProperties } from "react";
import Grid from "@mui/material/Grid2";
import {
  spacing,
  funFont1,
  paperMobileStyles,
  tabletAndGreaterStyles,
  isMobileWidth,
  istabletAndGreaterWidth,
} from "../styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";

interface AboutContentProps {
  link?: string;
  point: {
    numbers?: string[];
    bullets?: string[];
    highlight?: string;
    p?: string;
    p1?: string;
    p2?: string;
    p3?: string;
    p4?: string;
    p5?: string;
    link?: string;
  };
}

const AboutPageContent: React.FC<AboutContentProps> = ({ point }) => {
  const isMobile = useMediaQuery(isMobileWidth);
  const tabletAndGreater = useMediaQuery(istabletAndGreaterWidth);
  const bodyTextStyles: CSSProperties = {
    textAlign: "left",
    color: "#000000",
  };

  const contentStyles = {
    marginTop: spacing.lg,
    maxWidth: isMobile ? "unset" : "680px",
    width: "100%",
    "& p": {
      marginBottom: spacing.sm + "rem",
    },
  };

  const numberStyles = {
    paddingRight: `${spacing.sm / 2}em`,
    fontFamily: "'Fredoka Local', Fredoka, sans-serif",
  };

  const blockquoteStyles: CSSProperties = {
    fontFamily: "'Fredoka Local', Fredoka, sans-serif",
    fontWeight: "500",
    fontSize: "1.5rem",
    paddingBottom: spacing.sm + "rem",
    margin: "auto",
    textAlign: "center",
  };

  const paperStyles = {
    fontFamily: "'Fredoka Local', Fredoka, sans-serif",
    whiteSpace: "break-spaces",
    borderRadius: "5px",
    background: "linear-gradient(90deg, #edf9f9 0%, #ffe0b2 100%)",
    width: "100%",
    border: "2px solid black",
    ...(tabletAndGreater ? tabletAndGreaterStyles : paperMobileStyles),
  };

  return (
    <Grid
      container
      flexDirection="column"
      className="aboutTheme-content"
      sx={contentStyles}
    >
      {/* The three problems numbered list  */}
      {point.bullets && (
        <Paper className="aboutTheme-content--list" sx={paperStyles}>
          <ul
            className="aboutTheme-content--bullets"
            style={{
              listStyleType: "none",
              paddingLeft: spacing.md,
              margin: "0",
            }}
          >
            {point.bullets.map((bullet, index) => (
              <li
                className="aboutTheme-content--bullet"
                key={index}
                style={{
                  display: "flex",
                  alignItems: isMobile ? "start" : "center",
                  marginBottom: isMobile ? spacing.sm + "rem" : 0,
                }}
              >
                <Box className="number" sx={funFont1}>
                  <div style={numberStyles}>{point.numbers?.[index]}</div>
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{ ...bodyTextStyles, marginBottom: "0 !important" }}
                  >
                    {bullet}
                  </Typography>
                </Box>
              </li>
            ))}
          </ul>
        </Paper>
      )}

      {point.highlight && (
        <Box className="aboutTheme-content--highlight" sx={blockquoteStyles}>
          <blockquote>{point.highlight}</blockquote>
        </Box>
      )}

      {point.p && (
        <Paper sx={{ ...paperStyles, marginBottom: spacing.xs + "rem" }}>
          <Typography variant="body2" sx={bodyTextStyles}>
            {point.p}
          </Typography>
        </Paper>
      )}

      {point.p1 && (
        <Paper
          className="aboutTheme-content--paper"
          sx={{ ...paperStyles, marginBottom: spacing.xs + "rem" }}
        >
          <Typography variant="body2" sx={bodyTextStyles}>
            {point.p1}
          </Typography>
        </Paper>
      )}

      {point.p2 && (
        <Paper
          className="aboutTheme-content--paper"
          sx={{ ...paperStyles, marginBottom: spacing.xs + "rem" }}
        >
          <Typography variant="body2" sx={bodyTextStyles}>
            {point.p2}
          </Typography>
        </Paper>
      )}
      {point.p3 && (
        <Paper
          className="aboutTheme-content--paper"
          sx={{ ...paperStyles, marginBottom: spacing.xs + "rem" }}
        >
          <Typography variant="body2" sx={bodyTextStyles}>
            {point.p3}
          </Typography>
        </Paper>
      )}
      {point.p4 && (
        <Paper
          className="aboutTheme-content--paper"
          sx={{ ...paperStyles, marginBottom: spacing.xs + "rem" }}
        >
          <Typography variant="body2" sx={bodyTextStyles}>
            {point.p4}
          </Typography>
        </Paper>
      )}

      {point.p5 && (
        <Paper sx={{ ...paperStyles, marginBottom: spacing.xs + "rem" }}>
          <Typography variant="body2" sx={bodyTextStyles}>
            {point.p5}
          </Typography>
        </Paper>
      )}
    </Grid>
  );
};

export default AboutPageContent;
