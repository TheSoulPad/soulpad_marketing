import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { FUNDRAISER_URL } from "../const";

const FundraisingBanner: React.FC = () => (
  <Box
    sx={{
      background: "linear-gradient(90deg, #ffb347 0%, #ffcc80 100%)",
      padding: "2rem",
      borderRadius: "12px",
      textAlign: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      maxWidth: 600,
      margin: "2rem auto",
      border: "2px solid black",
    }}
  >
    <Typography variant="h2" sx={{ marginBottom: "1rem", fontWeight: 600 }}>
      Help SoulPad Reach Our $10,000 Fundraising Goal!
    </Typography>
    <Typography variant="body2" sx={{ marginBottom: "1.5rem" }}>
      Your donation will help us hire developers, designers, and cover
      operational costs. Help make SoulPad a reality for everyone!
    </Typography>
    <Button
      variant="contained"
      color="primary"
      size="large"
      href={FUNDRAISER_URL}
      target="_blank"
      sx={{
        backgroundColor: "rgba(255,97,5,0.6)",
        fontWeight: 700,
        fontSize: "1.1rem",
        padding: "0.75rem 2rem",
        borderRadius: "8px",
        fontFamily: "Fredoka, sans-serif",
        "&:hover": {
          backgroundColor: "#fff",
          color: "rgba(255,97,5,0.6)",
        },
      }}
    >
      Donate Now on GoFundMe
    </Button>
    <Typography variant="body2" sx={{ marginTop: "1.5rem", color: "#333" }}>
      Thank you for supporting SoulPad’s mission to bring creative power and fun
      back to social media!
    </Typography>
  </Box>
);

export default FundraisingBanner;
