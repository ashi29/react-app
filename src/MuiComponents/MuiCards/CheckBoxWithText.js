import React, { useState } from "react";
import { Typography, Grid } from "@mui/material";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import "./Style.css";

const CheckBoxWithText = ({ text, icon }) => {
  const [hover, setHover] = useState(false);
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className="checkBoxWithText-container"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Grid item xs={2} className="icon-container">
        {hover ? (
          <CheckBoxIcon color="primary" />
        ) : (
          <CheckBoxOutlinedIcon color="primary" />
        )}
      </Grid>
      <Grid item xs={9}>
        <Typography className="checkBox-text">{text}</Typography>
      </Grid>
    </Grid>
  );
};

export default CheckBoxWithText;
