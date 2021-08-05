import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "../../../../components/section/section";

const ChairProfile = () => {
  return (
    <Section title="Chair's Profile">
      <Box mt={2} />
      <TextField
        variant="outlined"
        type="number"
        label="No. of Technical staffs"
        margin="dense"
        fullWidth
      />
      <TextField
        variant="outlined"
        type="number"
        label="No. of B.Sc. holders"
        margin="dense"
        fullWidth
      />
      <TextField
        variant="outlined"
        type="number"
        label="No. of M.Sc. holders"
        margin="dense"
        fullWidth
      />
      <TextField
        variant="outlined"
        type="number"
        label="No. of PhD holders"
        margin="dense"
        fullWidth
      />
      <Box mt={1} />
      <Typography>No. Professors</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            variant="outlined"
            type="number"
            label="Asst. Professor"
            margin="dense"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            variant="outlined"
            type="number"
            label="Assoc. Professor"
            margin="dense"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            variant="outlined"
            type="number"
            label="Full Professor"
            margin="dense"
            fullWidth
          />
        </Grid>
      </Grid>
    </Section>
  );
};

export default ChairProfile;
