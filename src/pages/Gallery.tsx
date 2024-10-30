import React, { CSSProperties } from "react";
import BaseLayout from "../BaseLayout";
import Grid from "@mui/material/Grid2";
import {
  spacing,
  galleryColors,
  retroContentStyles,
  retroMenuHeader,
  retroMenuStyles,
  RetroHeader,
  retroButtonStyles,
  colors,
  retroPostHeader,
} from "../styles";
import { HeadFC } from "gatsby";
import { Strings } from "../resources/strings";
import MenuSelection from "../Components/MenuSelection";
import CustomButton from "../Components/CustomButton";
import RichTextPost from "../Components/RichTextPost";
import Typography from "@mui/material/Typography";

const strings = Strings.galleryPage;
const headStrings = Strings.metaData.gallery;

const Gallery: React.FC = () => {
  const overlayStyles: CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    minHeight: "100vh",
    background: `linear-gradient(to bottom, ${galleryColors.background1}, ${galleryColors.background2})`,
    opacity: 1,
    zIndex: 1,
  };

  const galleryStyles = {
    backgroundImage: `linear-gradient(to right, grey 1px, transparent 1px),
  linear-gradient(to bottom, grey 1px, transparent 1px)`,
    backgroundSize: "40px 40px",
    color: "#000000",
  };

  // const menuStyles = [retroMenuStyles, retroMenuStyles];
  // const menuHeaderStyles = [retroMenuHeader];
  // interface MenuItem {
  //   id: number;
  //   name: string;
  //   onClick: () => void;
  // }

  const menuItems = {
    items: [
      {
        id: 1,
        name: "Retro & Vaporwave",
        onClick: () => console.log("Retro & Vaporwave"),
      },
      {
        id: 2,
        name: "Diary",
        onClick: () => console.log("Diary"),
      },
      {
        id: 3,
        name: "Newspaper",
        onClick: () => console.log("Newspaper"),
      },
      {
        id: 4,
        name: "Pixel Dreams",
        onClick: () => console.log("Pixel Dreams"),
      },
    ],
    title: "Theme Selection",
    menuStyles: retroMenuStyles,
    headerStyles: retroMenuHeader,
    contentStyles: retroContentStyles,
    hoverColor: galleryColors.headerBG,
  };

  const subTitle: CSSProperties = {
    fontWeight: "800",
    backgroundColor: `rgba(${colors.backgroundRGB}, 0.7)`,
    borderRadius: "5px",
    fontSize: 32,
    padding: spacing.xs,
    margin: "auto",
    color: "#ffffff",
  };

  return (
    <div className="overlay" style={overlayStyles}>
      <BaseLayout title={strings.header} pageStyles={galleryStyles}>
        <Grid container mt={4} justifyContent="space-evenly">
          {/************ MENU SECTION ******************/}

          <Grid size={2}>
            <MenuSelection
              items={menuItems.items}
              title={menuItems.title}
              menuStyles={menuItems.menuStyles}
              contentStyles={menuItems.contentStyles}
              hoverColor={menuItems.hoverColor}
              Header={RetroHeader}
            />
          </Grid>

          {/********** GALLERY **************/}
          <Grid flexDirection="column">
            <Grid size={10} flexDirection="column">
              <RichTextPost
                subHeader="Post Title"
                paperStyles={retroContentStyles}
                menuStyles={retroPostHeader}
              >
                <div className="loren">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <CustomButton
                  onClick={() => console.log("Button Clicked")}
                  label="Click Me!"
                  btnStyles={retroButtonStyles}
                />
              </RichTextPost>
            </Grid>
          </Grid>
        </Grid>
      </BaseLayout>
    </div>
  );
};

export default Gallery;
export const Head: HeadFC = () => <title>{headStrings}</title>;
