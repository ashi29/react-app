import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import CheckBoxOutlined from "@mui/icons-material/CheckBoxOutlined";

const WhyChooseUsCard = ({ title, description }) => {
  return (
    <Grid container>
      <Grid item xs={3}>
        <CheckBoxOutlined />
      </Grid>

      <Grid item xs={8}>
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default WhyChooseUsCard;
