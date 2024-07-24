import React, { useState } from "react";
import { Grid } from "@mui/material";
import MuiAdminNavbar from "../../MuiComponents/MuiNavbar/MuiAdminNavbar";
import MuiDrawer from "../../MuiComponents/MuiDrawer/Index";

const Layout = ({ content, navbarHeading }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Grid container>
      <Grid item md={2}>
        <MuiDrawer
          active={navbarHeading}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      </Grid>
      <Grid item container md={10}>
        <Grid item xs={12}>
          <MuiAdminNavbar
            navbarHeading={navbarHeading}
            handleDrawerToggle={handleDrawerToggle}
          />
        </Grid>
        <Grid item xs={12}>
          {content}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Layout;
