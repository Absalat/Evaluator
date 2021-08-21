import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "./modules/Section";
import Feedback from "./modules/Feedback";

const TeachingAndLearning = ({
    onChangeHandler,
    teaching_learning_student_feedback_teaching_quality_rating,
    teaching_learning_student_student_feedback_motivation,
    teaching_learning_student_student_feedback_overall_satisfaction,
    teaching_learning_teaching_materials_hard_copy,
    teaching_learning_teaching_materials_e_materials,
    teaching_learning_e_learning_lectures_full_course,
    teaching_learning_e_learning_lectures_part_of_course,
    teaching_learning_student_education_num_of_project_teams,
    teaching_learning_student_education_num_of_projects,
    teaching_learning_student_education_num_of_tutorials,
}) => {
    return (
        <Section title="Teaching and Learning">
            <Box mt={2} />
            <Typography>Student Feedback</Typography>
            <Box mt={2} />
            <Feedback
                label="Teaching Quality"
                name="teaching_learning_student_feedback_teaching_quality_rating"
                value={
                    teaching_learning_student_feedback_teaching_quality_rating
                }
                onChangeHandler={onChangeHandler}
            />
            <Feedback
                label="Motivation"
                name="teaching_learning_student_student_feedback_motivation"
                value={teaching_learning_student_student_feedback_motivation}
                onChangeHandler={onChangeHandler}
            />
            <Feedback
                label="Overall Satisfaction"
                name="teaching_learning_student_student_feedback_overall_satisfaction"
                value={
                    teaching_learning_student_student_feedback_overall_satisfaction
                }
                onChangeHandler={onChangeHandler}
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
                        value={teaching_learning_teaching_materials_hard_copy}
                        name="teaching_learning_teaching_materials_hard_copy"
                        onChange={onChangeHandler}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="e-materials"
                        margin="dense"
                        fullWidth
                        value={teaching_learning_teaching_materials_e_materials}
                        name="teaching_learning_teaching_materials_e_materials"
                        onChange={onChangeHandler}
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
                        value={
                            teaching_learning_e_learning_lectures_full_course
                        }
                        name="teaching_learning_e_learning_lectures_full_course"
                        onChange={onChangeHandler}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Part of course"
                        margin="dense"
                        fullWidth
                        value={
                            teaching_learning_e_learning_lectures_part_of_course
                        }
                        name="teaching_learning_e_learning_lectures_part_of_course"
                        onChange={onChangeHandler}
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
                value={teaching_learning_student_education_num_of_project_teams}
                name="teaching_learning_student_education_num_of_project_teams"
                onChange={onChangeHandler}
            />
            <TextField
                variant="outlined"
                type="number"
                label="Number of projects"
                margin="dense"
                fullWidth
                value={teaching_learning_student_education_num_of_projects}
                name="teaching_learning_student_education_num_of_projects"
                onChange={onChangeHandler}
            />
            <TextField
                variant="outlined"
                type="number"
                label="Number of tutorials"
                margin="dense"
                fullWidth
                value={teaching_learning_student_education_num_of_tutorials}
                name="teaching_learning_student_education_num_of_tutorials"
                onChange={onChangeHandler}
            />
        </Section>
    );
};

export default TeachingAndLearning;
