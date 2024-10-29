import React, { CSSProperties } from "react";
import BaseLayout from "../BaseLayout";
import Grid from "@mui/material/Grid2";
import {
  spacing,
  galleryColors,
  aboutColors,
  retroContentStyles,
  retroMenuHeader,
  retroMenuStyles,
  retroHeader,
} from "../styles";
import { HeadFC } from "gatsby";
import { Strings } from "../resources/strings";
import Paper from "@mui/material/Paper";
import MenuSelection from "../Components/MenuSelection";

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

  const paperStyles = {
    backgroundColor: aboutColors.paper,
    height: "100%",
    maxWidth: "900px",
    marginBottom: spacing.xl,
    border: "6px solid black",
    boxShadow: "9px 9px 0px 0px black",
    borderRadius: "20px",
  };

  const paperStyles2 = {
    backgroundColor: aboutColors.paper,
    height: "100%",
    maxWidth: "600px",
    marginBottom: spacing.xl,
    border: "6px solid black",
    boxShadow: "9px 9px 0px 0px black",
    borderRadius: "20px",
  };

  const menuStyles = [retroMenuStyles, retroMenuStyles];
  const menuHeaderStyles = [retroMenuHeader];
  interface MenuItem {
    id: number;
    name: string;
    onClick: () => void;
  }

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

  return (
    <div className="overlay" style={overlayStyles}>
      <BaseLayout title={strings.header} pageStyles={galleryStyles}>
        <Grid container justifyContent="space-around">
          {/************ MENU SECTION ******************/}

          <Grid size={2}>
            <MenuSelection
              items={menuItems.items}
              title={menuItems.title}
              menuStyles={menuItems.menuStyles}
              contentStyles={menuItems.contentStyles}
              hoverColor={menuItems.hoverColor}
              Header={retroHeader}
            />
          </Grid>

          {/********** GALLERY **************/}
          <Grid flexDirection="column">
            <Grid size={8} flexDirection="column">
              <Paper style={paperStyles} elevation={2}>
                <div className="loren">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </Paper>
            </Grid>

            <Grid size={8}>
              <Paper style={paperStyles2} elevation={2}>
                <div className="loren">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        {/* Add your content here */}
      </BaseLayout>
    </div>
  );
};

export default Gallery;
export const Head: HeadFC = () => <title>{headStrings}</title>;
