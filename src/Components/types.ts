//component types


export interface CompType {
  activeText?: {
    color?: string;
    textShadow?: string;
    border?: string;
  };
  content: {};
  header: {
    styles: {};
    text: {};
  };

  list?: {
    backgroundColor: string;
    textShadow: string;
  };

  text?: {
    styles: {
      backgroundColor: string;
      borderRadius?: string;
      color?: string;
      fontFamily: string;
      fontSize: string;
      padding: string;
      textAlign: string;
      textShadow?: string;
      margin?: number | string;
      justifyContent?: string;
      "&:hover"?: {
        borderRadius: string;
      };
    };
    sx: {
      backgroundColor?: string;
      borderRadius: string;
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
      "&:hover": {
        border?: string;
        backgroundColor?: string;
        borderRadius?: string;
        color?: string;
        textShadow: string;
      };
    };
  };
}

export interface CardType {
  borderRadius: string;
  padding: string;
  display: string;
  backgroundColor: string;
  border?: string;
  textShadow?: string;
  fontfamily?: string;
  color: string;
  borderTop?: string;
  borderLeft?: string;
  borderRight?: string;
  borderBottom?: string;
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
