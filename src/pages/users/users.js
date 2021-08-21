import {
  TableContainer,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  IconButton,
  Table,
  TablePagination,
  Paper,
  TextField,
  InputAdornment,
  Box,
  Snackbar,
} from "@material-ui/core";
import React, { useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import { StyledTableCell } from "../../styled/table-styled";
import { connect } from "react-redux";
import * as usersActions from "../../store/users/actions";
import { useFormik } from "formik";
import SearchIcon from "@material-ui/icons/Search";
import UserTableRow from "../../components/user-table-row/user-table-row";
import Alert from "@material-ui/lab/Alert";
const Users = (props) => {
  const [page, setPage] = React.useState(0);
  const [limit, setLimit] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setLimit(+event.target.value);
  };

  const formik = useFormik({
    initialValues: {
      search: "",
    },
  });
  useEffect(() => {
    props.fetchUsers(formik.values.search, page, limit);
  }, [page, limit, formik.values.search]);

  return (
    <div>
      <Snackbar
        autoHideDuration={1000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={props.changedRoles.success}
        onClose={props.resetChangeRole}
      >
        <Alert severity="success">{props.changedRoles.success}</Alert>
      </Snackbar>
      <Snackbar
        autoHideDuration={1000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={props.changedRoles.error}
        onClose={props.resetChangeRole}
      >
        <Alert severity="error">{props.changedRoles.error}</Alert>
      </Snackbar>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        margin="dense"
        label="search"
        name="search"
        value={formik.values.search}
        onChange={formik.handleChange}
        fullWidth
      />
      <Box mt={2} />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>username</StyledTableCell>
              <StyledTableCell>roles</StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.fetchedUsers.users.map((user) => {
              return <UserTableRow user={user} key={user.id} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={props.fetchedUsers.total}
        rowsPerPage={limit}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleLimitChange}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    fetchedUsers: state.user.fetchedUsers,
    changedRoles: state.user.changedRoles,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: (username, page, limit) =>
      dispatch(usersActions.fetchUsers(username, page, limit)),
    resetChangeRole: () => dispatch(usersActions.resetChangeRole()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
