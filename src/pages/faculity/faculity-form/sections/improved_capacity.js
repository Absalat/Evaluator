import { Box, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from "@material-ui/core";
import React from "react";
import Section from "../../../../components/section/section";

const ImprovedCapacity = ({
  onChangeHandler,
  hdp_training,
  entrepreneurship_training,
  other_trainings_skills_gained,
  higher_degree_earned,
}) => {
  return (
    <Section title="Improved capacity or skills">
      <Box mt={2} />
      <FormControl fullWidth>
        <FormLabel>HDP Training</FormLabel>
        <RadioGroup
          row
          value={hdp_training}
          onChange={onChangeHandler}
          name="hdp_training"
        >
          <FormControlLabel
            value="yes"
            label="yes"
            control={<Radio color="primary" />}
          />
          <FormControlLabel
            value="no"
            label="no"
            control={<Radio color="primary" />}
          />
        </RadioGroup>
      </FormControl>

      <FormControl fullWidth>
        <FormLabel>Entrepreneurship Training</FormLabel>
        <RadioGroup
          row
          value={entrepreneurship_training}
          onChange={onChangeHandler}
          name="entrepreneurship_training"
        >
          <FormControlLabel
            value="yes"
            label="yes"
            control={<Radio color="primary" />}
          />
          <FormControlLabel
            value="no"
            label="no"
            control={<Radio color="primary" />}
          />
        </RadioGroup>
      </FormControl>

      <FormControl fullWidth>
        <FormLabel>Other Training/ Skill Gained</FormLabel>
        <RadioGroup
          row
          value={other_trainings_skills_gained}
          onChange={onChangeHandler}
          name="other_trainings_skills_gained"
        >
          <FormControlLabel
            value="yes"
            label="yes"
            control={<Radio color="primary" />}
          />
          <FormControlLabel
            value="no"
            label="no"
            control={<Radio color="primary" />}
          />
        </RadioGroup>
      </FormControl>
      <Box mt={2} />
      <FormControl fullWidth>
        <InputLabel>Higher Degree Earned</InputLabel>
        <Select
          value={higher_degree_earned}
          name="higher_degree_earned"
          onChange={onChangeHandler}
        >
          <MenuItem value="bsc">B.Sc</MenuItem>
          <MenuItem value="msc">M.Sc</MenuItem>
          <MenuItem value="phd">P.H.D</MenuItem>
        </Select>
      </FormControl>
    </Section>
  );
};

export default ImprovedCapacity;
