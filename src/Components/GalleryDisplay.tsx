import React, { CSSProperties } from "react";
import { RetroHeader, retroMenuIcons } from "../styles";
import CustomButton from "./CustomButton";
import MenuSelection from "./MenuSelection";
import RichTextPost from "./RichTextPost";
import Card from "./CustomCard";
import Grid from "@mui/material/Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";

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
  const isMobile = useMediaQuery("(max-width:600px)");

  const mobileGridStyles: CSSProperties = {
    width: "100%",
    margin: "auto",
  };
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
        <Grid
          className="gallery-row"
          display="flex"
          justifyContent="space-between"
          alignItems="start"
          sx={isMobile ? mobileGridStyles : {}}
          flexDirection={isMobile ? "column" : "row"}
          columnSpacing={2}
          rowSpacing={2}
        >
          {/* <RichTextPost
            subHeader="Post Title"
            paperStyles={retroPaperStyles}
            menuStyles={retroPostHeader}
            contentStyles={retroContentStyles}
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
          </RichTextPost> */}
          <div
            style={{
              maxWidth: "400px",
              backgroundColor: "green",
              border: "3px solid black",
              height: "100%",
            }}
            className="placein"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur obcaecati enim autem numquam, explicabo aperiam, ipsam
            aliquid animi distinctio maxime maiores cum deleniti eaque?
            Accusantium ab reprehenderit unde autem? Provident.
          </div>
          {/* <CustomButton
            onClick={() => console.log("Button Clicked")}
            label="Click Me!"
            btnStyles={retroButtonStyles}
          /> */}
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
