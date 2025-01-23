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
import CustomMediaPlayer from "../Components/CustomMediaPlayer";
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
    mediaPlayer: diary.mediaPlayer,
  };

  const [theme, setTheme] = useState(menuThemeSelection);

  const createSelectedTheme = (theme: any) => {
    const selectedTheme = {
      menuSelection: theme.menuSelection,
      card: theme.card,
      content: theme.content,
      richTextPostStyles: theme.richTextPost,
      buttonStyles: theme.button,
      paper: theme.paper,
      hover: theme.hover,
      id: theme.ID,
      icons: theme.icons,
      mediaPlayer: theme.mediaPlayer,
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
          spacing={5}
          height="100%"
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
          <Grid
            container
            size={9}
            className="gallery-row"
            flexWrap="wrap"
            spacing={2}
            sx={
              isMobile
                ? mobileGridStyles
                : {
                    display: "flex",
                    alignItems: "start",
                  }
            }
          >
            <RichTextPost
              header={theme.richTextPostStyles.header}
              title="This is my first post!"
              paper={theme.paper}
              card={theme.richTextPostStyles.card}
              content={theme.richTextPostStyles.content}
              icons={theme.icons}
              size="small"
            >
              <span className="loren">
                Welcome to SoulPad! I hope you enjoy your stay. This is a test
                of the post component. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Welcome to SoulPad! I hope you enjoy your
                stay. This is a test of the post component. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Welcome to SoulPad!
                I hope you enjoy your stay. This is a test of the post
                component. Lorem ipsum dolor sit amet, consectetur
              </span>
            </RichTextPost>

            <CustomCard
              title="This is a cool card"
              paper={theme.paper}
              card={theme.card}
              size="large"
              titleFont={theme.card.text}
            >
              {Array.from({ length: 3 }).map((_, index) => (
                <CustomButton
                  key={index}
                  onClick={() => console.log("Button Clicked")}
                  label="Click Me!"
                  btnStyles={theme.buttonStyles}
                />
              ))}
            </CustomCard>

            <CustomMediaPlayer
              title="This is a cat video"
              textLocation="top"
              cardStyles={theme.card}
              icons={theme.icons}
              paper={theme.paper}
              contentStyles={theme.content}
              headerStyles={theme.mediaPlayer.header}
              videoUrl="https://www.w3schools.com/html/m"
              size="small"
            />
          </Grid>
        </Grid>
      </BaseLayout>
    </div>
  );
};

export const Head: HeadFC = () => <title>{headStrings}</title>;
export default Gallery;
