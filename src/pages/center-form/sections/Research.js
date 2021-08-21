import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "./modules/Section";

const Research = ({
    onChangeHandler,
    research_num_of_research_grants_applied_internal,
    research_num_of_research_grants_applied_external,
    research_amount_of_grant_secured_internal,
    research_amount_of_grant_secured_external,
    research_phd_students_supervision_enrolled,
    research_phd_students_supervision_completed,
    research_msc_students_supervision_enrolled,
    research_msc_students_supervision_completed,
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
                        name="research_num_of_research_grants_applied_internal"
                        value={research_num_of_research_grants_applied_internal}
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
                        name="research_num_of_research_grants_applied_external"
                        value={research_num_of_research_grants_applied_external}
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
                        name="research_amount_of_grant_secured_internal"
                        value={research_amount_of_grant_secured_internal}
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
                        name="research_amount_of_grant_secured_external"
                        value={research_amount_of_grant_secured_external}
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
                        name="research_phd_students_supervision_enrolled"
                        value={research_phd_students_supervision_enrolled}
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
                        name="research_phd_students_supervision_completed"
                        value={research_phd_students_supervision_completed}
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
                        name="research_msc_students_supervision_enrolled"
                        value={research_msc_students_supervision_enrolled}
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
                        name="research_msc_students_supervision_completed"
                        value={research_msc_students_supervision_completed}
                    />
                </Grid>
            </Grid>
        </Section>
    );
};

export default Research;
