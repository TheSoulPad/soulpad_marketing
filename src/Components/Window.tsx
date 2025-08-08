import React from "react";
import { spacing } from "../styles";
import Box from "@mui/material/Box";
import { Link } from "gatsby";


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

  const linkStyles = {
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
    "&:hover": {
      color: "#ff6105",
      fontWeight: "700",
    },
  };

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
      left: "25px",
      backgroundImage: `url(/images/arrow_hover.svg)`,

    },
  };

  return (
    <Box className="home-selection--window" sx={windowStyles}>
      <Link to={link}>
        <Box className="home-selection--text" sx={linkStyles}>
          {title}
        </Box>
      </Link>

      <Link style={{ color: "transparent" }} to={link}>
        <Box className="home-selection--arrow" sx={arrowStyles} />
      </Link>
    </Box>
  );
};

export default Windows;
