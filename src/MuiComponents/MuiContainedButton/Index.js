import { Button, Typography } from "@mui/material";
import React from "react";
import "./Style.css";

const MuiContainedButton = ({
  type,
  onClickFunction,
  buttonText,
  width,
  mt,
  endIcon,
  startIcon,
  disabled,
  variant,
  className,
}) => {
  const style = {
    mt: mt ? mt : 1,
    width: width ? { xs: "90%", sm: "70%", md: "50%" } : "auto",
    fontSize: width ? "18px" : "16px",
  };
  return (
    <Button
      type={type}
      variant={variant ? variant : "contained"}
      color="primary"
      onClick={onClickFunction}
      sx={style}
      startIcon={startIcon}
      endIcon={endIcon}
      className={className ? className : "containedButton"}
      disabled={disabled}
    >
      <Typography variant="body1" className="buttonText">
        {buttonText}
      </Typography>
    </Button>
  );
};

export default MuiContainedButton;
