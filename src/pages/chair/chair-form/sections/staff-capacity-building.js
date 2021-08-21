import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "../../../../components/section/section";

const StaffCapacityBuilding = ({
  onChangeHandler,
  hdp_training,
  higher_degree_study_started,
  higher_degree_study_completed,
  special_training_started,
  special_training_completed,
}) => {
  return (
    <Section title="Staff Capacity Building">
      <TextField
        variant="outlined"
        type="number"
        label="HDP training"
        margin="dense"
        fullWidth
        name="hdp_training"
        value={hdp_training}
        onChange={onChangeHandler}
      />
      <Box mt={1} />
      <Typography>Study for Higher degree</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Started"
            margin="dense"
            fullWidth
            name="higher_degree_study_started"
            value={higher_degree_study_started}
            onChange={onChangeHandler}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Completed"
            margin="dense"
            fullWidth
            name="higher_degree_study_completed"
            value={higher_degree_study_completed}
            onChange={onChangeHandler}
          />
        </Grid>
      </Grid>
      <Box mt={1} />
      <Typography>Other special training</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Started"
            margin="dense"
            fullWidth
            name="special_training_started"
            value={special_training_started}
            onChange={onChangeHandler}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Completed"
            margin="dense"
            fullWidth
            name="special_training_completed"
            value={special_training_completed}
            onChange={onChangeHandler}
          />
        </Grid>
      </Grid>
    </Section>
  );
};

export default StaffCapacityBuilding;
