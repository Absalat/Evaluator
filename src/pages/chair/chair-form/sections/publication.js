import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "../../../../components/section/section";

const Publication = () => {
  return (
    <Section title="Publication">
      <Box mt={1} />
      <Typography>Published Journal papers</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="National"
            margin="dense"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="International"
            margin="dense"
            fullWidth
          />
        </Grid>
      </Grid>
      <Box mt={1} />
      <Typography>Submitted journal papers</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="National"
            margin="dense"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="International"
            margin="dense"
            fullWidth
          />
        </Grid>
      </Grid>
      <Box mt={1} />
      <Typography>Conference Proceedings</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="National"
            margin="dense"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="International"
            margin="dense"
            fullWidth
          />
        </Grid>
      </Grid>
    </Section>
  );
};

export default Publication;
