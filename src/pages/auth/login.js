import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import loginStyles from "./login-styles";
import { useFormik } from "formik";
import { connect } from "react-redux";
import * as authActions from "../../store/auth/actions";
import { CircularProgress, Dialog, DialogContent, Snackbar } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import config from "../../config";
import Alert from "@material-ui/lab/Alert";

const SignIn = (props) => {
  const classes = loginStyles();
  const [loading, setLoading] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [data,setData] = useLocalStorage(config.storage,null)
  const formik = useFormik({
    initialValues: {
      password: "",
      username: "",
    },
    validate: (values) => {
      const errors = {};
      if (values.password.length < 8) {
        errors.password = "password is too short";
      }
      if (values.username.length <= 4) {
        errors.username = "username too short";
      }
      return errors;
    },
    onSubmit: (values) => {
      props.attemptLogin(values);
    },
  });
  useEffect(() => {
    setLoading(props.login.isLoading);
    if(props.login.data){
      setData(props.login.data)
      setSignedIn(true)
    }
  }, [props.login]);

  if(signedIn){
    return <Redirect to="/faculity/self-evaluation/new" />
  }
  return (
    <Container maxWidth="xs">
      <Dialog open={loading}>
        <DialogContent>
          <CircularProgress disableShrink />
        </DialogContent>
      </Dialog>
      <Snackbar
        autoHideDuration={1000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={props.login.error}
      >
        <Alert severity="error">{props.login.error}</Alert>
      </Snackbar>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.errors.username}
            onBlur={formik.handleBlur}
            autoFocus
          />
          {formik.errors.username && (
            <Typography color="error">{formik.errors.username}</Typography>
          )}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.errors.password}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && (
            <Typography color="error">{formik.errors.password}</Typography>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (user) => dispatch(authActions.login(user)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
