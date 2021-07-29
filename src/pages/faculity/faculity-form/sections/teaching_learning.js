import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "../components/section";
import StudentFeedback from "../components/student_feedback";

const TeachingLearning = ({
  onChangeHandler,
  teachingQuality,
  motivation,
  overallSatisfaction,
  HardCopyTeachingMaterial,
  eMaterialTeachingMaterial,
  fullCourseELearningLectures,
  partOfCourseELearningLectures,
  numberOfExcercises,
  labCourseSupervised,
}) => {
  return (
    <Section title="Teaching and Learning">
      <Box mt={2} />
      <StudentFeedback
        label="Teaching Quality"
        name="teachingQuality"
        value={teachingQuality}
        onChangeHandler={onChangeHandler}
      />
      <StudentFeedback
        label="Motivation"
        name="motivation"
        value={motivation}
        onChangeHandler={onChangeHandler}
      />
      <StudentFeedback
        label="Overall Satisfaction"
        name="overallSatisfaction"
        value={overallSatisfaction}
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
            value={HardCopyTeachingMaterial}
            name="HardCopyTeachingMaterial"
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
            value={eMaterialTeachingMaterial}
            name="eMaterialTeachingMaterial"
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
            value={fullCourseELearningLectures}
            name="fullCourseELearningLectures"
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
            value={partOfCourseELearningLectures}
            name="partOfCourseELearningLectures"
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
        value={numberOfExcercises}
        name="numberOfExcercises"
        onChange={onChangeHandler}
      />
      <TextField
        variant="outlined"
        type="number"
        label="Laboratory courses supervised"
        margin="dense"
        fullWidth
        value={labCourseSupervised}
        name="labCourseSupervised"
        onChange={onChangeHandler}
      />
    </Section>
  );
};

export default TeachingLearning;
