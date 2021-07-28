import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";

const CustomTextField = ({ title }) => {
  return (
    <>
      <Box mt={2} />
      <Typography>{title}</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="internal"
            margin="dense"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="external"
            margin="dense"
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  );
};

export default CustomTextField;
