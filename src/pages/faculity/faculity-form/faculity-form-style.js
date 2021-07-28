import { makeStyles } from "@material-ui/core/styles";
const faculityFormStyle = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));

export default faculityFormStyle;
