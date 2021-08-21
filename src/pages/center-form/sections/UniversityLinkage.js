import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "./modules/Section";

const UniversityLinkage = ({
    onChangeHandler,
    university_industry_linkage_partnership_established_mou_signed,
    university_industry_linkage_partnership_established_joint_workshop,
    university_industry_linkage_industry_projects_initiated,
    university_industry_linkage_industry_projects_completed,
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
                        name="university_industry_linkage_partnership_established_mou_signed"
                        value={
                            university_industry_linkage_partnership_established_mou_signed
                        }
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
                        name="university_industry_linkage_partnership_established_joint_workshop"
                        value={
                            university_industry_linkage_partnership_established_joint_workshop
                        }
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
                        name="university_industry_linkage_industry_projects_initiated"
                        value={
                            university_industry_linkage_industry_projects_initiated
                        }
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
                        name="university_industry_linkage_industry_projects_completed"
                        value={
                            university_industry_linkage_industry_projects_completed
                        }
                    />
                </Grid>
            </Grid>
        </Section>
    );
};

export default UniversityLinkage;
