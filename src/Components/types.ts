//component types

export interface CompType {
  themeID: string;
  card: {};
  paper: {};
  icons: {};
  activeText?: {
    color: string;
    textShadow: string;
    border: string;
  };
  content: {};
  header: {};

  list: {
    backgroundColor: string;
    textShadow: string;
  };

  text: {
    styles: {
      backgroundColor: string;
      borderRadius: string;
      color: string;
      fontFamily: string;
      fontSize: string;
      padding: string;
      textAlign: string;
      textShadow?: string;
      "&:hover": {
        borderRadius: string;
      };
    };
    sx: {
      "&:hover": {
        backgroundColor: string;
        borderRadius: string;
        color: string;
        textShadow: string;
      };
      backgroundColor: string;
      borderRadius: string;
      color: string;
      fontFamily: string;
      fontSize: string;
      padding: string;
      textAlign: string;
      width: string;
    };
  };
}

export interface MenuType {
  activeText: {
    color: string;
    border: string;
  };
  content: {};
  header: {
    styles: {};
    text: {};
  };
  list: {
    backgroundColor: string;
    textShadow: string;
  };
  text: {
    styles: {};
    sx: {};
  };
}

export interface CardType {
  borderRadius: string;
  padding: string;
  display: string;
  backgroundColor: string;
  border: string;
  textShadow: string;
  fontfamily: string;
  color: string;
}

export interface PaperType {
  border: string;
  borderRadius: string;
  display: string;
  padding: string;
  boxShadow: string;
  backgroundColor: string;
}
