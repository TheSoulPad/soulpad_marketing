import React from "react";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import { Link } from "gatsby";

interface CloudProps {
  title: string;
  link: string;
}

const cloudStyles = {
  background: "rgba(255, 255, 255)",
  width: "300px",
  height: "100px",
  borderRadius: "150px",
  boxShadow: "10px 10px rgba(0,0,0,0.2)",
  animation: "move 5s infinite",
  position: "relative",
  cursor: "pointer",
};

const Clouds: React.FC<CloudProps> = ({ title, link }) => {
  return (
    <Grid>
      <Box
        className="cloud"
        sx={{
          ...cloudStyles,
          "&:hover": {
            boxShadow: "15px 15px rgba(0,0,0,0.3)",
          },
          "&::after": {
            content: "''",
            background: "rgba(255, 255, 255)",
            position: "absolute",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            top: "-50px",
            left: "50px",
          },
          "&::before": {
            content: "''",
            background: "rgba(255, 255, 255)",
            position: "absolute",
            width: "170px",
            height: "150px",
            borderRadius: "50%",
            top: "-90px",
            right: "40px",
          },
        }}
      >
        <Typography
          variant="body2"
          sx={{
            marginBottom: 5,
            fontWeight: 800,
            padding: 1,
            position: "absolute",
            width: "100%",
            zIndex: 100,
            fontSize: "1rem",
          }}
        >
          <Link style={{ textDecoration: "none" }} to={link}>
            {title}
          </Link>
        </Typography>
      </Box>
    </Grid>
  );
};

export default Clouds;
