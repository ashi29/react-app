import { ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import "../Style.css";

const Paper = styled("div", {
  shouldForwardProp: (prop) => prop !== "isActiveState",
})(({ theme, isActiveState }) => ({
  fontWeight: isActiveState ? "700" : "400",
  color: isActiveState ? "#31BAF4" : "inherit",
}));

const StyledListItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== "isActiveState",
})(({ theme, isActiveState }) => ({
  backgroundColor: isActiveState ? "#DEF5FF" : "inherit",
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
      <StyledListItemButton isActiveState={active}>
        <ListItemIcon>{icon}</ListItemIcon>
        <Paper isActiveState={active} className={className}>
          {text}
        </Paper>
      </StyledListItemButton>
    </ListItem>
  </Link>
);

export default LinkButton;
