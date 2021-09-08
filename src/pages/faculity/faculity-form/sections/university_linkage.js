import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "../../../../components/section/section";

const UniversityLinkage = ({
  onChangeHandler,
  invited_industrialists_number,
  invited_industrialists_percent_course_covered,
  invited_industrialists_num_of_joint_projects,
  industry_projects_initiated,
  industry_projects_completed,
  mentoring_internship_students_number,
  disable
}) => {
  return (
    <Section title="University industry linkage">
      <Box mt={2} />
      <Typography>Invited industrialists</Typography>
      <TextField
        variant="outlined"
        type="number"
        margin="dense"
        label="Number"
        fullWidth
        onChange={onChangeHandler}
        name="invited_industrialists_number"
        value={invited_industrialists_number}
        disabled={disable}
      />
      <TextField
        variant="outlined"
        type="number"
        margin="dense"
        label="% course covered"
        fullWidth
        onChange={onChangeHandler}
        name="invited_industrialists_percent_course_covered"
        value={invited_industrialists_percent_course_covered}
        disabled={disable}

      />
      <TextField
        variant="outlined"
        type="number"
        margin="dense"
        label="No. joint projects"
        fullWidth
        onChange={onChangeHandler}
        name="invited_industrialists_num_of_joint_projects"
        value={invited_industrialists_num_of_joint_projects}
        disabled={disable}
      />
      <Box mt={2} />
      <Typography>Industry Projects</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Initiated"
            margin="dense"
            fullWidth
            onChange={onChangeHandler}
            name="industry_projects_initiated"
            value={industry_projects_initiated}
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
            name="industry_projects_completed"
            value={industry_projects_completed}
            disabled={disable}
          />
        </Grid>
      </Grid>
      <Box mt={2} />
      <Typography>Mentoring internship students</Typography>
      <TextField
        variant="outlined"
        type="number"
        margin="dense"
        label="Number"
        fullWidth
        onChange={onChangeHandler}
        name="mentoring_internship_students_number"
        value={mentoring_internship_students_number}
        disabled={disable}
      />
    </Section>
  );
};

export default UniversityLinkage;
