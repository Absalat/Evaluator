import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "./modules/Section";

const Entrepreneurship = ({
    onChangeHandler,
    entrepreneurship_courses_num_of_students,
    entrepreneurship_training_num_of_trainings,
    entrepreneurship_training_num_of_students,
    entrepreneurship_project_num_of_projects,
    entrepreneurship_project_num_of_students,
    entrepreneurship_motivational_programs_num_of_programs,
    entrepreneurship_motivational_programs_num_of_attendees,
}) => {
    return (
        <Section title="Entrepreneurship">
            <Box mt={2} />
            <Typography>Courses</Typography>
            <TextField
                variant="outlined"
                type="number"
                label="Number of students"
                margin="dense"
                fullWidth
                name="entrepreneurship_courses_num_of_students"
                value={entrepreneurship_courses_num_of_students}
                onChange={onChangeHandler}
            />
            <Box mt={2} />
            <Typography>Training</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        margin="dense"
                        label="Number of trainings"
                        name={"entrepreneurship_training_num_of_trainings"}
                        value={entrepreneurship_training_num_of_trainings}
                        onChange={onChangeHandler}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Number of students"
                        margin="dense"
                        fullWidth
                        name="entrepreneurship_training_num_of_students"
                        value={entrepreneurship_training_num_of_students}
                        onChange={onChangeHandler}
                    />
                </Grid>
            </Grid>
            <Box mt={2} />
            <Typography>Project</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        margin="dense"
                        label="Number of projects"
                        fullWidth
                        name="entrepreneurship_project_num_of_projects"
                        value={entrepreneurship_project_num_of_projects}
                        onChange={onChangeHandler}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Number of students"
                        margin="dense"
                        fullWidth
                        name="entrepreneurship_project_num_of_students"
                        value={entrepreneurship_project_num_of_students}
                        onChange={onChangeHandler}
                    />
                </Grid>
            </Grid>
            <Box mt={2} />
            <Typography>Motivational Programs</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        margin="dense"
                        label="Number of programs"
                        fullWidth
                        name="entrepreneurship_motivational_programs_num_of_programs"
                        value={
                            entrepreneurship_motivational_programs_num_of_programs
                        }
                        onChange={onChangeHandler}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Number of attendees"
                        margin="dense"
                        fullWidth
                        name="entrepreneurship_motivational_programs_num_of_attendees"
                        value={
                            entrepreneurship_motivational_programs_num_of_attendees
                        }
                        onChange={onChangeHandler}
                    />
                </Grid>
            </Grid>
        </Section>
    );
};

export default Entrepreneurship;
