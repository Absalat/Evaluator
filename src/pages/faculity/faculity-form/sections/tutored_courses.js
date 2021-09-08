import { Box, Grid, TextField } from "@material-ui/core";
import React from "react";
import Section from "../../../../components/section/section";

const TutoredCourses = ({
  tutored_bsc_courses,
  tutored_msc_courses,
  tutored_phd_courses,
  onChangeHandler,
  disable
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
            value={tutored_bsc_courses}
            name="tutored_bsc_courses"
            onChange={onChangeHandler}
            inputProps={{
              min:0
            }}
            fullWidth
            disabled={disable}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            variant="outlined"
            type="number"
            label="M.Sc course"
            margin="dense"
            fullWidth
            value={tutored_msc_courses}
            name="tutored_msc_courses"
            onChange={onChangeHandler}
            disabled={disable}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            variant="outlined"
            type="number"
            margin="dense"
            label="PhD course"
            fullWidth
            value={tutored_phd_courses}
            name="tutored_phd_courses"
            onChange={onChangeHandler}
            disabled={disable}
          />
        </Grid>
      </Grid>
    </Section>
  );
};

export default TutoredCourses;
