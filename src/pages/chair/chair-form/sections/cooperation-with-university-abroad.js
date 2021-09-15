import { Box, TextField } from "@material-ui/core";
import React from "react";
import Section from "../../../../components/section/section";

const CooperationWithUniversityAbroad = ({
  onChangeHandler,
  faculty_exchanges,
  student_exchanges,
  joint_projects
}) => {
  return (
    <Section title="Cooperation with university abroad">
      <TextField
        variant="outlined"
        type="number"
        label="Faculty exchanges"
        margin="dense"
        fullWidth
        name="faculty_exchanges"
        value={faculty_exchanges}
        onChange={onChangeHandler}
      />
       <TextField
        variant="outlined"
        type="number"
        label="Student exchanges"
        margin="dense"
        fullWidth
        name="student_exchanges"
        value={student_exchanges}
        onChange={onChangeHandler}
      />
       <TextField
        variant="outlined"
        type="number"
        label="Joint projects"
        margin="dense"
        fullWidth
        name="joint_projects"
        value={joint_projects}
        onChange={onChangeHandler}
      />
    </Section>
  );
};

export default CooperationWithUniversityAbroad;
