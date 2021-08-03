import {
  AppBar,
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  DialogContent,
  Grid,
  Snackbar,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import Section from "../../../components/section/section";
import { connect } from "react-redux";
import * as faculityActions from "../../../store/profile/actions";
import { Redirect } from "react-router-dom";
import useLocalStorage from "../../../hooks/useLocalStorage";
import config from "../../../config";
import Alert from "@material-ui/lab/Alert";
const FaculityProfile = (props) => {
  const formik = useFormik({
    initialValues: {
      degree_earned_bsc_nomenclature: "",
      degree_earned_msc_nomenclature: "",
      degree_earned_msc_thesis_title: "",
      degree_earned_phd_nomenclature: "",
      degree_earned_phd_thesis_title: "",
      academic_rank: "",
      chair_membership: "",
      adminstrative_role: "",
    },
    validate: (values) => {
      const errors = {};
      if (
        values.degree_earned_msc_nomenclature &&
        values.degree_earned_msc_thesis_title === ""
      ) {
        errors.degree_earned_msc_thesis_title = "This field can't be empty";
      }
      if (
        values.degree_earned_msc_nomenclature === "" &&
        values.degree_earned_msc_thesis_title
      ) {
        errors.degree_earned_msc_nomenclature = "This field can't be empty";
      }
      if (
        values.degree_earned_phd_nomenclature &&
        values.degree_earned_phd_thesis_title === ""
      ) {
        errors.degree_earned_phd_thesis_title = "This field can't be empty";
      }
      if (
        values.degree_earned_phd_nomenclature === "" &&
        values.degree_earned_phd_thesis_title
      ) {
        errors.degree_earned_phd_nomenclature = "This field can't be empty";
      }
      return errors;
    },
    onSubmit: (values) => {
      props.updateProfile(values);
    },
  });
  const [data, setData] = useLocalStorage(config.storage, null);

  useEffect(() => {
    if (data != null) {
      formik.setValues({
        academic_rank: data.user.academic_rank,
        adminstrative_role: data.user.adminstrative_role,
        chair_membership: data.user.chair_membership,
        degree_earned_bsc_nomenclature:
          data.user.degree_earned_bsc_nomenclature,
        degree_earned_msc_nomenclature:
          data.user.degree_earned_msc_nomenclature,
        degree_earned_msc_thesis_title:
          data.user.degree_earned_msc_thesis_title,
        degree_earned_phd_nomenclature:
          data.user.degree_earned_phd_nomenclature,
        degree_earned_phd_thesis_title:
          data.user.degree_earned_phd_thesis_title,
      });
    }
    return ()=>{
      props.resetUpdateProfile()
    }
  }, []);

  return (
    <div>
      <Snackbar
        autoHideDuration={1000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={props.updatedProfile.updateSuccess}
      >
        <Alert severity="success">profile updated successfully !</Alert>
      </Snackbar>
      <Snackbar
        autoHideDuration={1000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={props.updatedProfile.error}
      >
        <Alert severity="error">{props.updatedProfile.error}</Alert>
      </Snackbar>
      <Dialog open={props.updatedProfile.isLoading}>
        <DialogContent>
          <CircularProgress disableShrink />
        </DialogContent>
      </Dialog>
      <Box mt={2} />
      <form onSubmit={formik.handleSubmit}>
        <Section title="Faculity Profile">
          <Box mt={2} />
          <Typography>Degree Earned</Typography>
          <Typography>B.Sc</Typography>
          <TextField
            variant="outlined"
            label="Nomenclature"
            margin="dense"
            fullWidth
            value={formik.values.degree_earned_bsc_nomenclature}
            name="degree_earned_bsc_nomenclature"
            onChange={formik.handleChange}
          />
          <Typography>M.Sc</Typography>
          <Grid container spacing="2">
            <Grid item xs="12" md="6">
              <TextField
                variant="outlined"
                label="Nomenclature"
                margin="dense"
                fullWidth
                name="degree_earned_msc_nomenclature"
                value={formik.values.degree_earned_msc_nomenclature}
                onChange={formik.handleChange}
                error={formik.errors.degree_earned_msc_nomenclature}
              />
              {formik.errors.degree_earned_msc_nomenclature && (
                <Typography color="error">
                  {formik.errors.degree_earned_msc_nomenclature}
                </Typography>
              )}
            </Grid>
            <Grid item xs="12" md="6">
              <TextField
                variant="outlined"
                label="Thesis Title"
                margin="dense"
                fullWidth
                value={formik.values.degree_earned_msc_thesis_title}
                name="degree_earned_msc_thesis_title"
                onChange={formik.handleChange}
                error={formik.errors.degree_earned_msc_thesis_title}
              />
              {formik.errors.degree_earned_msc_thesis_title && (
                <Typography color="error">
                  {formik.errors.degree_earned_msc_thesis_title}
                </Typography>
              )}
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
                value={formik.values.degree_earned_phd_nomenclature}
                name="degree_earned_phd_nomenclature"
                onChange={formik.handleChange}
                error={formik.errors.degree_earned_phd_nomenclature}
              />
              {formik.errors.degree_earned_phd_nomenclature && (
                <Typography color="error">
                  {formik.errors.degree_earned_phd_nomenclature}
                </Typography>
              )}
            </Grid>
            <Grid item xs="12" md="6">
              <TextField
                variant="outlined"
                label="Thesis Title"
                margin="dense"
                fullWidth
                value={formik.values.degree_earned_phd_thesis_title}
                name="degree_earned_phd_thesis_title"
                onChange={formik.handleChange}
                error={formik.errors.degree_earned_phd_thesis_title}
              />
              {formik.errors.degree_earned_phd_thesis_title && (
                <Typography color="error">
                  {formik.errors.degree_earned_phd_thesis_title}
                </Typography>
              )}
            </Grid>
          </Grid>
          <TextField
            variant="outlined"
            label="Academic Rank"
            margin="dense"
            fullWidth
            value={formik.values.academic_rank}
            name="academic_rank"
            onChange={formik.handleChange}
          />
          <TextField
            variant="outlined"
            label="Chair Membership"
            margin="dense"
            fullWidth
            value={formik.values.chair_membership}
            name="chair_membership"
            onChange={formik.handleChange}
          />
          <TextField
            variant="outlined"
            label="Administrative Role"
            margin="dense"
            fullWidth
            value={formik.values.adminstrative_role}
            name="adminstrative_role"
            onChange={formik.handleChange}
          />
        </Section>
        <Box mt={2} />
        <Box display="flex" justifyContent="flex-end">
          <Button type="submit" color="primary" variant="contained">
            update
          </Button>
        </Box>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    updatedProfile: state.profile.updatedProfile,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateProfile: (profile) =>
      dispatch(faculityActions.updateProfile(profile)),
      resetUpdateProfile: ()=>dispatch(faculityActions.resetUpdateProfile())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FaculityProfile);
