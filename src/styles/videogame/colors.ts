const keyColors = {
  darkGray: "#51577b", //background
  //background border
  lightGray: "#6e75b2",
  //button gradient go lightGreen to green
  lightGreen: "#46e763",
  green: "#32c25d",
  //button gradient back lightPurple to purple
  lightPurple: "#af43ee",
  purple: "#602fa3",
  //header gradient from skyblue to lightBlue
  skyBlue: "#cff6ea",
  lightBlue: "#9ed9ef",
  //icon background gradient from blue to dark blue
  blue: "#3b9be6",
  darkBlue: "#2e65cc",
  //background gradient from light orange to orange
  lightOrange: "#f99d47",
  orange: "#ec6737",
  black: "#000000",
  white: "#ffffff",
};

const {
  darkGray,
  lightGray,
  lightGreen,
  green,
  lightPurple,
  purple,
  skyBlue,
  lightBlue,
  blue,
  darkBlue,
  lightOrange,
  orange,
  black,
  white,
} = keyColors;

//use light opacity for the comp borders
export const colors = {
  black,
  white,
  buttonPrimary: `linear-gradient(${lightGreen}, ${green})`,
  buttonSecondary: `linear-gradient( ${lightPurple}, ${purple})`,
  buttonPrimaryBorder: lightGreen,
  buttonSecondaryBorder: lightPurple,
  buttonHover: white,
  contentBorder: lightGray,
  headerBg: `linear-gradient(${lightBlue}, ${skyBlue})`,
  icon: skyBlue,
  iconBg: `linear-gradient(${blue}, ${darkBlue})`,
  mainBg00: darkGray,
  mainBg01: lightGray,
  mainBg02: `linear-gradient(${lightOrange}, ${orange})`,
  text00: black,
  text01: white,
  text02: lightGray,
  green,
  purple,
  skyBlue,
};
