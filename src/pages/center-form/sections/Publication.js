import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "./modules/Section";

const Publication = ({
  onChangeHandler,
  published_journal_papers_national,
  published_journal_papers_international,
  submitted_journal_papers_national,
  submitted_journal_papers_international,
  conference_proceedings_national,
  conference_proceedings_international,
  conference_workshop_organized_national,
  conference_workshop_organized_international,
  seminar_school_speaker,
  seminar_external_speaker,
}) => {
  return (
    <Section title="Publication">
      <Box mt={2} />
      <Typography>Published Journal papers</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="National"
            margin="dense"
            fullWidth
            onChange={onChangeHandler}
            name="published_journal_papers_national"
            value={published_journal_papers_national}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="International"
            margin="dense"
            fullWidth
            onChange={onChangeHandler}
            name="published_journal_papers_international"
            value={published_journal_papers_international}
          />
        </Grid>
      </Grid>
      <Box mt={2} />
      <Typography>Submitted Journal Papers</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="National"
            margin="dense"
            fullWidth
            onChange={onChangeHandler}
            name="submitted_journal_papers_national"
            value={submitted_journal_papers_national}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="International"
            margin="dense"
            fullWidth
            onChange={onChangeHandler}
            name="submitted_journal_papers_international"
            value={submitted_journal_papers_international}
          />
        </Grid>
      </Grid>
      <Box mt={2} />
      <Typography>Conference Preceedings</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="National"
            margin="dense"
            fullWidth
            onChange={onChangeHandler}
            name="conference_proceedings_national"
            value={conference_proceedings_national}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="International"
            margin="dense"
            fullWidth
            onChange={onChangeHandler}
            name="conference_proceedings_international"
            value={conference_proceedings_international}
          />
        </Grid>
      </Grid>
      <Box mt={2} />
      <Typography>Conference / Workshop organized</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="National"
            margin="dense"
            fullWidth
            onChange={onChangeHandler}
            name="conference_workshop_organized_national"
            value={conference_workshop_organized_national}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="International"
            margin="dense"
            fullWidth
            onChange={onChangeHandler}
            name="conference_workshop_organized_international"
            value={conference_workshop_organized_international}
          />
        </Grid>
      </Grid>
      <Box mt={2} />
      <Typography>Seminar</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="School Speaker"
            margin="dense"
            fullWidth
            onChange={onChangeHandler}
            name="seminar_school_speaker"
            value={seminar_school_speaker}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="External Speaker"
            margin="dense"
            fullWidth
            onChange={onChangeHandler}
            name="seminar_external_speaker"
            value={seminar_external_speaker}
          />
        </Grid>
      </Grid>
    </Section>
  );
};

export default Publication;
