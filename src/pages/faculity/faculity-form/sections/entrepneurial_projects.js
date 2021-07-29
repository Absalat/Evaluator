import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "../components/section";

const EntrepreneurialProjects = () => {
  return (
    <Section title="Entrepreneurial Projects">
      <Box mt={2} />

      <Typography>B.Sc/ M.Sc student advised</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            variant="outlined"
            type="number"
            margin="dense"
            label="Partially done"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            variant="outlined"
            type="number"
            label="Completed"
            margin="dense"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            variant="outlined"
            type="number"
            margin="dense"
            label="Prototype developed"
            fullWidth
          />
        </Grid>
      </Grid>
      <Box mt={2} />
      <Typography>Personally executed</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            variant="outlined"
            type="number"
            margin="dense"
            label="Partially done"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            variant="outlined"
            type="number"
            label="Completed"
            margin="dense"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            variant="outlined"
            type="number"
            margin="dense"
            label="Prototype developed"
            fullWidth
          />
        </Grid>
      </Grid>
    </Section>
  );
};

export default EntrepreneurialProjects;
