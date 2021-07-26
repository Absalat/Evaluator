import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
const NavigationItem = ({ link, icon, text }) => {
  return (
    <ListItem button>
      <ListItemIcon> {icon}</ListItemIcon>
      <ListItemText
        primary={
          <Link to={link} component={RouterLink}>
            {text}
          </Link>
        }
      />
    </ListItem>
  );
};

export default NavigationItem;
