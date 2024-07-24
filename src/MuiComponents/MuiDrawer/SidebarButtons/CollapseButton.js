import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import "../Style.css";
import React from "react";

const CollapseButton = ({ text, icon, open, handleClick, children }) => {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton className="remove-extraBoldness" onClick={handleClick}>
          <Grid container justifyContent="space-between">
            <Grid
              item
              container
              direction="row"
              alignItems="center"
              xs={10}
              md={10}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <Typography className="sidebar-text">{text}</Typography>
            </Grid>
            <Grid item xs={2} md={2}>
              {open ? <ExpandLess /> : <ExpandMore />}
            </Grid>
          </Grid>
        </ListItemButton>
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit className="subList">
        <List component="div">{children}</List>
      </Collapse>
    </>
  );
};

export default CollapseButton;
