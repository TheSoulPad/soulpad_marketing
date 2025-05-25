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
    width: "300px",
    height: "186px",
    cursor: "pointer",
    backgroundImage: `url(/images/soulpadbrowser.svg)`,
    backgroundSize: "cover",
    backgroundPositionY: "0px",
    backgroundPositionX: "0px",
    position: "relative",
    "&::after": {
      content: `'${title}'`, // Replace with your desired text
      position: "absolute",
      bottom: "43%",
      left: "35%",
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
    top: "0",
    left: "1rem",
    width: "91%",
    height: "95%",
    margin: "auto",
    cursor: "pointer",
    zIndex: 1,
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
