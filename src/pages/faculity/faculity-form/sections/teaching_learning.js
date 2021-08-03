import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "../../../../components/section/section";
import StudentFeedback from "../components/student_feedback";

const TeachingLearning = ({
  onChangeHandler,
  student_feedback_teaching_quality_rating,
  student_feedback_motivation,
  student_feedback_overall_satisfaction,
  teaching_materials_hard_copy,
  teaching_materials_soft_copy,
  e_learning_lectures_full_course,
  e_learning_lectures_part_of_course,
  tutorial_exercises_num_of_exercises,
  laboratory_courses_supervised,
}) => {
  return (
    <Section title="Teaching and Learning">
      <Box mt={2} />
      <StudentFeedback
        label="Teaching Quality"
        name="student_feedback_teaching_quality_rating"
        value={student_feedback_teaching_quality_rating}
        onChangeHandler={onChangeHandler}
      />
      <StudentFeedback
        label="Motivation"
        name="student_feedback_motivation"
        value={student_feedback_motivation}
        onChangeHandler={onChangeHandler}
      />
      <StudentFeedback
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
      <Typography>Tutorial exercises</Typography>
      <TextField
        variant="outlined"
        type="number"
        label="No. of exercises"
        margin="dense"
        fullWidth
        value={tutorial_exercises_num_of_exercises}
        name="tutorial_exercises_num_of_exercises"
        onChange={onChangeHandler}
      />
      <TextField
        variant="outlined"
        type="number"
        label="Laboratory courses supervised"
        margin="dense"
        fullWidth
        value={laboratory_courses_supervised}
        name="laboratory_courses_supervised"
        onChange={onChangeHandler}
      />
    </Section>
  );
};

export default TeachingLearning;
