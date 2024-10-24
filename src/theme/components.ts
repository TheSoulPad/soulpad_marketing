import { body1Styles, funFont1, headline1Font, headline2Font } from "../styles";

const components = {
  MuiButton: {
    defaultProps: {
      // The props to change the default for.
    },
  },
  MuiTypography: {
    defaultProps: {
      // The props to change the default for.
      variantMapping: {
        body1: "p",
        h1: "h1",
        h2: "h2",
        subtitle1: "subtitle1",
      },
    },
    styleOverrides: {
      // The style overrides for the component.

      body1: {
        ...body1Styles,
      },
      h1: {
        ...headline1Font,
      },
      h2: {
        ...headline2Font,
      },
      subtitle1: {
        ...funFont1,
      },
    },
  },
};

export default components;
