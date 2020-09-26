import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import {
  Button,
  makeStyles,
  useTheme,
  Grid,
  useMediaQuery,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/sis-vs-sis/sis-vs-sisLogo.png')",
    backgroundPosition: "no-repeat",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "50em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage:
        "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/sis-vs-sis/sis_VS_sis_logo-2.png')",
      backgroundAttachment: "inherit",
      height: "85em",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundImage:
        "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/sis-vs-sis/sis_VS_sis_logo-2.png')",
      backgroundAttachment: "inherit",
      height: "60em",
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      backgroundImage:
        "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/sis-vs-sis/sis_VS_sis_logo-2.png')",
      backgroundAttachment: "inherit",
      height: "35em",
      width: "100%",
    },
  },
  heroText: {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "rgb(38, 245, 252)",
  },
  Clickme: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    background: "linear-gradient(45deg, #f48fb1 20%, #b39ddb 60%)", 
    fontSize: "1.5em", 
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

export default function Index() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      alignItems="center"
      justify={matchesSM ? "center" : "space-between"}
      className={classes.background}
      direction={matchesSM ? "column" : "row"}
    >
      <Grid item className={classes.heroText}>
        <Typography variant="h1" style={{ fontSize: "5em", color: "#c797fd" }}>
          Welcome to sisVSsis.com's portfolio
        </Typography>
        <Typography style={{ fontSize: "2em", fontFamily: "Kalam" }} paragraph>
          {" "}
          We want to show you our project first!{" "}
        </Typography>
        <a href="/projects">
          <Button varient="container" className={classes.Clickme}>
            Click me
          </Button>
        </a>
      </Grid>
    </Grid>
  );
}
