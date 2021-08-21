import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "./modules/Section";

const Publication = ({
    onChangeHandler,
    publication_published_journal_papers_national,
    publication_published_journal_papers_international,
    publication_submitted_journal_papers_national,
    publication_submitted_journal_papers_international,
    publication_conference_proceedings_national,
    publication_conference_proceedings_international,
    publication_workshop_organized_national,
    publication_workshop_organized_international,
    publication_seminar_school_speaker,
    publication_seminar_external_speaker,
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
                        name="publication_published_journal_papers_national"
                        value={publication_published_journal_papers_national}
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
                        name="publication_published_journal_papers_international"
                        value={
                            publication_published_journal_papers_international
                        }
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
                        name="publication_submitted_journal_papers_national"
                        value={publication_submitted_journal_papers_national}
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
                        name="publication_submitted_journal_papers_international"
                        value={
                            publication_submitted_journal_papers_international
                        }
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
                        name="publication_conference_proceedings_national"
                        value={publication_conference_proceedings_national}
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
                        name="publication_conference_proceedings_international"
                        value={publication_conference_proceedings_international}
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
                        name="publication_workshop_organized_national"
                        value={publication_workshop_organized_national}
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
                        name="publication_workshop_organized_international"
                        value={publication_workshop_organized_international}
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
                        name="publication_seminar_school_speaker"
                        value={publication_seminar_school_speaker}
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
                        name="publication_seminar_external_speaker"
                        value={publication_seminar_external_speaker}
                    />
                </Grid>
            </Grid>
        </Section>
    );
};

export default Publication;
