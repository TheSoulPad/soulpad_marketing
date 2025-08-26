import React, { CSSProperties } from "react";
import Grid from "@mui/material/Grid2";
import { spacing, funFont1 } from "../styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";

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
  const isMobile = useMediaQuery("(max-width:850px)");
  const bodyTextStyles: CSSProperties = {
    textAlign: "left",
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
    fontFamily: "Fredoka, sans-serif",
  };

  const blockquoteStyles: CSSProperties = {
    fontFamily: "Fredoka, sans-serif",
    fontWeight: "500",
    fontSize: "1.5rem",
    paddingBottom: spacing.sm + "rem",
    margin: "auto",
  };

  return (
    <Grid
      container
      flexDirection="column"
      className="about-content"
      sx={contentStyles}
    >
      {/* The three problems numbered list  */}
      {point.bullets && (
        <ul
          style={{
            listStyleType: "none",
            paddingLeft: spacing.md,
            margin: "0",
          }}
        >
          {point.bullets.map((bullet, index) => (
            <li
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
      )}

      {point.highlight && (
        <Box sx={blockquoteStyles}>
          <blockquote>{point.highlight}</blockquote>
        </Box>
      )}
      <Typography variant="body2" style={bodyTextStyles}>
        {point.p}
      </Typography>

      <Typography variant="body2" style={bodyTextStyles}>
        {point.p1}
      </Typography>

      <Typography variant="body2" style={bodyTextStyles}>
        {point.p2}
      </Typography>

      {point.p3 && (
        <Typography variant="body2" style={bodyTextStyles}>
          {point.p3}
        </Typography>
      )}

      {point.p4 && (
        <Typography variant="body2" style={bodyTextStyles}>
          {point.p4}
        </Typography>
      )}

      {point.p5 && (
        <Typography variant="body2" style={bodyTextStyles}>
          {point.p5}
        </Typography>
      )}
    </Grid>
  );
};

export default AboutPageContent;
