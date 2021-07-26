import { createTheme } from "@material-ui/core/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    sideBar: {
      default: "#263238",
    },
    background: {
      dark: "#fcfcfc",
      light: "#ffffff",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: "monospace",
  },
});

export default theme;
