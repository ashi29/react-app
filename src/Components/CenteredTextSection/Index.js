import React from "react";
import { Grid, Typography } from "@mui/material";
import "./Style.css";

const CenteredTextSection = ({ image, title, subtitle }) => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className="center-text"
    >
      <Grid item md={6}>
        <img src={image} alt="About" className="centered-text-image" />
      </Grid>
      <Grid item container md={6}>
        <Grid item xs={12}>
          <Typography className="title" component="div">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className="subtitle">{subtitle}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CenteredTextSection;
