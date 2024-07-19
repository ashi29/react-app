import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import logo from "../../logo_sg.png";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-scroll";
import "./Style.css";
import { Link as RouteLink } from "react-router-dom";
import MuiContainedButton from "../../MuiComponents/MuiContainedButton/Index";
import ContactUs from "./ContactUs";

const navItems = ["Home", "About", "Services", "Contact", "Login", "Panel"];

const Landing = (props) => {
  return (
    <Grid>
      <AppBar component="nav" className="navBar">
        <Toolbar>
          <Avatar alt="SG logo" src={logo} className="navbar-logo" />
          <Typography className="navLogo-text">SG</Typography>
          <Grid container className="navList">
            {navItems.map((item) => (
              <Grid item key={item}>
                {item === "Panel" ? (
                  <MuiContainedButton type={"button"} buttonText={item} />
                ) : item === "Login" ? (
                  <RouteLink to={`/${item.toLowerCase()}`}>
                    <Button className="navButtons">{item}</Button>
                  </RouteLink>
                ) : (
                  <Link
                    activeClass="active"
                    smooth
                    spy
                    to={item.toLowerCase()}
                    offset={item === "Contact" ? -90 : -25}
                  >
                    <Button className="navButtons">{item}</Button>
                  </Link>
                )}
              </Grid>
            ))}
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />

      <Grid component="main">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="contact">
          <ContactUs />
        </section>
      </Grid>
    </Grid>
  );
};

export default Landing;
