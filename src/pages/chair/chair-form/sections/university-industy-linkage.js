import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "../../../../components/section/section";

const UniversityIndustryLinkage = ({
  onChangeHandler,
  partnership_established_mou_signed,
  partnership_established_joint_workshops,
  industry_projects_initiated,
  industry_projects_completed
}) => {
  return (
    <Section title="University industry linkage">
      <Box mt={1} />
      <Typography>Partnership established</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="MoU signed"
            margin="dense"
            fullWidth
            name="partnership_established_mou_signed"
            value={partnership_established_mou_signed}
            onChange={onChangeHandler}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Joint w/shops"
            margin="dense"
            fullWidth
            name="partnership_established_joint_workshops"
            value={partnership_established_joint_workshops}
            onChange={onChangeHandler}
          />
        </Grid>
      </Grid>
      <Box mt={1} />
      <Typography>Conference Proceedings</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Initiated"
            margin="dense"
            fullWidth
            name="industry_projects_initiated"
            value={industry_projects_initiated}
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
            name="industry_projects_completed"
            value={industry_projects_completed}
            onChange={onChangeHandler}
          />
        </Grid>
      </Grid>
    </Section>
  );
};

export default UniversityIndustryLinkage;
