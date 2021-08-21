import React from "react";
import { Box, Grid, TextField } from "@material-ui/core";
import Section from "./modules/Section";

function Programs({
    onChangeHandler,
    bsc_programs,
    msc_programs,
    phd_programs,
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
                        name="bsc_programs"
                        value={bsc_programs}
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
                        name="msc_programs"
                        value={msc_programs}
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
                        name="phd_programs"
                        value={phd_programs}
                    />
                </Grid>
            </Grid>
        </Section>
    );
}

export default Programs;
