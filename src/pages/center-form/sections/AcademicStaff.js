import React from "react";
import { Box, Grid, TextField } from "@material-ui/core";
import Section from "./modules/Section";

function AcademicStaff({
    onChangeHandler,
    technical_staffs,
    asst_lecturers,
    lecturers,
    asst_profesors,
    assoc_professors,
    profesors,
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
                name="technical_staffs"
                value={technical_staffs}
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
                        name="asst_lecturers"
                        value={asst_lecturers}
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
                        name="lecturers"
                        value={lecturers}
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
                        name="asst_profesors"
                        value={asst_profesors}
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
                        name="assoc_professors"
                        value={assoc_professors}
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
                        name="profesors"
                        value={profesors}
                    />
                </Grid>
            </Grid>
        </Section>
    );
}

export default AcademicStaff;
