import { Card, Typography } from "@material-ui/core";
import React from "react";
import faculityFormStyle from "../faculity-form-style";

const Section = ({ children, title }) => {
  const classes = faculityFormStyle();

  return (
    <Card variant="outlined" className={classes.card}>
      <Typography className={classes.title}>{title}</Typography>
      {children}
    </Card>
  );
};

export default Section;
