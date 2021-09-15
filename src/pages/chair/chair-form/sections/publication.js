import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "../../../../components/section/section";

const Publication = ({
  onChangeHandler,
  published_journal_papers_national,
  published_journal_papers_international,
  submitted_journal_papers_national,
  submitted_journal_papers_international,
  conference_proceedings_national,
  conference_proceedings_international,
}) => {
  return (
    <Section title="Publication">
      <Box mt={1} />
      <Typography>Published Journal papers</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="National"
            margin="dense"
            fullWidth
            name="published_journal_papers_national"
            value={published_journal_papers_national}
            onChange={onChangeHandler}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="International"
            margin="dense"
            fullWidth
            name="published_journal_papers_international"
            value={published_journal_papers_international}
            onChange={onChangeHandler}
          />
        </Grid>
      </Grid>
      <Box mt={1} />
      <Typography>Submitted journal papers</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="National"
            margin="dense"
            fullWidth
            name="submitted_journal_papers_national"
            value={submitted_journal_papers_national}
            onChange={onChangeHandler}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="International"
            margin="dense"
            fullWidth
            name="submitted_journal_papers_international"
            value={submitted_journal_papers_international}
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
            label="National"
            margin="dense"
            fullWidth
            name="conference_proceedings_national"
            value={conference_proceedings_national}
            onChange={onChangeHandler}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="International"
            margin="dense"
            fullWidth
            name="conference_proceedings_international"
            value={conference_proceedings_international}
            onChange={onChangeHandler}
          />
        </Grid>
      </Grid>
    </Section>
  );
};

export default Publication;
