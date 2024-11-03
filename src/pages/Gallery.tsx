import React, { CSSProperties, useState } from "react";
import BaseLayout from "../BaseLayout";
import Grid from "@mui/material/Grid2";
import {
  galleryColors,
  retroPaperStyles,
  retroMenuHeader,
  retroMenuStyles,
  RetroHeader,
  retroButtonStyles,
  retroContentStyles,
  retroCardStyles,
  retroPostHeader,
  retroMenuIcons,
  diaryMenuStyles,
  diaryHeader,
  diaryButtonStyles,
  diaryCardStyles,
  diaryContentStyles,
} from "../styles";
import { HeadFC } from "gatsby";
import { Strings } from "../resources/strings";
import MenuSelection from "../Components/MenuSelection";
import CustomButton from "../Components/CustomButton";
import RichTextPost from "../Components/RichTextPost";
import useMediaQuery from "@mui/material/useMediaQuery";

const strings = Strings.galleryPage;
const headStrings = Strings.metaData.gallery;

const Gallery: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const themeSelection = {
    title: "Theme Selection",
    menuStyles: retroMenuStyles,
    menuHeaderStyles: retroMenuHeader,
    cardStyles: retroCardStyles,
    contentStyles: retroContentStyles,
    buttonStyles: retroButtonStyles,
    hoverColor: galleryColors.headerBG,
  };

  const [theme, setTheme] = useState(themeSelection);

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
        onClick: () =>
          setTheme({
            title: "Diary",
            menuStyles: diaryMenuStyles,
            menuHeaderStyles: diaryHeader,
            cardStyles: diaryCardStyles,
            contentStyles: diaryContentStyles,
            buttonStyles: diaryButtonStyles,
            hoverColor: galleryColors.headerBG,
          }),
      },
    ],
  };

  // const subTitle: CSSProperties = {
  //   fontWeight: "800",
  //   backgroundColor: `rgba(${colors.backgroundRGB}, 0.7)`,
  //   borderRadius: "5px",
  //   fontSize: 32,
  //   padding: spacing.xs,
  //   margin: "auto",
  //   color: "#ffffff",
  // };

  //create the gallery components and import them
  // stack the components; so position absolute
  // reveal the appropriate theme on click selection

  const mobileGridStyles: CSSProperties = {
    width: "100%",
    margin: "auto",
  };

  return (
    <div className="overlay" style={overlayStyles}>
      <BaseLayout title={strings.header} pageStyles={galleryStyles}>
        <Grid
          container
          mt={2}
          mb={4}
          flexDirection="row"
          columnSpacing={2}
          rowSpacing={2}
        >
          {/************ MENU SECTION ******************/}
          <Grid ml={2} size={2} sx={isMobile ? mobileGridStyles : {}}>
            <MenuSelection
              items={menuItems.items}
              title={theme.title}
              menuStyles={theme.menuStyles}
              contentStyles={theme.cardStyles}
              hoverColor={theme.hoverColor}
              Header={RetroHeader}
            />
          </Grid>

          {/********** GALLERY **************/}
          <Grid
            container
            className="gallery-wrapper"
            display="flex"
            flexDirection="column"
            rowSpacing={2}
            columnSpacing={2}
            sx={isMobile ? mobileGridStyles : { width: "80%" }}
          >
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
              <RichTextPost
                subHeader="Post Title"
                paperStyles={retroPaperStyles}
                menuStyles={retroPostHeader}
                contentStyles={retroContentStyles}
                iconStyles={retroMenuIcons}
                size="small"
              >
                <div className="loren">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </RichTextPost>
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
                Consequatur obcaecati enim autem numquam, explicabo aperiam,
                ipsam aliquid animi distinctio maxime maiores cum deleniti
                eaque? Accusantium ab reprehenderit unde autem? Provident.
              </div>
              <CustomButton
                onClick={() => console.log("Button Clicked")}
                label="Click Me!"
                btnStyles={retroButtonStyles}
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
              <RichTextPost
                subHeader="Post Title"
                paperStyles={retroPaperStyles}
                menuStyles={retroPostHeader}
                contentStyles={retroContentStyles}
                iconStyles={retroMenuIcons}
                size="small"
              >
                <div className="loren">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </RichTextPost>
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
                Consequatur obcaecati enim autem numquam, explicabo aperiam,
                ipsam aliquid animi distinctio maxime maiores cum deleniti
                eaque? Accusantium ab reprehenderit unde autem? Provident.
              </div>
              <CustomButton
                onClick={() => console.log("Button Clicked")}
                label="Click Me!"
                btnStyles={retroButtonStyles}
              />
            </Grid>
          </Grid>
        </Grid>
      </BaseLayout>
    </div>
  );
};

export default Gallery;
export const Head: HeadFC = () => <title>{headStrings}</title>;
