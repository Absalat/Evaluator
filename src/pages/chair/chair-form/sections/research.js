import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "../../../../components/section/section";

const Research = () => {
  return (
    <Section title="Research">
      <Box mt={1} />
      <Typography>No. research grants applied</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Internal"
            margin="dense"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="External"
            margin="dense"
            fullWidth
          />
        </Grid>
      </Grid>
      <Box mt={1} />
      <Typography>Amount Of grant secured</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Internal"
            margin="dense"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="External"
            margin="dense"
            fullWidth
          />
        </Grid>
      </Grid>
      <Box mt={1} />
      <Typography>PhD students supervision</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Internal"
            margin="dense"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="External"
            margin="dense"
            fullWidth
          />
        </Grid>
      </Grid>
      <Box mt={1} />
      <Typography>M.Sc students supervision</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            variant="outlined"
            type="number"
            label="Enrolled"
            margin="dense"
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
            label="Manuscripts produced"
            margin="dense"
            fullWidth
          />
        </Grid>
      </Grid>
    </Section>
  );
};

export default Research;
