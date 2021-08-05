import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "../../../../components/section/section";

const Consultancy = () => {
  return (
    <Section title="Consultancy">
      <Box mt={1} />
      <Typography>No. consult. services</Typography>
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
        label="Consult. icome generated (Birr)"
        margin="dense"
        fullWidth
      />
    </Section>
  );
};

export default Consultancy;
