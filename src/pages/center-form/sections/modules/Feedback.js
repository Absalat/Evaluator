import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from "@material-ui/core";
import React from "react";

const Feedback = ({ label, value, name, onChangeHandler }) => {
    return (
        <div>
            <FormControl fullWidth>
                <FormLabel>{label}</FormLabel>
                <RadioGroup
                    row
                    value={value}
                    onChange={onChangeHandler}
                    name={name}
                >
                    {[1, 2, 3, 4, 5].map((val) => (
                        <FormControlLabel
                            key={val}
                            style={{ flexGrow: 1 }}
                            value={val.toString()}
                            label={val}
                            control={<Radio color="primary" />}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        </div>
    );
};

export default Feedback;
