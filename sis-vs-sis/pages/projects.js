import React from "react";
import Head from "next/head";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import ButtonArrow from "../src/ui/ButtonArrow";

const useStyles = makeStyles((theme) => ({
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
    [theme.breakpoints.down("sm")]: {
      padding: 5,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
}));

export default function Services(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">Projects | sisVSsis</title>
        <meta
          name="description"
          key="description"
          content="We had made so many beautiful and working websites, mini and fun games and We had our own Portfolio. So check it out and see awesome things we made"
        />
        <meta
          property="og:title"
          content=" sisVSsis Portfolio | Projects"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="https://sisVSsis.vercel.app/projects"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://sisVSsis.vercel.app/projects"
        />
      </Head>
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          marginTop: matchesSM ? "1em" : "2em",
        }}
      >
        <Typography
          align={matchesSM ? "center" : undefined}
          variant="h1"
          gutterBottom
        >
          Projects
        </Typography>
      </Grid>
      <Grid item>
        {" "}
        {/*-----Websites Block-----*/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
          style={{ marginTop: matchesSM ? "1em" : "5em" }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
              width: matchesSM ? undefined : "35em",
            }}
          >
            <Typography variant="h4" style={{ fontFamily: "Merienda One" }}>
              Websites
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              We had made so many beautiful,
              {matchesSM ? <br /> : <br />}working websites.
            </Typography>
            <Typography variant="subtitle1">
              We are still developers but we made our
              {matchesSM ? <br /> : <br />}website with html, css
              {matchesSM ? <br /> : <br />}react, nextjs etc.
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Come and see our various type website
            </Typography>
            <Button
              component={Link}
              href="/websites"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(0);
              }}
              style={{ marginBottom: "2em" }}
            >
              <span style={{ marginRight: 10 }}>See Websites</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              className={classes.icon}
              alt="mobile phone icon"
              src="/assets/Websites.png"
              width={matchesXS ? "300em" : "500em"}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {" "}
        {/*-----Custom Software Block-----*/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4" style={{ fontFamily: "Merienda One" }}>
              Games
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              We also made mini, fun games that you don't get bored by see
              {matchesSM ? null : <br />}only websites. (I mean you won't get
              that much bored but you
              {matchesSM ? null : <br />}might!,just telling.)
            </Typography>
            <Typography variant="subtitle1">
              Come and see our mini, fun games{" "}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button
              component={Link}
              href="/games"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(1);
              }}
            >
              <span style={{ marginRight: 10 }}>See Games</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              alt="custom software icon"
              src="/assets/customSoftware.svg"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {" "}
        {/*-----Websites Block-----*/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
          style={{ marginBottom: "10em" }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
              width: matchesSM ? undefined : "35em",
            }}
          >
            <Typography variant="h4">Portfolios</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              If you are thinking that this just a simple portfolio and it's
              {matchesSM ? null : <br />}not that big and interesting, don't
              quit. we got more
              {matchesSM ? null : <br />}portfolio to check it out!
            </Typography>
            <Typography variant="subtitle1">
              This are our own individual portfolios,{" "}
              {matchesSM ? null : <br />} check it out
            </Typography>
            <Button
              component={Link}
              href="/portfolio"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(2);
              }}
            >
              <span style={{ marginRight: 10 }}>See Porfolios</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              className={classes.icon}
              alt="website icon"
              src="/assets/websiteIcon.svg"
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
