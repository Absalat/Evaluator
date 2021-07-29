import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "../components/section";

const UniversityLinkage = () => {
  return (
    <Section title="University industry linkage">
      <Box mt={2} />
      <Typography>Invited industrialists</Typography>
      <TextField
        variant="outlined"
        type="number"
        margin="dense"
        label="Number"
        fullWidth
      />
      <TextField
        variant="outlined"
        type="number"
        margin="dense"
        label="% course covered"
        fullWidth
      />
      <TextField
        variant="outlined"
        type="number"
        margin="dense"
        label="No. joint projects"
        fullWidth
      />
      <Box mt={2} />
      <Typography>Industry Projects</Typography>
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
      <Box mt={2} />
      <Typography>Mentoring internship students</Typography>
      <TextField
        variant="outlined"
        type="number"
        margin="dense"
        label="Number"
        fullWidth
      />
    </Section>
  );
};

export default UniversityLinkage;
