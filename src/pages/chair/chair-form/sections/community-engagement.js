import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "../../../../components/section/section";

const CommunityEngagement = ({
  onChangeHandler,
  num_of_community_services_initiated,
  num_of_community_services_completed,
  num_of_benefited_parties,
}) => {
  return (
    <Section title="Community Engagement">
      <Box mt={1} />
      <Typography>No. Community services</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Initiated"
            margin="dense"
            fullWidth
            name="num_of_community_services_initiated"
            value={num_of_community_services_initiated}
            onChange={onChangeHandler}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Completed"
            margin="dense"
            fullWidth
            name="num_of_community_services_completed"
            value={num_of_community_services_completed}
            onChange={onChangeHandler}
          />
        </Grid>
      </Grid>
      <TextField
        variant="outlined"
        type="number"
        label="Number of people/ communities / organizations benefited"
        margin="dense"
        fullWidth
        name="num_of_benefited_parties"
        value={num_of_benefited_parties}
        onChange={onChangeHandler}
      />
    </Section>
  );
};

export default CommunityEngagement;
