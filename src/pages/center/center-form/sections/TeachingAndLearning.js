import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "./modules/Section";
import Feedback from "./modules/Feedback";

const TeachingAndLearning = ({
    onChangeHandler,
    student_feedback_teaching_quality,
    student_feedback_motivation,
    student_feedback_overall_satisfaction,
    teaching_materials_hard_copy,
    teaching_materials_soft_copy,
    e_learning_lectures_full_course,
    e_learning_lectures_part_of_course,
    sert_num_of_project_teams,
    sert_num_of_projects,
    sert_num_of_tutorials,
    disable,
}) => {
    return (
        <Section title="Teaching and Learning">
            <Box mt={2} />
            <Typography>Student Feedback</Typography>
            <Box mt={2} />
            <Feedback
                label="Teaching Quality"
                name="student_feedback_teaching_quality"
                value={student_feedback_teaching_quality}
                onChangeHandler={onChangeHandler}
                disable={disable}
            />
            <Feedback
                label="Motivation"
                name="student_feedback_motivation"
                value={student_feedback_motivation}
                onChangeHandler={onChangeHandler}
                disable={disable}
            />
            <Feedback
                label="Overall Satisfaction"
                name="student_feedback_overall_satisfaction"
                value={student_feedback_overall_satisfaction}
                onChangeHandler={onChangeHandler}
                disable={disable}
            />
            <Box mt={2} />
            <Typography>Teaching Materials</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Hard copy"
                        margin="dense"
                        value={teaching_materials_hard_copy}
                        name="teaching_materials_hard_copy"
                        onChange={onChangeHandler}
                        fullWidth
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
                        value={teaching_materials_soft_copy}
                        name="teaching_materials_soft_copy"
                        onChange={onChangeHandler}
                        disabled={disable}
                    />
                </Grid>
            </Grid>
            <Box mt={2} />
            <Typography>E-learning lectures</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Full course"
                        margin="dense"
                        fullWidth
                        value={e_learning_lectures_full_course}
                        name="e_learning_lectures_full_course"
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
                        value={e_learning_lectures_part_of_course}
                        name="e_learning_lectures_part_of_course"
                        onChange={onChangeHandler}
                        disabled={disable}
                    />
                </Grid>
            </Grid>
            <Box mt={2} />
            <Typography>Student Education & Research Taskforces</Typography>
            <TextField
                variant="outlined"
                type="number"
                label="Number of project teams"
                margin="dense"
                fullWidth
                value={sert_num_of_project_teams}
                name="sert_num_of_project_teams"
                onChange={onChangeHandler}
                disabled={disable}
            />
            <TextField
                variant="outlined"
                type="number"
                label="Number of projects"
                margin="dense"
                fullWidth
                value={sert_num_of_projects}
                name="sert_num_of_projects"
                onChange={onChangeHandler}
                disabled={disable}
            />
            <TextField
                variant="outlined"
                type="number"
                label="Number of tutorials"
                margin="dense"
                fullWidth
                value={sert_num_of_tutorials}
                name="sert_num_of_tutorials"
                onChange={onChangeHandler}
                disabled={disable}
            />
        </Section>
    );
};

export default TeachingAndLearning;
