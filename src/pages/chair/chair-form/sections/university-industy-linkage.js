import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "../../../../components/section/section";

const UniversityIndustryLinkage = () => {
  return (
    <Section title="University industry linkage">
      <Box mt={1} />
      <Typography>Partnership established</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="MoU signed"
            margin="dense"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Joint w/shops"
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
    </Section>
  );
};

export default UniversityIndustryLinkage;
