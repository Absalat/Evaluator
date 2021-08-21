import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "./modules/Section";

const TechnologyTransfer = ({
    onChangeHandler,
    technology_transfer_tt_projects_initiated,
    technology_transfer_tt_projects_completed,
    technology_transfer_patented_research_outputs,
    technology_transfer_enterprise_incubated,
}) => {
    return (
        <Section title="Technology Transfer">
            <Box mt={2} />
            <Typography>TT projects</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Initiated"
                        margin="dense"
                        fullWidth
                        onChange={onChangeHandler}
                        name="technology_transfer_tt_projects_initiated"
                        value={technology_transfer_tt_projects_initiated}
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
                        name="technology_transfer_tt_projects_completed"
                        value={technology_transfer_tt_projects_completed}
                    />
                </Grid>
            </Grid>
            <TextField
                variant="outlined"
                type="number"
                margin="dense"
                label="Patented research outputs"
                fullWidth
                onChange={onChangeHandler}
                name="technology_transfer_patented_research_outputs"
                value={technology_transfer_patented_research_outputs}
            />
            <TextField
                variant="outlined"
                type="number"
                margin="dense"
                label="Enterprise incubated"
                fullWidth
                onChange={onChangeHandler}
                name="technology_transfer_enterprise_incubated"
                value={technology_transfer_enterprise_incubated}
            />
        </Section>
    );
};

export default TechnologyTransfer;
