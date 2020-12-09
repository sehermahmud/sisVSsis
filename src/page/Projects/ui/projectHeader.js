import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Button, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: '2em',
    color: '#f06292',
    fontFamily: 'Merienda One',
    [theme.breakpoints.down('md')]: {
      fontSize: '2em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2em',
    },
  },

  link: {
    fontFamily: 'Handlee',
    textTransform: 'none',
    fontSize: '1.2em',
    fontWeight: 600,
    background: '#FFCCE6',
    borderRadius: 0,
    '&:hover': {
      background: '#FFCCE6',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2em',
    },
  },
  appbar: {
    height: '4em',
    [theme.breakpoints.down('md')]: {
      height: '4em',
    },
    [theme.breakpoints.down('sm')]: {
      height: '4em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '3.7em',
    },
  },
}));

export default function ProjectHeader(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const projectsLinks = [
    { label: 'All', href: '/projects' },
    { label: 'Websites', href: '/projects/websites' },
    { label: 'Games', href: '/projects/games' },
    { label: 'More', href: '/projects/More' },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ href, label }) => {
      return (
        <Button
          key={href}
          href={href}
          style={{
            color: 'white',
            textTransform: 'none',
            paddingRight: '0.3em',
            paddingLeft: '0.3em',
          }}
        >
          <Typography variant="h6">{label}</Typography>
        </Button>
      );
    });

  return (
    <React.Fragment>
      <AppBar
        position="static"
        elevation={3}
        className={classes.appbar}
        style={{
          marginTop: matchesXS ? '0.5em' : '1em',
          background: '#7c4dff',
        }}
      >
        <Toolbar style={{ height: 0 }}>{projectsLinks}</Toolbar>
      </AppBar>
      <br />
    </React.Fragment>
  );
}
