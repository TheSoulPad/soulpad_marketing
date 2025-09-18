import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { ButtonType } from "./types";
import aboutTheme from "../styles/aboutTheme/comps";
import { useTheme } from "../hooks/useTheme";

interface ButtonProps {
  onClick: () => void;
  label: string;
  disabled?: boolean;
  themeType: string;
  buttonType: "primary" | "secondary" | "custom";
  textColor?: string | null;
  bgColor?: string | null;
}

const CustomButton: React.FC<ButtonProps> = ({
  onClick,
  label,
  disabled = false,
  themeType,
  buttonType,
  textColor,
  bgColor,
}) => {
  const themeInfoStyles = useTheme(themeType);
  const [buttons, setButtons] = useState<ButtonType>(
    themeInfoStyles.Button || aboutTheme.Button,
  );

  useEffect(() => {
    setButtons(themeInfoStyles.Button || aboutTheme.Button);
  }, [themeInfoStyles, themeType]);

  const buttonSize = "32px";

  const buttonStyles = {
    primary: buttons.primary,
    secondary: buttons.secondary,
    custom: {
      ...buttons.custom,
      backgroundColor: bgColor,
      color: textColor,
    },
  };

  const buttonStyle = buttonStyles[buttonType] || buttons.primary;

  const sxStyles = {
    maxHeight: buttonSize,
    width: "80%",
    margin: "auto",
    ...buttonStyle,
  };
  return (
    <Button sx={sxStyles} onClick={onClick}>
      {label}
    </Button>
  );
};

export default CustomButton;
