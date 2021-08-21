import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@material-ui/core";
import React from "react";
import Section from "./Section";

const EvaluationType = ({ onChangeHandler, evaluation_type, semester }) => {
    return (
        <Section>
            <FormControl fullWidth>
                <InputLabel>Evaluation Type</InputLabel>
                <Select
                    value={evaluation_type}
                    name="evaluation_type"
                    onChange={onChangeHandler}
                >
                    <MenuItem value="expected">expected</MenuItem>
                    <MenuItem value="achieved">achieved</MenuItem>
                </Select>
            </FormControl>
            <Box mt={2} />
            {evaluation_type === "achieved" && (
                <FormControl fullWidth>
                    <InputLabel>Semester</InputLabel>
                    <Select
                        value={semester}
                        name="semester"
                        onChange={onChangeHandler}
                    >
                        <MenuItem value="1">one</MenuItem>
                        <MenuItem value="2">two</MenuItem>
                    </Select>
                </FormControl>
            )}
        </Section>
    );
};

export default EvaluationType;
