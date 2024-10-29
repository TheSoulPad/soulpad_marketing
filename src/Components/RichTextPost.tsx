import React, { CSSProperties } from "react";
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CloseIcon from "@mui/icons-material/Close";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import MinimizeIcon from "@mui/icons-material/Minimize";

interface RichTextPostProps {
  contentStyles: React.CSSProperties;
  bodyTextStyles: React.CSSProperties;
  postStyles?: React.CSSProperties;
  blockquoteStyles?: React.CSSProperties;
  subHeader: string;
  content: string;
  addDate?: boolean;
  addWeather?: boolean;
  menuStyles: CSSProperties;
  headerStyles: CSSProperties;
}

const RichTextPost: React.FC<RichTextPostProps> = ({
  postStyles,
  contentStyles,
  bodyTextStyles,
  subHeader,
  content,
}) => {
  return (
    <Paper elevation={6}>
      {/* THE MENU BAR */}
      <Grid container style={postStyles}>
        <Typography variant="h6" sx={{ marginTop: 1 }}>
          {" "}
          <strong>{subHeader}</strong>
        </Typography>
        <Grid
          display={"flex"}
          justifyContent="flex-end"
          alignItems="center"
          style={{ marginLeft: "auto", fontWeight: "bold" }}
        >
          <MinimizeIcon style={{ marginRight: "2px", marginTop: "-3px" }} />
          <CropSquareIcon style={{ marginRight: "2px" }} />
          <CloseIcon />
        </Grid>
      </Grid>
      {/* THE CONTENT */}
      <Grid
        container
        flexDirection="column"
        className="about-content"
        style={contentStyles}
      >
        <Typography variant="body1" style={bodyTextStyles}>
          {content}
        </Typography>
      </Grid>
    </Paper>
  );
};

export default RichTextPost;
