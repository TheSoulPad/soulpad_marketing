import React from "react";
import Button from "@mui/material/Button";

interface ButtonProps {
  onClick: () => void;
  label: string;
  disabled?: boolean;
  themeType: string;
  buttonType: "primary" | "secondary" | "custom";
}

const CustomButton: React.FC<ButtonProps> = ({
  onClick,
  label,
  disabled = false,
}) => {
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
