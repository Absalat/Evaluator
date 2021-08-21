import React from "react";
import { Box, Grid, TextField } from "@material-ui/core";
import Section from "./modules/Section";

function Programs({
    onChangeHandler,
    programs_bsc_programs,
    programs_msc_programs,
    programs_phd_programs,
}) {
    return (
        <Section title="Programs">
            <Box mt={2} />
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="B.Sc. Programs"
                        margin="dense"
                        fullWidth
                        onChange={onChangeHandler}
                        name="programs_bsc_programs"
                        value={programs_bsc_programs}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="M.Sc. Programs"
                        margin="dense"
                        fullWidth
                        onChange={onChangeHandler}
                        name="programs_msc_programs"
                        value={programs_msc_programs}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        variant="outlined"
                        type="number"
                        margin="dense"
                        label="PhD Programs"
                        fullWidth
                        onChange={onChangeHandler}
                        name="programs_phd_programs"
                        value={programs_phd_programs}
                    />
                </Grid>
            </Grid>
        </Section>
    );
}

export default Programs;
