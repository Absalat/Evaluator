import AddBoxIcon from "@material-ui/icons/AddBox";
import ListIcon from "@material-ui/icons/List";
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from "@material-ui/icons/Lock";
const faculityNavOptions = [
  {
    link: "/faculity/self-evaluation/new",
    icon: <AddBoxIcon color="primary" />,
    text: "Faculity Evaluation Form",
    role: [],
  },
  {
    link: "/faculity/profiles/update",
    icon: <PersonIcon color="primary" />,
    text: "Update Profile",
    role: [],
  },
  {
    link: "/password/change",
    icon: <LockIcon color="primary" />,
    text: "Change Password",
    role: [],
  },
];

export default {
  faculityNavOptions,
};
