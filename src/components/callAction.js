import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, useMediaQuery } from '@material-ui/core';

import sisVSsisLogo from '../images/sis-vs-sis/sis-vs-sisLogo.png';
import sisVSsisLogo2 from '../images/sis-vs-sis/sis_VS_sis_logo-2.png';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${sisVSsisLogo})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    height: '49.5em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${sisVSsisLogo2})`,
      height: '97em',
      width: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${sisVSsisLogo2})`,
      backgroundAttachment: 'inherit',
      height: '72em',
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${sisVSsisLogo2})`,
      backgroundAttachment: 'inherit',
      height: '52em',
      width: '100%',
    },
  },
  heroText: {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

export default function CallToAction(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      alignItems="center"
      justify={matchesSM ? 'center' : 'space-between'}
      className={classes.background}
      direction={matchesSM ? 'column' : 'row'}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          textAlign: matchesSM ? 'center' : 'inherit',
        }}
      >
        <Grid item className={classes.heroText}>
          <Typography
            variant="h1"
            style={{ fontSize: '6em', color: 'white', fontFamily: 'Courgette' }}
          >
            Welcome to sisVSsis
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
