import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "../../../../components/section/section";

const TechnologyTransfer = ({
  onChangeHandler,
  it_projects_initiated,
  it_projects_completed,
  patented_research_outputs,
  enterprise_encubated,
  disable
}) => {
  return (
    <Section title="Technology Transfer">
      <Box mt={2} />
      <Typography>M.Sc students supervision</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Initiated"
            margin="dense"
            fullWidth
            onChange={onChangeHandler}
            name="it_projects_initiated"
            value={it_projects_initiated}
            disabled={disable}
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
            name="it_projects_completed"
            value={it_projects_completed}
            disabled={disable}
          />
        </Grid>
      </Grid>
      <TextField
        variant="outlined"
        type="number"
        margin="dense"
        label="Patented research outputs"
        fullWidth
        onChange={onChangeHandler}
        name="patented_research_outputs"
        value={patented_research_outputs}
        disabled={disable}
        />
      <TextField
        variant="outlined"
        type="number"
        margin="dense"
        label="Enterprise incubated"
        fullWidth
        name="enterprise_encubated"
        value={enterprise_encubated}
        onChange={onChangeHandler}
        disabled={disable}
        />
    </Section>
  );
};

export default TechnologyTransfer;
