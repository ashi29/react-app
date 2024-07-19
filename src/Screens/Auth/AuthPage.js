import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Stack,
  Typography,
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
  return (
    <Grid className="main-container">
      <Grid item container className="container" md={9}>
        <Grid item container md={5} justifyContent="center" alignItems="center">
          <Grid item container justifyContent="center" alignItems="center">
            <Grid item>
              <Typography className="vollkorn-hello">
                Hello !Welcome to{" "}
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
        <Grid item xs={12} md={7}>
          <Card className="card-form-container">
            <CardContent>
              <Typography className="vollkorn-Login">{heading}</Typography>
            </CardContent>
            <CardMedia component="img" image={logo} className="logo-image" />
            <CardContent sx={{ mx: 13 }} className="card-form">
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
