import React, { CSSProperties, useState } from "react";
import BaseLayout from "../BaseLayout";
import Grid from "@mui/material/Grid2";
import { galleryColors } from "../styles";
import { HeadFC } from "gatsby";
import { Strings } from "../resources/strings";
import MenuSelection from "../Components/MenuSelection";
import CustomButton from "../Components/CustomButton";
import RichTextPost from "../Components/RichTextPost";
import CustomCard from "../Components/CustomCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import { retroComps } from "../styles/retro00/comps";
import { diary } from "../styles/diary00/comps";
import Box from "@mui/material/Box";

const strings = Strings.galleryPage;
const headStrings = Strings.metaData.gallery;

const Gallery: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  //default
  const menuThemeSelection = {
    menuSelection: diary.menuSelection,
    card: diary.card,
    content: diary.content,
    richTextPostStyles: diary.richTextPost,
    buttonStyles: diary.button,
    paper: diary.paper,
    hover: diary.hover,
    id: diary.ID,
    icons: diary.icons,
  };

  const [theme, setTheme] = useState(menuThemeSelection);

  const createSelectedTheme = (theme: any) => {
    let selectedTheme = {
      menuSelection: theme.menuSelection,
      card: theme.card,
      content: theme.content,
      richTextPostStyles: theme.richTextPost,
      buttonStyles: theme.button,
      paper: theme.paper,
      hover: theme.hover,
      id: theme.ID,
      icons: theme.icons,
    };
    setTheme(selectedTheme);
  };

  const useThemeStyles = (themeType: string) => {
    switch (themeType) {
      case "DIARY":
        createSelectedTheme(diary);
        break;
      case "RETRO":
        createSelectedTheme(retroComps);
        break;
      case "VIDEO_GAME":
        //createSelectedTheme(vgComps);;
        break;
      case "SCRAPBOOK":
        //createSelectedTheme(scrapbookComps);
        break;
      default:
        console.log("Default");
    }
  };

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

  const menuItems = [
    {
      themeID: 1,
      galleryName: "Diary",
      themeType: "DIARY",
    },
    // {
    //   themeID: 2,
    //   galleryName: "Retro & Vaporwave",
    //   themeType: "RETRO",
    // },

    // {
    //   themeID: 3,
    //   galleryName: "Video game",
    //   themeType: "VIDEO_GAME",
    // },
    // {
    //   themeID: 4,
    //   galleryName: "Scrapbook",
    //   themeType: "SCRAPBOOK",
    // },
  ];

  const mobileGridStyles: CSSProperties = {
    width: "100%",
    margin: "auto",
  };

  return (
    <div className="overlay" style={overlayStyles}>
      <BaseLayout title={strings.header} pageStyles={galleryStyles}>
        <Grid
          className="gallery-wrapper"
          container
          mt={2}
          mb={4}
          flexDirection="row"
          columnGap={5}
        >
          {/************ MENU SECTION ******************/}
          <Grid ml={2} size={2} sx={isMobile ? mobileGridStyles : {}}>
            <MenuSelection
              menuID={theme.id}
              items={menuItems}
              title={"Theme Selection"}
              content={theme.menuSelection.content}
              header={theme.menuSelection.header}
              paper={theme.paper}
              card={theme.card}
              onThemeChange={useThemeStyles}
              itemText={theme.menuSelection.text}
              hover={theme.hover}
            />
          </Grid>

          {/********** GALLERY **************/}

          <Box
            className="gallery-row"
            sx={
              isMobile
                ? mobileGridStyles
                : {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    width: "65%",
                  }
            }
          >
            <RichTextPost
              header={theme.richTextPostStyles.header}
              subHeader="This is my first post!"
              paper={theme.paper}
              content={theme.richTextPostStyles.content}
              icon={theme.icons}
              // bodyText={theme.richTextPostStyles.text}
              size="small"
            >
              <div className="loren">
                Welcome to SoulPad! I hope you enjoy your stay. This is a test
                of the post component. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Welcome to SoulPad! I hope you enjoy your
                stay. This is a test of the post component. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Welcome to SoulPad!
                I hope you enjoy your stay. This is a test of the post
                component. Lorem ipsum dolor sit amet, consectetur
              </div>
            </RichTextPost>

            {/* <CustomCard
              title="This is a cool card"
              paper={theme.paper}
              contentStyles={theme.card}
              size="large"
              titleFont={theme.titleFont}
            >
              {Array.from({ length: 3 }).map((_, index) => (
                <CustomButton
                  key={index}
                  onClick={() => console.log("Button Clicked")}
                  label="Click Me!"
                  btnStyles={theme.buttonStyles}
                />
              ))}
            </CustomCard> */}
          </Box>
          {/*
            <Grid
              className="gallery-row"
              display="flex"
              justifyContent="space-between"
              alignItems="start"
              sx={isMobile ? mobileGridStyles : {}}
              flexDirection={isMobile ? "column" : "row"}
              columnSpacing={1}
              rowSpacing={1}
            >
              <CustomCard
                title="This is a cool card"
                paper={theme.paper}
                contentStyles={theme.cardStyles.content}
                size="large"
              />
            </Grid> */}
        </Grid>
      </BaseLayout>
    </div>
  );
};

export const Head: HeadFC = () => <title>{headStrings}</title>;
export default Gallery;
