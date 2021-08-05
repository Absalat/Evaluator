import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "../../../../components/section/section";

const TeachingAndLearning = () => {
  return (
    <Section title="Teaching and Learning">
      <Box mt={1} />
      <Typography>Study for Higher degree</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            variant="outlined"
            type="number"
            label="Teaching quality"
            margin="dense"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            variant="outlined"
            type="number"
            label="Motivation"
            margin="dense"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            variant="outlined"
            type="number"
            label="Overall Satisfaction"
            margin="dense"
            fullWidth
          />
        </Grid>
      </Grid>
      <Box mt={1} />
      <Typography>Teaching materials</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Hard copy"
            margin="dense"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="e-materials"
            margin="dense"
            fullWidth
          />
        </Grid>
      </Grid>
      <Box mt={1} />
      <Typography>e-learning lectures</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Full course"
            margin="dense"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Part of course"
            margin="dense"
            fullWidth
          />
        </Grid>
      </Grid>
    </Section>
  );
};

export default TeachingAndLearning;
