import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "../components/section";

const TechnologyTransfer = () => {
  return (
    <Section title="Technology Transfer">
      <Box mt={2} />
      <Typography>M.Sc students supervision</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Initiated"
            margin="dense"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Completed"
            margin="dense"
            fullWidth
          />
        </Grid>
      </Grid>
      <TextField
        variant="outlined"
        type="number"
        margin="dense"
        label="Patented research outputs"
        fullWidth
      />
      <TextField
        variant="outlined"
        type="number"
        margin="dense"
        label="Enterorise incubated"
        fullWidth
      />
    </Section>
  );
};

export default TechnologyTransfer;
