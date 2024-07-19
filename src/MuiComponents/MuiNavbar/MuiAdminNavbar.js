import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  Paper,
} from "@mui/material";
import "./Style.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const NavBar = ({ navbarHeading }) => {
  return (
    <AppBar position="static" className="adminNavbar">
      <Toolbar>
        <Grid item direction="column">
          <Paper elevation={0} className="navbarText-1">
            {navbarHeading}
          </Paper>
          <Paper elevation={0} className="navbarText-2">
            Super Admin
          </Paper>
        </Grid>
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
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
