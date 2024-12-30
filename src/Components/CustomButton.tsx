import React from "react";
import Button from "@mui/material/Button";

interface ButtonProps {
  onClick: () => void;
  label: string;
  disabled?: boolean;
  btnStyles: React.CSSProperties;
}

const CustomButton: React.FC<ButtonProps> = ({
  onClick,
  label,
  disabled = false,
  btnStyles,
}) => {
  const buttonSize = "32px";

  const sxStyles = {
    ...btnStyles,
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
