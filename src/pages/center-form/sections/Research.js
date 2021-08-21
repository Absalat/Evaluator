import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "./modules/Section";

const Research = ({
    onChangeHandler,
    num_of_research_grant_applied_internal,
    num_of_research_grant_applied_external,
    amount_of_grant_secured_internal,
    amount_of_grant_secured_external,
    phd_students_supervision_enrolled,
    phd_students_supervision_completed,
    msc_students_supervision_enrolled,
    msc_students_supervision_completed,
}) => {
    return (
        <Section title="Research">
            <Box mt={2} />
            <Typography>No. research grants applied</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Internal"
                        margin="dense"
                        fullWidth
                        onChange={onChangeHandler}
                        name="num_of_research_grant_applied_internal"
                        value={num_of_research_grant_applied_internal}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="External"
                        margin="dense"
                        fullWidth
                        onChange={onChangeHandler}
                        name="num_of_research_grant_applied_external"
                        value={num_of_research_grant_applied_external}
                    />
                </Grid>
            </Grid>
            <Box mt={2} />
            <Typography>Amount of grant secured</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Internal"
                        margin="dense"
                        fullWidth
                        onChange={onChangeHandler}
                        name="amount_of_grant_secured_internal"
                        value={amount_of_grant_secured_internal}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="External"
                        margin="dense"
                        fullWidth
                        onChange={onChangeHandler}
                        name="amount_of_grant_secured_external"
                        value={amount_of_grant_secured_external}
                    />
                </Grid>
            </Grid>
            <Box mt={2} />
            <Typography>PhD students supervision</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Enrolled"
                        margin="dense"
                        fullWidth
                        onChange={onChangeHandler}
                        name="phd_students_supervision_enrolled"
                        value={phd_students_supervision_enrolled}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Completed"
                        margin="dense"
                        fullWidth
                        onChange={onChangeHandler}
                        name="phd_students_supervision_completed"
                        value={phd_students_supervision_completed}
                    />
                </Grid>
            </Grid>
            <Box mt={2} />
            <Typography>M.Sc students supervision</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Enrolled"
                        margin="dense"
                        fullWidth
                        onChange={onChangeHandler}
                        name="msc_students_supervision_enrolled"
                        value={msc_students_supervision_enrolled}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Completed"
                        margin="dense"
                        fullWidth
                        onChange={onChangeHandler}
                        name="msc_students_supervision_completed"
                        value={msc_students_supervision_completed}
                    />
                </Grid>
            </Grid>
        </Section>
    );
};

export default Research;
