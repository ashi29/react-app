import React from "react";
import { Grid, Paper } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import "./Style.css";

const InfoCard = ({ title, value, subtitle, image }) => {
  const pieParams = { height: 150, width: 215 };

  const chart = (
    <PieChart
      series={[
        {
          data: [
            { value: 10, color: "#31BAF4" },
            { value: 10, color: "#C6F5FF" },
          ],
          innerRadius: 50,
          outerRadius: 60,
          paddingAngle: 0,
          cornerRadius: 0,
        },
      ]}
      {...pieParams}
    />
  );

  return (
    <Grid container className="infoContainer">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        className="info-subcontainer"
      >
        <Grid item container xs={6} direction="column">
          <Grid item>
            <Paper className="infoText-1" elevation={0}>
              {value}
            </Paper>
          </Grid>
          <Grid item>
            <Paper className="infoText-2" elevation={0}>
              {title}
            </Paper>
          </Grid>
          <Grid item>
            <Paper className="infoText-3" elevation={0}>
              {subtitle}
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={4} className="image-section">
          {image ? <img src={image} alt={title} /> : chart}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InfoCard;
