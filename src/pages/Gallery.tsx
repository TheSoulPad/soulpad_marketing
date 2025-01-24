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
import CustomList from "../Components/CustomList";
import CustomProgress from "../Components/CustomProgress";
import useMediaQuery from "@mui/material/useMediaQuery";
import { retroComps } from "../styles/retro00/comps";
import { diary } from "../styles/diary00/comps";

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
    list: diary.listBox,
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
      list: theme.listBox,
    };
    setTheme(selectedTheme);
  };

  const useThemeStyles = (themeType: string) => {
    switch (themeType) {
      case "DIARY":
        createSelectedTheme(diary);
        break;
      case "RETRO":
        console.log("retro");
        // createSelectedTheme(retroComps);
        break;
      case "VIDEO_GAME":
        console.log("video game");
        //createSelectedTheme(vgComps);;
        break;
      case "SCRAPBOOK":
        console.log("scrapbook");
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
    {
      themeID: 2,
      galleryName: "Retrowave",
      themeType: "RETRO",
    },

    {
      themeID: 3,
      galleryName: "Video game",
      themeType: "VIDEO_GAME",
    },
    {
      themeID: 4,
      galleryName: "Scrapbook",
      themeType: "SCRAPBOOK",
    },
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
          <Grid
            ml={2}
            size={8}
            display="flex"
            justifyContent="center"
            sx={isMobile ? mobileGridStyles : { margin: "auto" }}
          >
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
              activeColor={theme.menuSelection.list.backgroundColor}
              activeColorShadow={theme.menuSelection.list.textShadow}
              horizontal={true}
            />
          </Grid>

          {/********** GALLERY **************/}
          <Grid
            container
            size={10}
            className="gallery-row"
            flexWrap="wrap"
            spacing={2}
            sx={
              isMobile
                ? mobileGridStyles
                : {
                    display: "flex",
                    alignItems: "start",
                    margin: "auto",
                  }
            }
          >
            <RichTextPost
              card={theme.richTextPostStyles.card}
              content={theme.richTextPostStyles.content}
              header={theme.richTextPostStyles.header}
              icons={theme.icons}
              paper={theme.paper}
              size="small"
              title="This is my first post!"
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
              card={theme.card}
              paper={theme.paper}
              size="large"
              title="This is a cool card"
              titleFont={theme.card.text}
            >
              {Array.from({ length: 3 }).map((_, index) => (
                <CustomButton
                  key={index}
                  btnStyles={theme.buttonStyles}
                  label="Click Me!"
                  onClick={() => console.log("Button Clicked")}
                />
              ))}
            </CustomCard>
            <CustomProgress
              card={theme.card}
              circular={true}
              paper={theme.paper}
              progressValues={[{ item: 50, item2: 50 }]}
              size="small"
              title="My goal progress !"
              titleFont={theme.card.text}
            />
            <CustomMediaPlayer
              cardStyles={theme.card}
              contentStyles={theme.content}
              headerStyles={theme.mediaPlayer.header}
              icons={theme.icons}
              paper={theme.paper}
              size="small"
              textLocation="top"
              title="This is a cat video"
              videoUrl="https://www.w3schools.com/html/m"
            />

            <CustomList
              card={theme.list}
              items={[{ item1: "Item 1", item2: "Item 2", item3: "Item 3" }]}
              paper={theme.paper}
              size="large"
              title="Check out my list"
              titleFont={theme.card.text}
            />
          </Grid>
        </Grid>
      </BaseLayout>
    </div>
  );
};

export const Head: HeadFC = () => <title>{headStrings}</title>;
export default Gallery;
