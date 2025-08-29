import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { spacing } from "../styles";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useForm, ValidationError } from "@formspree/react";
import { FORMSPREEENDPOINT } from "../const";

const NewsletterBanner: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const [state, handleSubmit] = useForm(FORMSPREEENDPOINT);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    handleSubmit(e);
  };

  return (
    <Box
      className="home-page--newsletter"
      sx={{
        margin: "auto",
        maxWidth: isMobile ? "unset" : "600px",
        width: isMobile ? "unset" : "100%",
        fontFamily: "Fredoka, sans-serif",
        border: "2px solid black",
        padding: "2rem",
        borderRadius: `${spacing.xs}rem`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{ marginBottom: "1rem", fontFamily: "Fredoka, sans-serif" }}
        >
          Sign up to our newsletter
        </Typography>
        <Typography
          variant="body2"
          className="newsletter--info"
          sx={{ marginBottom: "1.5rem", padding: isMobile ? "0" : "0 3rem" }}
        >
          Stay updated on SoulPad's progress! For questions, comments, or
          suggestions, email us at{" "}
          <a
            href="mailto:kala@soulpadforeveryone.com"
            style={{ color: "black" }}
          >
            info@soulpadforeveryone.com
          </a>
        </Typography>
      </Box>

      {submitted ? (
        <Box sx={{ margin: "auto", maxWidth: "200px" }} color="success.main">
          Thank you for signing up!
        </Box>
      ) : (
        <form
          onSubmit={onSubmit}
          method="POST"
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {/* Honeypot field for spam protection */}
          <input
            type="text"
            name="_gotcha"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />
          <TextField
            type="email"
            label="Your email address"
            variant="outlined"
            size="small"
            required
            name="email"
            className="newsletter--input"
            sx={{
              flexGrow: 1,
              "& .MuiOutlinedInput-root": {
                borderRadius: "5px",
              },
            }}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <TextField
            type="text"
            label="Leave a message"
            variant="outlined"
            size="medium"
            required
            name="message"
            className="newsletter--input"
            sx={{
              flexGrow: 1,
              "& .MuiOutlinedInput-root": {
                borderRadius: "5px",
              },
            }}
          />

          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "rgba(255,97,5,0.6)",
              fontFamily: "Fredoka, sans-serif",
              color: "black",
              "&:hover": {
                backgroundColor: "white",
                color: "rgba(255,97,5,0.6)",
              },
            }}
          >
            Sign Up
          </Button>
        </form>
      )}
    </Box>
  );
};

export default NewsletterBanner;
