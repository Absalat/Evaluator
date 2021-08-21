import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "./modules/Section";

const CommunityEngagement = ({
    onChangeHandler,
    community_engagement_num_of_community_services_initiated,
    community_engagement_num_of_community_services_completed,
    community_engagement_num_of_benefited_parties,
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
                        name="community_engagement_num_of_community_services_initiated"
                        value={
                            community_engagement_num_of_community_services_initiated
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
                        name="community_engagement_num_of_community_services_completed"
                        value={
                            community_engagement_num_of_community_services_completed
                        }
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
                name="community_engagement_num_of_benefited_parties"
                value={community_engagement_num_of_benefited_parties}
            />
        </Section>
    );
};

export default CommunityEngagement;
