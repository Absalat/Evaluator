import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "./modules/Section";

const Entrepreneurship = ({
    onChangeHandler,
    courses_num_of_students,
    training_num_of_trainings,
    training_num_of_students,
    project_num_of_projects,
    project_num_of_students,
    num_of_motivational_programs,
    num_of_motivational_program_atendees,
    disable,
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
                name="courses_num_of_students"
                value={courses_num_of_students}
                onChange={onChangeHandler}
                disabled={disable}
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
                        name={"training_num_of_trainings"}
                        value={training_num_of_trainings}
                        onChange={onChangeHandler}
                        fullWidth
                        disabled={disable}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Number of students"
                        margin="dense"
                        fullWidth
                        name="training_num_of_students"
                        value={training_num_of_students}
                        onChange={onChangeHandler}
                        disabled={disable}
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
                        name="project_num_of_projects"
                        value={project_num_of_projects}
                        onChange={onChangeHandler}
                        disabled={disable}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Number of students"
                        margin="dense"
                        fullWidth
                        name="project_num_of_students"
                        value={project_num_of_students}
                        onChange={onChangeHandler}
                        disabled={disable}
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
                        name="num_of_motivational_programs"
                        value={num_of_motivational_programs}
                        onChange={onChangeHandler}
                        disabled={disable}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Number of attendees"
                        margin="dense"
                        fullWidth
                        name="num_of_motivational_program_atendees"
                        value={num_of_motivational_program_atendees}
                        onChange={onChangeHandler}
                        disabled={disable}
                    />
                </Grid>
            </Grid>
        </Section>
    );
};

export default Entrepreneurship;
