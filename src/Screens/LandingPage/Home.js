import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import "./Style.css";
import homeImage from "../../Images/LandingImages/homeImages/homeImage.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MuiContainedButton from "./../../MuiComponents/MuiContainedButton/Index";
import CardComponentIcon from "../../MuiComponents/MuiCards/CardComponentIcon";
import { Link } from "react-scroll";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container className="main-container-landing ">
      <Grid
        item
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        className={isMobile ? "home-sub-grid-mobile" : "home-sub-grid"}
      >
        <Grid item md={6} xs={12} className="item-grid">
          <Typography className="vollkorn-heading">SCRUTINY GLOBAL</Typography>

          <Typography className="monsterrat-subheading-paragraph" gutterBottom>
            At Scrutiny Global, we go beyond being mere data suppliers – we are
            your dedicated partners, transforming accurate and relevant
            information into actionable truths that drive your success.
          </Typography>
          <Link
            activeClass="active"
            smooth
            duration={1000}
            to="about"
            offset={-25}
          >
            <MuiContainedButton
              buttonText={"Get Started"}
              type={"button"}
              endIcon={<ArrowForwardIcon />}
            />
          </Link>
        </Grid>
        <Grid item md={6} xs={12} className="home-image">
          <img src={homeImage} alt="home Image" />
        </Grid>
      </Grid>
      {!isMobile && (
        <Grid
          item
          container
          alignItems="center"
          justifyContent="space-evenly"
          className="iconCardGrid"
        >
          <Grid item xs={12} md={3}>
            <CardComponentIcon title="2234" text="Happy Clients" />
          </Grid>
          <Grid item xs={12} md={3}>
            <CardComponentIcon title="1000" text="Projects" />
          </Grid>
          <Grid item xs={12} md={3}>
            <CardComponentIcon title="1454" text="Hours Of Support" />
          </Grid>
          <Grid item xs={12} md={3}>
            <CardComponentIcon title="2345" text="Hardworkers" />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default Home;
