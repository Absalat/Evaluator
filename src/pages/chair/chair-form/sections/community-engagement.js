import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "../../../../components/section/section";

const CommunityEngagement = () => {
  return (
    <Section title="Community Engagement">
      <Box mt={1} />
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
        label="Number of people/ communities / organizations benefited"
        margin="dense"
        fullWidth
      />
    </Section>
  );
};

export default CommunityEngagement;
