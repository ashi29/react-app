import React from "react";
import LoadingGif from "../../Images/loading.gif";
import { Grid } from "@mui/material";
import "./Style.css";

const Loading = () => {
  return (
    <Grid container className="loader">
      <img src={LoadingGif} />
    </Grid>
  );
};

export default Loading;
