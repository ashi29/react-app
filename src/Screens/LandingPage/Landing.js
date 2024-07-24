import React, { useState } from "react";
import {
  Button,
  CssBaseline,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  Typography,
  AppBar,
  Toolbar,
  Avatar,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import logo from "../../logo_sg.png";
import { Link } from "react-scroll";
import { Link as RouteLink } from "react-router-dom";
import MuiContainedButton from "../../MuiComponents/MuiContainedButton/Index";
import ContactUs from "./ContactUs";
import MenuIcon from "@mui/icons-material/Menu";
import "./Style.css";

const drawerWidth = 240;
const navItems = ["Home", "About", "Services", "Contact", "Login", "Panel"];

const Landing = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const drawer = (
    <Grid onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              {/* <ListItemButton sx={{ textAlign: "center" }}> */}
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
                  offset={item === "Contact" || item === "About" ? -90 : -25}
                >
                  <Button className="navButtons">{item}</Button>
                </Link>
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Grid>
  );

  // Ensuring the container is defined properly
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Grid>
      <CssBaseline />
      <AppBar component="nav" className="navBar">
        <Toolbar>
          <Avatar
            alt="SG logo"
            src={logo}
            className={isMobile ? "navbar-logo-mobile" : "navbar-logo"}
          />
          <Typography className="navLogo-text">SG</Typography>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none", md: "none" } }}
          >
            <MenuIcon color="primary" />
          </IconButton>
          <Grid
            container
            className="navList"
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
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
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
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
