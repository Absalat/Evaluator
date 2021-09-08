import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "../../../../components/section/section";

const EntrepreneurialProjects = ({
  onChangeHandler,
  bsc_msc_student_advised_partially_done,
  bsc_msc_student_advised_completed,
  bsc_msc_student_advised_prototype_developed,
  personally_executed_partially_done,
  personally_executed_completed,
  personally_executed_prototype_developed ,
  disable 
}) => {
  return (
    <Section title="Entrepreneurial Projects">
      <Box mt={2} />

      <Typography>B.Sc/ M.Sc student advised</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            variant="outlined"
            type="number"
            margin="dense"
            label="Partially done"
            name={"bsc_msc_student_advised_partially_done"}
            value={bsc_msc_student_advised_partially_done}
            onChange={onChangeHandler}
            fullWidth
            disabled={disable}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            variant="outlined"
            type="number"
            label="Completed"
            margin="dense"
            fullWidth
            name="bsc_msc_student_advised_completed"
            value={bsc_msc_student_advised_completed}
            onChange={onChangeHandler}
            disabled={disable}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            variant="outlined"
            type="number"
            margin="dense"
            label="Prototype developed"
            fullWidth
            name="bsc_msc_student_advised_prototype_developed"
            value={bsc_msc_student_advised_prototype_developed}
            onChange={onChangeHandler}
            disabled={disable}
          />
        </Grid>
      </Grid>
      <Box mt={2} />
      <Typography>Personally executed</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            variant="outlined"
            type="number"
            margin="dense"
            label="Partially done"
            fullWidth
            name="personally_executed_partially_done"
            value={personally_executed_partially_done}
            onChange={onChangeHandler}
            disabled={disable}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            variant="outlined"
            type="number"
            label="Completed"
            margin="dense"
            fullWidth
            name="personally_executed_completed"
            value={personally_executed_completed}
            onChange={onChangeHandler}
            disabled={disable}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            variant="outlined"
            type="number"
            margin="dense"
            label="Prototype developed"
            fullWidth
            name="personally_executed_prototype_developed"
            value={personally_executed_prototype_developed}
            onChange={onChangeHandler}
            disabled={disable}
          />
        </Grid>
      </Grid>
    </Section>
  );
};

export default EntrepreneurialProjects;
