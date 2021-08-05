import { Box, TextField } from "@material-ui/core";
import React from "react";
import Section from "../../../../components/section/section";

const CooperationWithUniversityAbroad = () => {
  return (
    <Section title="Cooperation with university abroad">
      <TextField
        variant="outlined"
        type="number"
        label="Faculty exchanges"
        margin="dense"
        fullWidth
      />
       <TextField
        variant="outlined"
        type="number"
        label="Student exchanges"
        margin="dense"
        fullWidth
      />
       <TextField
        variant="outlined"
        type="number"
        label="Joint projects"
        margin="dense"
        fullWidth
      />
    </Section>
  );
};

export default CooperationWithUniversityAbroad;
