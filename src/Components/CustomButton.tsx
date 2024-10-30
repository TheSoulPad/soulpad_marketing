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
  return (
    <Button sx={btnStyles} onClick={onClick} disabled={disabled}>
      {label}
    </Button>
  );
};

export default CustomButton;
