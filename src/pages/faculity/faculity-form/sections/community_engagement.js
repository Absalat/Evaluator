import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "../components/section";

const CommunityEnagement = () => {
  return (
    <Section title="Comunity Enagagement">
      <Box mt={2} />
      <Typography>No. Community services</Typography>
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
        label="Number of people/ communities/ organizations benefited"
        fullWidth
      />
    </Section>
  );
};

export default CommunityEnagement;
