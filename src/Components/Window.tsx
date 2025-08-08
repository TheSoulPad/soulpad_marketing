import React, { CSSProperties } from "react";
import Grid from "@mui/material/Grid2";
import { spacing } from "../styles";

import Box from "@mui/material/Box";
import { Link } from "gatsby";
import { headerText } from "../styles/diary00";
import { colors } from "@mui/material";

interface WindowProps {
  title: string;
  link: string;
}

const windowContainerLength = "300px";

const Windows: React.FC<WindowProps> = ({ title, link }) => {
  const windowStyles = {
    cursor: "pointer",
    backgroundImage: `url(/images/pencilwindow.svg)`,
    backgroundSize: "cover",
    backgroundPositionY: "0px",
    backgroundPositionX: "0px",
    position: "relative",
    marginTop: `${spacing.sm}rem`,
    maxWidth: windowContainerLength,
    width: "100%",
    height: "180px",
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
    padding: `0 ${spacing.xs}rem`,
    position: "absolute",
    top: "50%",
    left: "20%",
  };

  const linkHoverStyles = {
    margin: "auto",
    "& a": {
      color: "000",
      fontWeight: 400,
      "&:hover": {
        color: "#ff6105 !important",
        fontWeight: `700 !important`,
      },
    },
  };

  // No, you cannot wrap a <div> directly with an <a> tag in React/HTML as it is invalid HTML.
  // Instead, you can use a <Link> or <a> as the parent and style it as a block, or use a <button> if appropriate.
  const arrowStyles = {
    backgroundImage: `url(/images/soulpadarrow.svg)`,
    backgroundRepeat: "no-repeat",
    width: "80px",
    height: "30px",
    top: "65%",
    position: "absolute",
    transition: "left 0.3s ease",
    transform: "translateX(100%)",
    animation: "arrow-move 2s infinite alternate",
    "@keyframes arrow-move": {
      from: { left: "0px" },
      to: { left: "15px" },
    },
    "&:hover": {
      animation: "arrow-move 0s",
    },
  };

  return (
    <Box className="home-selection--window" sx={windowStyles}>
      <Box className="window--text" sx={linkHoverStyles}>
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
  );
};

export default Windows;
