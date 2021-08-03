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
  paper_presented_on_conference_national,
  paper_presented_on_conference_international,
  seminar_speaker_internal,
  seminar_speaker_external
}) => {
  return (
    <Section title="Published Journal Papers">
      <Box mt={2} />
      <Typography>M.Sc students supervision</Typography>
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
      <Typography>Paper Presented on Conference</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="National"
            margin="dense"
            fullWidth
            onChange={onChangeHandler}
            name="paper_presented_on_conference_national"
            value={paper_presented_on_conference_national}
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
            name="paper_presented_on_conference_international"
            value={paper_presented_on_conference_international}
          />
        </Grid>
      </Grid>
      <Box mt={2} />
      <Typography>Seminar Speaker</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Internal"
            margin="dense"
            fullWidth
            onChange={onChangeHandler}
            name="seminar_speaker_internal"
            value={seminar_speaker_internal}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            type="number"
            label="External"
            margin="dense"
            fullWidth
            onChange={onChangeHandler}
            name="seminar_speaker_external"
            value={seminar_speaker_external}
          />
        </Grid>
      </Grid>
    </Section>
  );
};

export default Publication;
