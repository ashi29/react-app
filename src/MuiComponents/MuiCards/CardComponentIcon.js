import React from "react";
import { Grid, Typography } from "@mui/material";
import "./Style.css";

const CardComponentIcon = ({ title, text }) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Typography className="iconCard-title">{title}</Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="body2"
          color="text.secondary"
          className="iconCard-subtitle"
        >
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CardComponentIcon;
