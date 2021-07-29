import { Box, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from "@material-ui/core";
import React from "react";
import Section from "../components/section";

const ImprovedCapacity = ({
  onChangeHandler,
  hdpTraining,
  entrepreneurshipTraining,
  otherTraining,
  higherDegreeEarned,
}) => {
  return (
    <Section title="Improved capacity or skills">
      <Box mt={2} />
      <FormControl fullWidth>
        <FormLabel>HDP Training</FormLabel>
        <RadioGroup
          row
          value={hdpTraining}
          onChange={onChangeHandler}
          name="HDPTraining"
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
          value={entrepreneurshipTraining}
          onChange={onChangeHandler}
          name="entrepreneurshipTraining"
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
          value={otherTraining}
          onChange={onChangeHandler}
          name="otherTraining"
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
          value={higherDegreeEarned}
          name="higherDegreeEarned"
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
