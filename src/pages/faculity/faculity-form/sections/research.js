import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "../../../../components/section/section";

const Research = ({
  onChangeHandler,
  num_of_research_grants_applied_internal,
  num_of_research_grants_applied_external,
  amount_of_grant_secured_internal,
  amount_of_grant_secured_external,
  phd_students_supervision_enrolled,
  phd_students_supervision_completed,
  msc_students_supervision_enrolled,
  msc_students_supervision_completed,
  disable
}) => {
  return (
    <Section title="Research">
      <Box mt={2} />
      <Typography>No. research grants secured</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Internal"
            margin="dense"
            fullWidth
            onChange={onChangeHandler}
            name="num_of_research_grants_applied_internal"
            value={num_of_research_grants_applied_internal}
            disabled={disable}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="External"
            margin="dense"
            fullWidth
            onChange={onChangeHandler}
            name="num_of_research_grants_applied_external"
            value={num_of_research_grants_applied_external}
            disabled={disable}
          />
        </Grid>
      </Grid>
      <Box mt={2} />
      <Typography>Amount of grant secured</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Internal"
            margin="dense"
            fullWidth
            onChange={onChangeHandler}
            name="amount_of_grant_secured_internal"
            value={amount_of_grant_secured_internal}
            disabled={disable}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="External"
            margin="dense"
            fullWidth
            onChange={onChangeHandler}
            name="amount_of_grant_secured_external"
            value={amount_of_grant_secured_external}
            disabled={disable}
          />
        </Grid>
      </Grid>
      <Box mt={2} />
      <Typography>PhD students supervision</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Internal"
            margin="dense"
            fullWidth
            onChange={onChangeHandler}
            name="phd_students_supervision_enrolled"
            value={phd_students_supervision_enrolled}
            disabled={disable}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="External"
            margin="dense"
            fullWidth
            onChange={onChangeHandler}
            name="phd_students_supervision_completed"
            value={phd_students_supervision_completed}
            disabled={disable}
          />
        </Grid>
      </Grid>
      <Box mt={2} />
      <Typography>M.Sc students supervision</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Internal"
            margin="dense"
            fullWidth
            onChange={onChangeHandler}
            name="msc_students_supervision_enrolled"
            value={msc_students_supervision_enrolled}
            disabled={disable}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="External"
            margin="dense"
            fullWidth
            onChange={onChangeHandler}
            name="msc_students_supervision_completed"
            value={msc_students_supervision_completed}
            disabled={disable}
          />
        </Grid>
      </Grid>
    </Section>
  );
};

export default Research;
