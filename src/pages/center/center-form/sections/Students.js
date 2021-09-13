import React from "react";
import { Box, Grid, TextField } from "@material-ui/core";
import Section from "./modules/Section";

function Students({
    onChangeHandler,
    ug_students,
    msc_students,
    phd_students,
    disable,
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
                        name="ug_students"
                        value={ug_students}
                        disabled={disable}
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
                        name="msc_students"
                        value={msc_students}
                        disabled={disable}
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
                        name="phd_students"
                        value={phd_students}
                        disabled={disable}
                    />
                </Grid>
            </Grid>
        </Section>
    );
}

export default Students;
