import { TextField } from "@material-ui/core";
import React from "react";
import Section from "../../../../components/section/section";

const CooperationWithUniversityAbroad = ({
  onChangeHandler,
  faculty_exchange,
  joint_projects,
  disable
}) => {
  return (
    <Section title="Cooperation with university abroad">
      <TextField
        variant="outlined"
        type="number"
        margin="dense"
        label="Faculity exchange"
        fullWidth
        onChange={onChangeHandler}
        name="faculty_exchange"
        value={faculty_exchange}
        disabled={disable}
      />
      <TextField
        variant="outlined"
        type="number"
        margin="dense"
        label="Joint projects"
        fullWidth
        onChange={onChangeHandler}
        name="joint_projects"
        value={joint_projects}
        disabled={disable}
      />
    </Section>
  );
};

export default CooperationWithUniversityAbroad;
