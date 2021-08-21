import React from "react";
import { Box, Grid, TextField, Typography } from "@material-ui/core";
import Section from "./modules/Section";

const StaffCapacity = ({
  onChangeHandler,
  hdp_training,
  msc_started,
  msc_completed,
  phd_started,
  phd_completed,
  special_training,
}) => {
  return (
    <Section title="Staff Capacity Building">
      <TextField
        variant="outlined"
        type="number"
        margin="dense"
        label="HDP Training"
        fullWidth
        onChange={onChangeHandler}
        name="hdp_training"
        value={hdp_training}
      />
      <Box mt={2} />
      <Typography>Study for higher degree</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="M.Sc. Started"
            margin="dense"
            fullWidth
            onChange={onChangeHandler}
            name="msc_started"
            value={msc_started}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="M.Sc. Completed"
            margin="dense"
            fullWidth
            onChange={onChangeHandler}
            name="msc_completed"
            value={msc_completed}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="PhD Started"
            margin="dense"
            fullWidth
            onChange={onChangeHandler}
            name="phd_started"
            value={phd_started}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Phd Completed"
            margin="dense"
            fullWidth
            onChange={onChangeHandler}
            name="phd_completed"
            value={phd_completed}
          />
        </Grid>
      </Grid>
      <Box mt={2} />
      <Typography>Special Training</Typography>
      <TextField
        variant="outlined"
        type="number"
        margin="dense"
        label=""
        fullWidth
        onChange={onChangeHandler}
        name="special_training"
        value={special_training}
      />
    </Section>
  );
};

export default StaffCapacity;
