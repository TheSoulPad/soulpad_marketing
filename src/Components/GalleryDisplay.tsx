import React from "react";
import { RetroHeader, retroMenuIcons } from "../styles";
import CustomButton from "./CustomButton";
import MenuSelection from "./MenuSelection";
import RichTextPost from "./RichTextPost";
import Grid from "@mui/material/Grid2";

interface GalleryDisplayProps {
  title: string;
  items: { id: number; name: string; onClick: () => void }[];
  menuStyles: React.CSSProperties;
  contentStyles: React.CSSProperties;
  hoverColor: string;
  cardStyles: React.CSSProperties;
  paperStyles: React.CSSProperties;
  buttonStyles: React.CSSProperties;
}

const GalleryDisplay: React.FC<GalleryDisplayProps> = ({
  title,
  items,
  menuStyles,
  contentStyles,
  hoverColor,
  cardStyles,
  paperStyles,
  buttonStyles,
}) => {
  return (
    <Grid container mt={4} columnSpacing={4}>
      {/************ MENU SECTION ******************/}

      <Grid size={2}>
        <MenuSelection
          items={items}
          title={title}
          menuStyles={menuStyles}
          contentStyles={cardStyles}
          hoverColor={hoverColor}
          Header={RetroHeader}
        />
      </Grid>

      {/********** GALLERY **************/}
      <Grid container flexDirection="column">
        <Grid size={10} flexDirection="column">
          <RichTextPost
            subHeader="Post Title"
            paperStyles={paperStyles}
            menuStyles={menuStyles}
            contentStyles={contentStyles}
            iconStyles={retroMenuIcons}
            size="small"
          >
            <div className="loren">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </div>
          </RichTextPost>
          <CustomButton
            onClick={() => console.log("Button Clicked")}
            label="Click Me!"
            btnStyles={buttonStyles}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GalleryDisplay;

// you need to create one major structure for the components
// dynamically change the css not the imports, not the components
// this will accept a prop of all the parameters
// ...props
