import { Box, Grid, TextField } from "@material-ui/core";
import React from "react";
import Section from "../components/section";

const TutoredCourses = ({
  bscTutoredCourse,
  mscTutoredCourse,
  phdTutoredCourse,
  onChangeHandler
}) => {
  return (
    <Section title="Tutored Courses">
      <Box mt={2} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            variant="outlined"
            type="number"
            margin="dense"
            label="B.Sc course"
            value={bscTutoredCourse}
            name="bscTutoredCourse"
            onChange={onChangeHandler}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            variant="outlined"
            type="number"
            label="M.Sc course"
            margin="dense"
            fullWidth
            value={mscTutoredCourse}
            name="mscTutoredCourse"
            onChange={onChangeHandler}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            variant="outlined"
            type="number"
            margin="dense"
            label="PhD course"
            fullWidth
            value={phdTutoredCourse}
            name="phdTutoredCourse"
            onChange={onChangeHandler}
          />
        </Grid>
      </Grid>
    </Section>
  );
};

export default TutoredCourses;
