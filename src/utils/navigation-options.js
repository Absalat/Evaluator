import AddBoxIcon from "@material-ui/icons/AddBox";
import ListIcon from "@material-ui/icons/List";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import GroupIcon from "@material-ui/icons/Group";
import config from "../config";
const faculityNavOptions = [
  {
    link: "/faculity/self-evaluation/new",
    icon: <AddBoxIcon color="primary" />,
    text: "Faculity Evaluation Form",
    role: [config.roles.faculty],
  },
  {
    link: "/faculity/profiles/update",
    icon: <PersonIcon color="primary" />,
    text: "Update Profile",
    role: [config.roles.faculty],
  },
  {
    link: "/password/change",
    icon: <LockIcon color="primary" />,
    text: "Change Password",
    role: [Object.values(config.roles)],
  },
  {
    link: "/chair/self-evaluation/new",
    icon: <AddBoxIcon color="primary" />,
    text: "Chair Evaluation Form",
    role: [config.roles.chair],
  },
  {
    link: "/users",
    icon: <GroupIcon color="primary" />,
    text: "Users",
    role: [config.roles.admin],
  },
  {
    link: "/center/evaluation/new",
    icon: <AddBoxIcon color="primary" />,
    text: "School Evaluation Form",
    role: [config.roles.chair, config.roles.admin, config.roles.dean],
  },
];

export default {
  faculityNavOptions,
};
