import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "./modules/Section";
import Feedback from "./modules/Feedback";

const TeachingAndLearning = ({
  onChangeHandler,
  student_feedback_teaching_quality,
  student_feedback_motivation,
  student_feedback_overall_satisfaction,
  teaching_materials_hard_copy,
  teaching_materials_soft_copy,
  e_learning_lectures_full_course,
  e_learning_lectures_part_of_course,
  sert_num_of_project_teams,
  sert_num_of_projects,
  sert_num_of_tutorials
}) => {
  return (
    <Section title="Teaching and Learning">
      <Box mt={2} />
      <Typography>Student Feedback</Typography>
      <Box mt={2} />
      <Feedback
        label="Teaching Quality"
        name="student_feedback_teaching_quality"
        value={student_feedback_teaching_quality}
        onChangeHandler={onChangeHandler}
      />
      <Feedback
        label="Motivation"
        name="student_feedback_motivation"
        value={student_feedback_motivation}
        onChangeHandler={onChangeHandler}
      />
      <Feedback
        label="Overall Satisfaction"
        name="student_feedback_overall_satisfaction"
        value={student_feedback_overall_satisfaction}
        onChangeHandler={onChangeHandler}
      />
      <Box mt={2} />
      <Typography>Teaching Materials</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Hard copy"
            margin="dense"
            value={teaching_materials_hard_copy}
            name="teaching_materials_hard_copy"
            onChange={onChangeHandler}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="e-materials"
            margin="dense"
            fullWidth
            value={teaching_materials_soft_copy}
            name="teaching_materials_soft_copy"
            onChange={onChangeHandler}
          />
        </Grid>
      </Grid>
      <Box mt={2} />
      <Typography>E-learning lectures</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Full course"
            margin="dense"
            fullWidth
            value={e_learning_lectures_full_course}
            name="e_learning_lectures_full_course"
            onChange={onChangeHandler}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Part of course"
            margin="dense"
            fullWidth
            value={e_learning_lectures_part_of_course}
            name="e_learning_lectures_part_of_course"
            onChange={onChangeHandler}
          />
        </Grid>
      </Grid>
      <Box mt={2} />
      <Typography>Student Education & Research Taskforces</Typography>
      <TextField
        variant="outlined"
        type="number"
        label="Number of project teams"
        margin="dense"
        fullWidth
        value={sert_num_of_project_teams}
        name="sert_num_of_project_teams"
        onChange={onChangeHandler}
      />
      <TextField
        variant="outlined"
        type="number"
        label="Number of projects"
        margin="dense"
        fullWidth
        value={sert_num_of_projects}
        name="sert_num_of_projects"
        onChange={onChangeHandler}
      />
      <TextField
        variant="outlined"
        type="number"
        label="Number of tutorials"
        margin="dense"
        fullWidth
        value={sert_num_of_tutorials}
        name="sert_num_of_tutorials"
        onChange={onChangeHandler}
      />
    </Section>
  );
};

export default TeachingAndLearning;
