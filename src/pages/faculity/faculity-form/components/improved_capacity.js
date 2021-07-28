import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React from "react";
const ImprovedCapacity = ({ label, value, name, onChangeHandler }) => {
  return (
    <FormControl fullWidth>
      <FormLabel>{label}</FormLabel>
      <RadioGroup row value={value} onChange={onChangeHandler} name={name}>
        <FormControlLabel value="yes" label="yes" control={<Radio color="primary" />} />
        <FormControlLabel value="no" label="no" control={<Radio color="primary" />} />
      </RadioGroup>
    </FormControl>
  );
};

export default ImprovedCapacity;
