import React from "react";
import Link from "../Link";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#f48fb1",
    width: "100%",
    // zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Handlee",
    fontSize: "1rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                component={Link}
                href="/"
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                component={Link}
                href="/projects"
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                Projects
              </Grid>
              <Grid
                item
                component={Link}
                href="/photos"
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                Photo Gallery
              </Grid>
              <Grid
                item
                component={Link}
                href="/technology"
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                href="/portfolio"
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                Portfolio
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                href="/about"
                className={classes.link}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                href="/Team"
                className={classes.link}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(4)}
                href="/contact"
                className={classes.link}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <img
        alt="black decorative slash"
        src="/sis-vs-sis/sis-vs-sisLogo.png"
        className={classes.adornment}
      />

      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Tooltip title="facebook" TransitionComponent={Zoom} arrow>
          <Grid
            item
            component={"a"}
            href="https://www.facebook.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="facebook logo"
              src="/assets/facebook.svg"
              className={classes.icon}
              style={{borderRadius: "2em"}}
            />
          </Grid>
        </Tooltip>
        <Tooltip title="youtube" TransitionComponent={Zoom} arrow>
          <Grid
            item
            component={"a"}
            href="https://www.youtube.com/channel/UCjA0qLX3fqLnrj4lu-VzhNA?view_as=subscriber"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="twitter logo"
              src="/assets/youtubelogo.png"
              className={classes.icon}
              style={{borderRadius: "2em"}}
            />
          </Grid>
        </Tooltip>
      </Grid>
    </footer>
  );
}
