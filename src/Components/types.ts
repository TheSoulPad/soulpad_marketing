//component types

export interface CompType {
  activeStyles?: {
    color?: string;
    textShadow?: string;
    border?: string;
    borderRadius?: string;
    backgroundColor?: string;
    background?: string;
    fontFamily?: string;
  };

  content: {};
  header: {
    styles: {};
    text: {};
  };

  text?: {
    list: {
      backgroundColor: string;
      borderRadius?: string;
      color?: string;
      fontFamily: string;
      fontSize: string;
      fontWeight?: string;
      padding: string;
      textAlign: string;
      textShadow?: string;
      margin?: number | string;
      justifyContent?: string;
      width: string;
      "&:hover"?: {
        border?: string;
        background?: string;
        backgroundColor?: string;
        color?: string;
        textShadow: string;
      };
    };
    active: {
      backgroundColor?: string;
      background?: string;
      borderRadius?: string;
      border?: string;
      color: string;
      fontFamily: string;
      fontSize: string;
      fontWeight?: string;
      padding?: string;
      textAlign: string;
      width: string;
      textShadow?: string;
      margin?: string | number;
      justifyContent?: string;
    };
  };
}

export interface RichTextType {
  content: {};
  header: {
    styles: {};
    text: {};
  };
}

export interface IconsType {
  iconClose: {};
  primary: {};
  secondary: {};
}

export interface CardType {
  borderRadius: string;
  padding: string;
  display: string;
  backgroundColor: string;
  background?: string;
  border?: string;
  textShadow?: string;
  fontfamily?: string;
  color: string;
  borderTop?: string;
  borderLeft?: string;
  borderRight?: string;
  borderBottom?: string;
  position?: string;
}

export interface PaperType {
  border?: string;
  borderRadius: string;
  display?: string;
  padding?: string;
  boxShadow?: string;
  backgroundColor: string;
  borderTop?: string;
  borderLeft?: string;
  borderRight?: string;
  borderBottom?: string;
  marginBottom?: string;
  marginTop?: string;
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
