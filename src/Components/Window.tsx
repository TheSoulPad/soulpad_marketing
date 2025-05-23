import React, { CSSProperties } from "react";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import { Link } from "gatsby";

interface WindowProps {
  title: string;
  link: string;
}

const Windows: React.FC<WindowProps> = ({ title, link }) => {
  const windowStyles = {
    width: "360px",
    height: "225px",
    cursor: "pointer",
    backgroundImage: `url(/images/sp-window.svg)`,
    backgroundSize: "cover",
    position: "relative",
    "&::after": {
      content: `'${title}'`, // Replace with your desired text
      position: "absolute",
      bottom: "50%",
      left: "40%",
      color: "#000",
      fontWeight: 400,
      fontSize: "1rem",
      pointerEvents: "none",
      fontFamily: "Roboto, sans-serif",
    },
  };

  const linkStyles: CSSProperties = {
    textDecoration: "none",
    display: "block",
    color: "transparent",
    position: "absolute",
    top: "3rem",
    left: "4rem",
    width: "70%",
    height: "63%",
    margin: "auto",
    cursor: "pointer",
  };
  return (
    <Grid
      sx={{
        display: "flex",
      }}
    >
      <Box className="window" sx={windowStyles}>
        <Link style={linkStyles} to={link}>
          test
        </Link>
      </Box>
    </Grid>
  );
};

export default Windows;
