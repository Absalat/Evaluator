import { TextField } from "@material-ui/core";
import React from "react";
import Section from "../components/section";

const CooperationWithUniversityAbroad = () => {
  return (
    <Section title="Cooperation with university abroad">
      <TextField
        variant="outlined"
        type="number"
        margin="dense"
        label="Faculity exchange"
        fullWidth
      />
      <TextField
        variant="outlined"
        type="number"
        margin="dense"
        label="Joint projects"
        fullWidth
      />
    </Section>
  );
};

export default CooperationWithUniversityAbroad;
