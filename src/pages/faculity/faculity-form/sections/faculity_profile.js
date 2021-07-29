import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "../components/section";

const FaculityProfile = ({
  onChangeHandler,
  bscDegreeEarnedName,
  mscDegreeEarnedName,
  mscDegreeEarnedThesis,
  phdDegreeEarnedName,
  pdhDegreeEarnedThesis,
  academicRank,
  chairMembership,
  administrativeRole,
}) => {
  return (
    <Section title="Faculity Profile">
      <Box mt={2} />
      <Typography>Degree Earned</Typography>
      <Typography>B.Sc</Typography>
      <TextField
        variant="outlined"
        label="Nomenclature"
        margin="dense"
        fullWidth
        value={bscDegreeEarnedName}
        name="bscDegreeEarnedName"
        onChange={onChangeHandler}
      />
      <Typography>M.Sc</Typography>
      <Grid container spacing="2">
        <Grid item xs="12" md="6">
          <TextField
            variant="outlined"
            label="Nomenclature"
            margin="dense"
            fullWidth
            name="mscDegreeEarnedName"
            value={mscDegreeEarnedName}
            onChange={onChangeHandler}
          />
        </Grid>
        <Grid item xs="12" md="6">
          <TextField
            variant="outlined"
            label="Thesis Title"
            margin="dense"
            fullWidth
            value={mscDegreeEarnedThesis}
            name="mscDegreeEarnedThesis"
            onChange={onChangeHandler}
          />
        </Grid>
      </Grid>
      <Typography>PHD</Typography>
      <Grid container spacing="2">
        <Grid item xs="12" md="6">
          <TextField
            variant="outlined"
            label="Nomenclature"
            margin="dense"
            fullWidth
            value={phdDegreeEarnedName}
            name="phdDegreeEarnedName"
            onChange={onChangeHandler}
          />
        </Grid>
        <Grid item xs="12" md="6">
          <TextField
            variant="outlined"
            label="Thesis Title"
            margin="dense"
            fullWidth
            value={pdhDegreeEarnedThesis}
            name="pdhDegreeEarnedThesis"
            onChange={onChangeHandler}
          />
        </Grid>
      </Grid>
      <TextField
        variant="outlined"
        label="Academic Rank"
        margin="dense"
        fullWidth
        value={academicRank}
        name="academicRank"
        onChange={onChangeHandler}
      />
      <TextField
        variant="outlined"
        label="Chair Membership"
        margin="dense"
        fullWidth
        value={chairMembership}
        name="chairMembership"
        onChange={onChangeHandler}
      />
      <TextField
        variant="outlined"
        label="Administrative Role"
        margin="dense"
        fullWidth
        value={administrativeRole}
        name="administrativeRole"
        onChange={onChangeHandler}
      />
    </Section>
  );
};

export default FaculityProfile;
