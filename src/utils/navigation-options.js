import AddBoxIcon from "@material-ui/icons/AddBox";
import ListIcon from "@material-ui/icons/List";
const faculityNavOptions = [
  {
    link: "/faculity/faculity-form/create",
    icon: <AddBoxIcon color="primary"/>,
    text: "Faculity Evaluation Form",
  },
  {
    link: "/faculity/filled-faculity-list",
    icon: <ListIcon color="primary" />,
    text: "Filled Faculity Evaluation List",
  },
];

export default {
  faculityNavOptions,
};
