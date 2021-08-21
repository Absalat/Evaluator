import React from "react";
import { Box, Grid, TextField } from "@material-ui/core";
import Section from "./modules/Section";

function Students({
    onChangeHandler,
    student_profiles_ug_students,
    student_profiles_msc_students,
    student_profiles_phd_students,
}) {
    return (
        <Section title="Student Profiles">
            <Box mt={2} />
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="UG Students"
                        margin="dense"
                        fullWidth
                        onChange={onChangeHandler}
                        name="student_profiles_ug_students"
                        value={student_profiles_ug_students}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="M.Sc. Students"
                        margin="dense"
                        fullWidth
                        onChange={onChangeHandler}
                        name="student_profiles_msc_students"
                        value={student_profiles_msc_students}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        variant="outlined"
                        type="number"
                        margin="dense"
                        label="PhD Students"
                        fullWidth
                        onChange={onChangeHandler}
                        name="student_profiles_phd_students"
                        value={student_profiles_phd_students}
                    />
                </Grid>
            </Grid>
        </Section>
    );
}

export default Students;
