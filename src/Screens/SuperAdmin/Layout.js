import { Grid } from "@mui/material";
import React from "react";
import MuiAdminNavbar from "../../MuiComponents/MuiNavbar/MuiAdminNavbar";
import MuiDrawer from "../../MuiComponents/MuiDrawer/Index";

const Layout = ({ content, navbarHeading }) => {
  return (
    <Grid container>
      <Grid item md={2}>
        <MuiDrawer active={navbarHeading} />
      </Grid>
      <Grid item container md={10}>
        <Grid item xs={12}>
          <MuiAdminNavbar navbarHeading={navbarHeading} />
        </Grid>
        <Grid item xs={12}>
          {content}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Layout;
