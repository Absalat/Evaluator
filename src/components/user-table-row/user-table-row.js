import {
  TableCell,
  TableRow,
  IconButton,
  Dialog,
  FormGroup,
  FormControlLabel,
  Checkbox,
  makeStyles,
  Box,
  Button,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { useFormik } from "formik";

import React, { useEffect, useState } from "react";
import Confirm from "../confirm/confirm";
import { connect } from "react-redux";
import * as userActions from "../../store/users/actions";

const useStyle = makeStyles((theme) => ({
  form: {
    padding: theme.spacing(2),
  },
}));
const UserTableRow = (props) => {
  const [open, setOpen] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState({ open: false });
  const classes = useStyle();
  const formik = useFormik({
    initialValues: {
      superadmin: false,
      faculty: false,
      chair: false,
      dean: false,
    },
    onSubmit: (values) => {
      setConfirmDialog({
        open: true,
        onConfirm: () => {
          const roles = [];
          Object.keys(values).map((key) => {
            if (values[key]) {
              roles.push(key);
            }
          });
          props.changeRoles(roles, props.user.id);
          setOpen(false);
        },
        title: "Are you sure ?",
        message: "Are you sure to change this role ?",
      });
    },
  });

  useEffect(() => {
    const state = {
      superadmin: false,
      faculty: false,
      chair: false,
      dean: false,
    };
    props.user.roles.forEach((role) => {
      state[role] = true;
    });
    formik.setValues(state);
  }, [props.user.roles, props.fetchedUsers.users]);

  return (
    <>
      <Confirm
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
      <Dialog open={open}>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formik.values.superadmin}
                  onChange={formik.handleChange}
                  name="superadmin"
                />
              }
              label="Super Admin"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formik.values.faculty}
                  onChange={formik.handleChange}
                  name="faculty"
                />
              }
              label="Faculy"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formik.values.dean}
                  onChange={formik.handleChange}
                  name="dean"
                />
              }
              label="Dean"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formik.values.chair}
                  onChange={formik.handleChange}
                  name="chair"
                />
              }
              label="Chair"
            />
          </FormGroup>
          <Box mt={2} />
          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="outlined"
              size="small"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Box mr={2} />
            <Button
              variant="contained"
              color="primary"
              size="small"
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </form>
      </Dialog>
      <TableRow>
        <TableCell>{props.user.username}</TableCell>
        <TableCell>{props.user.roles.toString()}</TableCell>
        <TableCell>
          <IconButton>
            <EditIcon color="primary" onClick={() => setOpen(true)} />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    fetchedUsers: state.user.fetchedUsers,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeRoles: (roles, id) => dispatch(userActions.changeRole(roles, id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserTableRow);
