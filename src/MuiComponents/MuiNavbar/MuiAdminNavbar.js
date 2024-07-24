import React, { useRef, useState } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  TextField,
  InputAdornment,
  Paper,
  IconButton,
  Collapse,
  Slide,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useTheme, useMediaQuery } from "@mui/material";
import "./Style.css";

const NavBar = ({ navbarHeading, handleDrawerToggle }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const containerRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <>
      <AppBar position="static" className="adminNavbar">
        <Toolbar>
          <Grid item>
            <Paper elevation={0} className="navbarText-1">
              {navbarHeading}
            </Paper>
            <Paper elevation={0} className="navbarText-2">
              Super Admin
            </Paper>
          </Grid>

          {isMobile ? (
            <Grid
              item
              container
              justifyContent="flex-end"
              alignItems="center"
              direction="row"
            >
              <Grid item>
                <IconButton onClick={handleSearchToggle}>
                  <SearchIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton onClick={handleDrawerToggle}>
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Grid>
          ) : (
            <Grid
              item
              container
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <TextField
                  className="search-input"
                  placeholder="Search"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item>
                <NotificationsNoneOutlinedIcon color="disabled" />
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
      {searchOpen && (
        <Slide in={searchOpen} container={containerRef.current}>
          <TextField
            className="search-input-mobile"
            placeholder="Search"
            variant="outlined"
            fullWidth
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Slide>
      )}
    </>
  );
};

export default NavBar;
