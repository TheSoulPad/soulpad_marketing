import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { colors } from "../styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { homePageLinks } from "../const";

//fix header in gallery page

const { officialBackgroundColor } = colors;

const Footer: React.FC = () => {
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
        maxHeight: "30px",
        alignContent: isMobile ? "start" : "end",
        flexDirection: "row",
        position: "sticky",
        bottom: 0,
        width: "100%",
      }}
    >
      {Object.entries(homePageLinks).map(([key, link]) => (
        <Box key={key}>
          <Typography variant="body2">
            <Link href={link.url} color="black" underline="none">
              {link.label}
            </Link>
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
