import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "./modules/Section";

const UniversityLinkage = ({
    onChangeHandler,
    partnership_established_mou_signed,
    partnership_established_joint_workshops,
    industry_projects_initiated,
    industry_projects_completed,
    disable,
}) => {
    return (
        <Section title="University industry linkage">
            <Box mt={2} />
            <Typography>Partnership Established</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="MoU signed"
                        margin="dense"
                        fullWidth
                        onChange={onChangeHandler}
                        name="partnership_established_mou_signed"
                        value={partnership_established_mou_signed}
                        disabled={disable}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Joint workshops"
                        margin="dense"
                        fullWidth
                        onChange={onChangeHandler}
                        name="partnership_established_joint_workshops"
                        value={partnership_established_joint_workshops}
                        disabled={disable}
                    />
                </Grid>
            </Grid>
            <Box mt={2} />
            <Typography>Industry Projects</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Initiated"
                        margin="dense"
                        fullWidth
                        onChange={onChangeHandler}
                        name="industry_projects_initiated"
                        value={industry_projects_initiated}
                        disabled={disable}
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
                        name="industry_projects_completed"
                        value={industry_projects_completed}
                        disabled={disable}
                    />
                </Grid>
            </Grid>
        </Section>
    );
};

export default UniversityLinkage;
