import AddBoxIcon from "@material-ui/icons/AddBox";
import ListIcon from "@material-ui/icons/List";
const faculityNavOptions = [
  {
    link: "/faculity/faculity-form/create",
    icon: <AddBoxIcon />,
    text: "Fill Faculity Form",
  },
  {
    link: "/faculity/filled-faculity-list",
    icon: <ListIcon />,
    text: "Filled Faculity Evaluation List",
  },
];

export default {
  faculityNavOptions,
};
