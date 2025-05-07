import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { ButtonType } from "./types";
import { about } from "../styles/about/comps";
import { useTheme } from "../hooks/useTheme";

interface ButtonProps {
  onClick: () => void;
  label: string;
  disabled?: boolean;
  themeType: string;
  buttonType: "primary" | "secondary" | "custom";
  isCustom?: boolean;
  color?: string | null;
}

const CustomButton: React.FC<ButtonProps> = ({
  onClick,
  label,
  disabled = false,
}) => {
  const [compTheme, setCompTheme] = useState<ButtonType>(about.buttons);

  const setDefault = () => {
    setCompTheme(about.buttons);
  };

  const getAndSetComp = (theme: string) => {
    //for now default to menuSelection
    const themeInfoStyles = useTheme("buttons", theme);
    if (themeInfoStyles) {
      const buttonStyles = themeInfoStyles.buttons;
      setCompTheme(buttonStyles);
      return;
    }
    setDefault();
  };

  const buttonSize = "32px";

  const sxStyles = {
    maxHeight: buttonSize,
    margin: "4px 4px",
  };
  return (
    <Button sx={sxStyles} onClick={onClick} disabled={disabled}>
      {label}
    </Button>
  );
};

export default CustomButton;
