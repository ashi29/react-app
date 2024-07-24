import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import backgroundImage from "../../Images/AuthImages/background.png";
import "./Style.css";
import logo from "../../logo_sg.png";
import { Link } from "react-router-dom";

const AuthPage = ({
  form,
  heading,
  cardActionLinkTo,
  cardActionLinkText,
  cardActionText,
  additionalComponent,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid className="main-container">
      <Grid item container className="container" md={9}>
        {!isMobile && (
          <Grid
            item
            container
            md={5}
            xs="none"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item container justifyContent="center" alignItems="center">
              <Grid item>
                <Typography className="vollkorn-hello">
                  Hello! Welcome to{" "}
                </Typography>
                <Typography className="vollkorn-scrutiny">
                  Srutiny Global
                </Typography>
              </Grid>
            </Grid>
            <Grid item container justifyContent="center" alignItems="center">
              <img
                src={backgroundImage}
                alt="scrutiny-global"
                className="image"
              />
            </Grid>
            <Grid item className="vollkorn-body">
              A Panel for project management
            </Grid>
          </Grid>
        )}
        <Grid item xs={12} md={7}>
          <Card
            className={
              isMobile ? "card-form-container-mobile" : "card-form-container"
            }
          >
            <CardContent>
              <Typography
                className={
                  isMobile ? "vollkorn-Login-mobile" : "vollkorn-Login"
                }
              >
                {heading}
              </Typography>
            </CardContent>
            <CardMedia component="img" image={logo} className="logo-image" />
            <CardContent sx={{ mx: isMobile ? 5 : 13 }} className="card-form">
              {form}
            </CardContent>
            <Grid container className="flex-and-center" sx={{ mb: 1 }}>
              <CardActions className="arimo-input-label cardAction-container">
                <Stack direction="row" spacing={1}>
                  <Paper elevation={0}> {cardActionText}</Paper>
                  <Paper elevation={0}>
                    <Link
                      to={`/${cardActionLinkTo}`}
                      className="cardAction-link"
                    >
                      {cardActionLinkText}
                    </Link>
                  </Paper>
                </Stack>
              </CardActions>
            </Grid>
          </Card>
        </Grid>
        <Grid>{additionalComponent}</Grid>
      </Grid>
    </Grid>
  );
};

export default AuthPage;
