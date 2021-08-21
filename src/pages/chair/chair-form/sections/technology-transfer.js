import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "../../../../components/section/section";

const TechnologyTransfer = ({
  onChangeHandler,
  it_projects_initiated,
  it_projects_completed,
  patented_research_outputs
}) => {
  return (
    <Section title="Technology Transfer">
      <Box mt={1} />
      <Typography>It projects</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Initiated"
            margin="dense"
            fullWidth
            name="it_projects_initiated"
            value={it_projects_initiated}
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
            name="it_projects_completed"
            value={it_projects_completed}
            onChange={onChangeHandler}
          />
        </Grid>
      </Grid>
      <TextField
        variant="outlined"
        type="number"
        label="Patented research outputs"
        margin="dense"
        fullWidth
      />
    </Section>
  );
};

export default TechnologyTransfer;
