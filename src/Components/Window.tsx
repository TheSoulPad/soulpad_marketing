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
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  };

  const linkStyles: CSSProperties = {
    color: "#000",
    fontWeight: 400,
    fontSize: "1rem",
    fontFamily: "Roboto, sans-serif",
    textDecoration: "none",
    display: "block",
    margin: "auto",
    cursor: "pointer",
    transform: "translateX(15%)",
    maxWidth: "100px",
    width: "100%",
  };

  const arrowStyles = {
    backgroundImage: `url(/images/soulpadarrow.svg)`,
    backgroundRepeat: "no-repeat",
    width: "80px",
    height: "30px",
    marginLeft: "5rem",
    position: "absolute",
    transition: "left 0.3s ease",
    transform: "translateX(100%)",
    animation: "arrow-move 2s infinite alternate",
    "@keyframes arrow-move": {
      from: { left: "0px" },
      to: { left: "15px" },
    },
  };

  return (
    <Grid
      container
      className="home-selection home-selection--window-container"
      justifyContent={"center"}
      alignItems="center"
    >
      <Box className="home-selection--window" sx={windowStyles}>
        <Box sx={{ marginLeft: "3rem" }}>
          <Link style={linkStyles} to={link}>
            {title}
          </Link>
        </Box>

        <Box className="home-selection--arrow" sx={arrowStyles}>
          <Link style={{ color: "transparent" }} to={link}>
            text
          </Link>
        </Box>
      </Box>
    </Grid>
  );
};

export default Windows;
