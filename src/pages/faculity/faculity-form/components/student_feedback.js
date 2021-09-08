import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React from "react";

const StudentFeedback = ({label,value,name,onChangeHandler,disable}) => {
  return (
    <div>
      <FormControl fullWidth>
        <FormLabel>{label}</FormLabel>
        <RadioGroup
          row
          value={value.toString()}
          onChange={onChangeHandler}
          name={name}
        >
          {[1, 2, 3, 4, 5].map((val) => (
            <FormControlLabel style={{flexGrow:1}}
              value={val.toString()}
              label={val}
              control={<Radio color="primary"/>}
              disabled={disable}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default StudentFeedback;
