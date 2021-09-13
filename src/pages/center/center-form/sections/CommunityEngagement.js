import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "./modules/Section";

const CommunityEngagement = ({
    onChangeHandler,
    num_of_community_services_initiated,
    num_of_community_services_completed,
    num_of_benefited_parties,
    disable,
}) => {
    return (
        <Section title="Community Engagement">
            <Box mt={2} />
            <Typography>Number of Community services</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Initiated"
                        margin="dense"
                        fullWidth
                        onChange={onChangeHandler}
                        name="num_of_community_services_initiated"
                        value={num_of_community_services_initiated}
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
                        name="num_of_community_services_completed"
                        value={num_of_community_services_completed}
                        disabled={disable}
                    />
                </Grid>
            </Grid>
            <TextField
                variant="outlined"
                type="number"
                margin="dense"
                label="Number of people/ communities/ organizations benefited"
                fullWidth
                onChange={onChangeHandler}
                name="num_of_benefited_parties"
                value={num_of_benefited_parties}
                disabled={disable}
            />
        </Section>
    );
};

export default CommunityEngagement;
