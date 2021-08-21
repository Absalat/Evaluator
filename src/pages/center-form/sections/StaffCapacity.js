import React from "react";
import { Box, Grid, TextField, Typography } from "@material-ui/core";
import Section from "./modules/Section";

const StaffCapacity = ({
    onChangeHandler,
    staff_capacity_building_hdp_training,
    staff_capacity_building_study_for_higher_degree_msc_started,
    staff_capacity_building_study_for_higher_degree_msc_completed,
    staff_capacity_building_study_for_higher_degree_phd_started,
    staff_capacity_building_study_for_higher_degree_phd_completed,
    staff_capacity_building_special_training,
}) => {
    return (
        <Section title="Staff Capacity Building">
            <TextField
                variant="outlined"
                type="number"
                margin="dense"
                label="HDP Training"
                fullWidth
                onChange={onChangeHandler}
                name="staff_capacity_building_hdp_training"
                value={staff_capacity_building_hdp_training}
            />
            <Box mt={2} />
            <Typography>Study for higher degree</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="M.Sc. Started"
                        margin="dense"
                        fullWidth
                        onChange={onChangeHandler}
                        name="staff_capacity_building_study_for_higher_degree_msc_started"
                        value={
                            staff_capacity_building_study_for_higher_degree_msc_started
                        }
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="M.Sc. Completed"
                        margin="dense"
                        fullWidth
                        onChange={onChangeHandler}
                        name="staff_capacity_building_study_for_higher_degree_msc_completed"
                        value={
                            staff_capacity_building_study_for_higher_degree_msc_completed
                        }
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="PhD Started"
                        margin="dense"
                        fullWidth
                        onChange={onChangeHandler}
                        name="staff_capacity_building_study_for_higher_degree_phd_started"
                        value={
                            staff_capacity_building_study_for_higher_degree_phd_started
                        }
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Phd Completed"
                        margin="dense"
                        fullWidth
                        onChange={onChangeHandler}
                        name="staff_capacity_building_study_for_higher_degree_phd_completed"
                        value={
                            staff_capacity_building_study_for_higher_degree_phd_completed
                        }
                    />
                </Grid>
            </Grid>
            <Box mt={2} />
            <Typography>Special Training</Typography>
            <TextField
                variant="outlined"
                type="number"
                margin="dense"
                label=""
                fullWidth
                onChange={onChangeHandler}
                name="staff_capacity_building_special_training"
                value={staff_capacity_building_special_training}
            />
        </Section>
    );
};

export default StaffCapacity;
