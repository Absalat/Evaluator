import React from "react";
import { Box, Grid, TextField } from "@material-ui/core";
import Section from "./modules/Section";

function AcademicStaff({
    onChangeHandler,
    academic_staff_technial_staff,
    academic_staff_assistant_lecturers,
    academic_staff_lecturers,
    academic_staff_assistant_professors,
    academic_staff_associate_professors,
    academic_staff_professors,
}) {
    return (
        <Section title="Academic Staff Profile">
            <Box mt={2} />
            <TextField
                variant="outlined"
                type="number"
                margin="dense"
                label="Technical Staffs"
                fullWidth
                onChange={onChangeHandler}
                name="academic_staff_technial_staff"
                value={academic_staff_technial_staff}
            />
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Asst. Lecturers"
                        margin="dense"
                        fullWidth
                        onChange={onChangeHandler}
                        name="academic_staff_assistant_lecturers"
                        value={academic_staff_assistant_lecturers}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Lecturers"
                        margin="dense"
                        fullWidth
                        onChange={onChangeHandler}
                        name="academic_staff_lecturers"
                        value={academic_staff_lecturers}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Asst. Professors"
                        margin="dense"
                        fullWidth
                        onChange={onChangeHandler}
                        name="academic_staff_assistant_professors"
                        value={academic_staff_assistant_professors}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Asso. Professors"
                        margin="dense"
                        fullWidth
                        onChange={onChangeHandler}
                        name="academic_staff_associate_professors"
                        value={academic_staff_associate_professors}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        variant="outlined"
                        type="number"
                        margin="dense"
                        label="Professors"
                        fullWidth
                        onChange={onChangeHandler}
                        name="academic_staff_professors"
                        value={academic_staff_professors}
                    />
                </Grid>
            </Grid>
        </Section>
    );
}

export default AcademicStaff;
