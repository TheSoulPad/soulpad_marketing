import React from "react";
import { Box, Typography } from "@mui/material";
import { colors } from "../styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { homePageLinks } from "../const";

//fix header in gallery page

const { officialBackgroundColor } = colors;

function Footer() {
  const isMobile = useMediaQuery("(max-width:758px)");
  return (
    <Box
      className="footer"
      component="footer"
      sx={{
        py: 1,
        px: 2,
        mt: "auto",
        margin: "0 auto",
        backgroundColor: officialBackgroundColor,
        color: "white",
        textAlign: "left",
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        maxHeight: isMobile ? "none" : "30px",
        alignContent: isMobile ? "start" : "end",
        flexDirection: isMobile ? "column" : "row",
        position: "sticky",
        bottom: 0,
        width: "100%",
      }}
    >
      {Object.entries(homePageLinks)
        .filter(([, link]) => link.type === "link")
        .map(([key, link]) => (
        <Box key={key}>
          <Typography variant="body2">
            <a href={link.url} style={{ color: "black", textDecoration: "none" }}>
              {link.label}
            </a>
          </Typography>
        </Box>
      ))}
      <Typography
        className="footer--copyright"
        variant="body2"
        color="black"
        sx={{ marginRight: "2rem" }}
      >
        &copy; {new Date().getFullYear()} SoulPad. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
