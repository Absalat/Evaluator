import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "../../../../components/section/section";

const Consultancy = ({
  onChangeHandler,
  num_of_consulting_services_initiated,
  num_of_consulting_services_completed,
  consulting_income_generated,
}) => {
  return (
    <Section title="Consultancy">
      <Box mt={1} />
      <Typography>No. consult. services</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Initiated"
            margin="dense"
            fullWidth
            name="num_of_consulting_services_initiated"
            value={num_of_consulting_services_initiated}
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
            name="num_of_consulting_services_completed"
            value={num_of_consulting_services_completed}
            onChange={onChangeHandler}
          />
        </Grid>
      </Grid>
      <TextField
        variant="outlined"
        type="number"
        label="Consult. icome generated (Birr)"
        margin="dense"
        fullWidth
        name="consulting_income_generated"
        value={consulting_income_generated}
        onChange={onChangeHandler}
      />
    </Section>
  );
};

export default Consultancy;
