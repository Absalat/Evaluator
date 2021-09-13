import {
    Box,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from "@material-ui/core";
import React from "react";
import Section from "../../../../components/section/section";

const TeachingAndLearning = ({
    onChangeHandler,
    student_feedback_teaching_quality,
    student_feedback_teaching_motivation,
    student_feedback_overall_satisfaction,
    teaching_materials_hard_copy,
    teaching_materials_soft_copy,
    e_learning_lectures_full_course,
    e_learning_lectures_part_of_course,
    disable,
}) => {
    return (
        <Section title="Teaching and Learning">
            <Box mt={1} />
            <Typography>Study for Higher degree</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <FormControl fullWidth>
                        <FormLabel>Teaching Quality</FormLabel>
                        <RadioGroup
                            row
                            value={student_feedback_teaching_quality}
                            onChange={onChangeHandler}
                            name="student_feedback_teaching_quality"
                        >
                            <FormControlLabel
                                value="yes"
                                label="yes"
                                control={<Radio color="primary" />}
                                disabled={disable}
                            />
                            <FormControlLabel
                                value="no"
                                label="no"
                                control={<Radio color="primary" />}
                                disabled={disable}
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                    <FormControl fullWidth>
                        <FormLabel>Motivation</FormLabel>
                        <RadioGroup
                            row
                            value={student_feedback_teaching_motivation}
                            onChange={onChangeHandler}
                            name="student_feedback_teaching_motivation"
                        >
                            <FormControlLabel
                                value="yes"
                                label="yes"
                                control={<Radio color="primary" />}
                                disabled={disable}
                            />
                            <FormControlLabel
                                value="no"
                                label="no"
                                control={<Radio color="primary" />}
                                disabled={disable}
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                    <FormControl fullWidth>
                        <FormLabel>Overall Satisfaction</FormLabel>
                        <RadioGroup
                            row
                            value={student_feedback_overall_satisfaction}
                            onChange={onChangeHandler}
                            name="student_feedback_overall_satisfaction"
                        >
                            <FormControlLabel
                                value="yes"
                                label="yes"
                                control={<Radio color="primary" />}
                                disabled={disable}
                            />
                            <FormControlLabel
                                value="no"
                                label="no"
                                control={<Radio color="primary" />}
                                disabled={disable}
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
            <Box mt={1} />
            <Typography>Teaching materials</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Hard copy"
                        margin="dense"
                        fullWidth
                        name="teaching_materials_hard_copy"
                        value={teaching_materials_hard_copy}
                        onChange={onChangeHandler}
                        disabled={disable}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="e-materials"
                        margin="dense"
                        fullWidth
                        name="teaching_materials_soft_copy"
                        value={teaching_materials_soft_copy}
                        onChange={onChangeHandler}
                        disabled={disable}
                    />
                </Grid>
            </Grid>
            <Box mt={1} />
            <Typography>e-learning lectures</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Full course"
                        margin="dense"
                        fullWidth
                        name="e_learning_lectures_full_course"
                        value={e_learning_lectures_full_course}
                        onChange={onChangeHandler}
                        disabled={disable}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Part of course"
                        margin="dense"
                        fullWidth
                        name="e_learning_lectures_part_of_course"
                        value={e_learning_lectures_part_of_course}
                        onChange={onChangeHandler}
                        disabled={disable}
                    />
                </Grid>
            </Grid>
        </Section>
    );
};

export default TeachingAndLearning;
