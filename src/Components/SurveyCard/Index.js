import React from "react";
import { Typography, Button, Grid } from "@mui/material";
// import ForumIcon from "@mui/icons-material/Forum";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Style.css";

const SurveyCard = ({ title1, title2, content, color, number }) => {
  return (
    <Grid
      container
      spacing={2}
      className={`survey-card-${number}`}
      justifyContent="center"
      // alignItems="center"
    >
      {/* <Grid item xs={12} textAlign="center">
        <ForumIcon className="icon" color={color} fontSize="large" />
      </Grid> */}
      <Grid item xs={12} className="title-section">
        <Typography align="center" className="title1-text">
          {title1}
        </Typography>
        <Typography className="title2-text" align="center" gutterBottom>
          {title2}
        </Typography>
      </Grid>

      <Grid item xs={12} textAlign="center">
        <Typography
          variant="body2"
          align="center"
          color="textSecondary"
          paragraph
        >
          {content}
        </Typography>
      </Grid>
      <Grid item display="flex" justifyContent="center" alignItems="flex-end">
        <Button
          className="read-more-btn"
          variant="text"
          endIcon={<ArrowForwardIcon />}
        >
          Read More
        </Button>
      </Grid>
    </Grid>
  );
};

export default SurveyCard;
