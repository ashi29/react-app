import { ListItem, ListItemButton, ListItemIcon } from "@mui/material";

import { styled } from "@mui/system";
import React from "react";
import "../Style.css";
import { Link } from "react-router-dom";

const Paper = styled("div")(({ theme, isActive }) => ({
  // fontFamily: "Arimo",
  // fontSize: "100%",
  fontWeight: isActive ? "700" : "400",
  color: isActive ? "#31BAF4" : "inherit",
}));

const StyledListItemButton = styled(ListItemButton)(({ theme, isActive }) => ({
  backgroundColor: isActive ? "#DEF5FF" : "inherit",
  borderRadius: "50px",
}));

const LinkButton = ({
  text,
  icon,
  link,
  className = "sidebar-text",
  active,
}) => (
  <Link to={`/${link}`} className={className}>
    <ListItem key={text} disablePadding>
      <StyledListItemButton isActive={active}>
        <ListItemIcon>{icon}</ListItemIcon>
        <Paper isActive={active} className={className}>
          {text}
        </Paper>
      </StyledListItemButton>
    </ListItem>
  </Link>
);

export default LinkButton;
