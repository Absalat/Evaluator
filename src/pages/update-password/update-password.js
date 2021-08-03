import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useFormik } from "formik";
import { connect } from "react-redux";
import * as authActions from "../../store/auth/actions";

import {
  Box,
  CircularProgress,
  Dialog,
  DialogContent,
  Snackbar,
} from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import config from "../../config";
import updatePasswordStyles from "./update-password-styles";
import Section from "../../components/section/section";
import Alert from "@material-ui/lab/Alert";

const UpdatePassword = (props) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(null);
  const classes = updatePasswordStyles();
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
    },
    validate: (values) => {
      const errors = {};
      if (values.newPassword.length < 8) {
        errors.newPassword = "password is too short";
      }
      if (values.oldPassword.length < 8) {
        errors.oldPassword = "password is too short";
      }
      return errors;
    },
    onSubmit: (values) => {
      props.updatePassword(values);
    },
  });
  useEffect(() => {
    return () => {
      props.resetUpdatePassword();
    };
  }, []);
  useEffect(() => {
    setLoading(props.changePassword.isLoading);
    setSuccess(props.changePassword.success);
    setFail(props.changePassword.error);
  }, [props.changePassword]);

  return (
    <div>
      <Snackbar
        autoHideDuration={1000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={success}
        onClose={() => setSuccess(false)}
      >
        <Alert severity="success">password changed successfully !</Alert>
      </Snackbar>
      <Snackbar
        autoHideDuration={1000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={fail}
        onClose={() => setFail(null)}
      >
        <Alert severity="error">{fail}</Alert>
      </Snackbar>

      <CssBaseline />
      <Section title="Update Password">
        <form onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            type="password"
            required
            fullWidth
            label="Old Password"
            name="oldPassword"
            value={formik.values.oldPassword}
            onChange={formik.handleChange}
            error={formik.errors.oldPassword}
            onBlur={formik.handleBlur}
            autoFocus
          />
          {formik.errors.oldPassword && (
            <Typography color="error">{formik.errors.oldPassword}</Typography>
          )}
          <TextField
            variant="outlined"
            margin="normal"
            type="password"
            required
            fullWidth
            label="New Password"
            name="newPassword"
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            error={formik.errors.newPassword}
            onBlur={formik.handleBlur}
          />
          {formik.errors.newPassword && (
            <Typography color="error">{formik.errors.newPassword}</Typography>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Change Password
          </Button>
        </form>
      </Section>
      {loading && (
        <Box display="flex" mt={5} justifyContent="center">
          <CircularProgress disableShrink />
        </Box>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    changePassword: state.auth.changePassword,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updatePassword: (passwords) =>
      dispatch(authActions.updatePassword(passwords)),
    resetUpdatePassword: () => dispatch(authActions.resetUpdatePassword()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UpdatePassword);
