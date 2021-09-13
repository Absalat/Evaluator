import React from "react";
import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Grid,
    Button,
} from "@material-ui/core";

function FormFilter({
    evaluator,
    evaluation_type,
    semester,
    year,
    onChangeHandler,
}) {
    return (
        <Box mb={3}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <FormControl fullWidth>
                        <InputLabel>Evaluation Form</InputLabel>
                        <Select
                            value={evaluator}
                            name="evaluator"
                            onChange={onChangeHandler}
                        >
                            <MenuItem value="faculty">Dean</MenuItem>
                            <MenuItem value="chair">Faculty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={2}>
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
                </Grid>
                {evaluation_type === "achieved" && (
                    <Grid item xs={12} md={2}>
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
                    </Grid>
                )}
                <Grid item xs={12} md={2}>
                    <FormControl fullWidth>
                        <InputLabel>Year</InputLabel>
                        <Select
                            value={year}
                            name="year"
                            onChange={onChangeHandler}
                        >
                            <MenuItem value="2021">2021</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Box
                        display="flex"
                        justifyContent="flex-end"
                        alignItems="stretch"
                        height="100%"
                    >
                        <Button
                            fullWidth
                            type="submit"
                            color="primary"
                            variant="contained"
                        >
                            View
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default FormFilter;
