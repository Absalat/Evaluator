import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "../../../../components/section/section";

const Consultancy = ({
  onChangeHandler,
  num_of_consulting_services_initiated,
  num_of_consulting_services_completed,
  consulting_income_generated,
  short_term_training
}) => {
  return (
    <Section title="Consultancy">
      <TextField
        variant="outlined"
        type="number"
        margin="dense"
        label="Short term training"
        fullWidth
        onChange={onChangeHandler}
        name="short_term_training"
        value={short_term_training}
      />
      <Box mt={2} />
      <Typography>No. consult. services</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Initiated"
            margin="dense"
            fullWidth
            onChange={onChangeHandler}
            name="num_of_consulting_services_initiated"
            value={num_of_consulting_services_initiated}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Completed"
            margin="dense"
            fullWidth
            onChange={onChangeHandler}
            name="num_of_consulting_services_completed"
            value={num_of_consulting_services_completed}
          />
        </Grid>
      </Grid>
      <TextField
        variant="outlined"
        type="number"
        margin="dense"
        label="Consult. income generated (Birr)"
        fullWidth
        onChange={onChangeHandler}
        name="consulting_income_generated"
        value={consulting_income_generated}
      />
    </Section>
  );
};

export default Consultancy;
