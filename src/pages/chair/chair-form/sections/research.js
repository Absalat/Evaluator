import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "../../../../components/section/section";

const Research = ({
  onChangeHandler,
  num_of_research_grant_applied_internal,
  num_of_research_grant_applied_external,
  amount_of_grant_secured_internal,
  amount_of_grant_secured_external,
  phd_students_supervision_enrolled,
  phd_students_supervision_completed,
  msc_students_supervision_enrolled,
  msc_students_supervision_completed,
  msc_students_supervision_manuscripts_produced,
}) => {
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
            name="num_of_research_grant_applied_internal"
            value={num_of_research_grant_applied_internal}
            onChange={onChangeHandler}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="External"
            margin="dense"
            fullWidth
            name="num_of_research_grant_applied_external"
            value={num_of_research_grant_applied_external}
            onChange={onChangeHandler}
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
            name="amount_of_grant_secured_internal"
            value={amount_of_grant_secured_internal}
            onChange={onChangeHandler}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="External"
            margin="dense"
            fullWidth
            name="amount_of_grant_secured_external"
            value={amount_of_grant_secured_external}
            onChange={onChangeHandler}
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
            name="phd_students_supervision_enrolled"
            value={phd_students_supervision_enrolled}
            onChange={onChangeHandler}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="External"
            margin="dense"
            fullWidth
            name="phd_students_supervision_completed"
            value={phd_students_supervision_completed}
            onChange={onChangeHandler}
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
            name="msc_students_supervision_enrolled"
            value={msc_students_supervision_enrolled}
            onChange={onChangeHandler}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            variant="outlined"
            type="number"
            label="Completed"
            margin="dense"
            fullWidth
            name="msc_students_supervision_completed"
            value={msc_students_supervision_completed}
            onChange={onChangeHandler}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            variant="outlined"
            type="number"
            label="Manuscripts produced"
            margin="dense"
            fullWidth
            name="msc_students_supervision_manuscripts_produced"
            value={msc_students_supervision_manuscripts_produced}
            onChange={onChangeHandler}
          />
        </Grid>
      </Grid>
    </Section>
  );
};

export default Research;
