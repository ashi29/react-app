import React from "react";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import "./Style.css";

const CenteredTextSection = ({ image, title, subtitle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={isMobile ? "center-text-mobile" : "center-text"}
      spacing={2}
    >
      <Grid item md={6} xs={12}>
        <img src={image} alt="About" className="centered-text-image" />
      </Grid>
      <Grid item container md={isMobile ? 12 : 6}>
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
