import { createMuiTheme } from "@material-ui/core/styles";

const arcRedPink = "#f48fb1";
const arcBlue = "#b39ddb";

export default createMuiTheme({
  palette: {
    common: {
      redPink: arcRedPink,
      blue: arcBlue,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcRedPink,
    },
  },
  typography: {
    tab: {
      fontFamily: "Merienda One",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1.2rem",
    },
    estimate: {
      fontFamily: "Merienda One",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
    h1: {
      fontFamily: "Kalam",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: arcRedPink,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: arcRedPink,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: arcRedPink,
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Raleway",
      color: arcRedPink,
      lineHeight: 1
    },
    subtitle1: {
      fontSize: "1.2rem",
      fontWeight: 300,
      color: arcBlue,
    },
    subtitle2: {
      color: "white",
      fontSize: "1.25rem",
      fontWeight: 300,
    },
    body1: {
      fontSize: "1.25rem",
      color: arcBlue,
      fontWeight: 300,
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 300,
      color: arcRedPink,
    },
    learnButton: {
      borderColor: arcRedPink,
      borderWidth: 2,
      textTransform: "none",
      color: arcRedPink,
      borderRadius: 50,
      fontFamily: "Kalam",
      fontWeight: "bold",
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: arcRedPink,
        fontSize: "1rem",
      },
    },
    MuiInput: {
      root: {
        color: arcRedPink,
        fontWeight: 300,
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${arcRedPink}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${arcRedPink}`,
        },
      },
    },
  },
});
