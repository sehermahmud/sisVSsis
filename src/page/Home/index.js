import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useTheme, Grid, useMediaQuery } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core';

import Websites from '../../images/assets/Websites.png';
import CallAction from '../../components/callAction';

// const useStyles = makeStyles((theme) => ({}));

export default function Index() {
  // const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <div>
      <CallAction />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Typography
        variant="h4"
        style={{ color: '#e91e63', textAlign: 'center' }}
      >
        Our Projects
      </Typography>
      <br />
      <br />
      <Grid container direction="row">
        <Grid item container direction="column" sm>
          <img
            src={Websites}
            alt="projects"
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              width: matchesXS ? '23em' : '35em',
              height: matchesXS ? '16em' : '35em',
            }}
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          sm
          style={{
            alignItems: matchesMD ? 'center' : '',
          }}
        >
          <Typography style={{ color: '#40c4ff' }}>Websites</Typography>
          <Typography
            style={{ color: '#7c4dff', width: matchesXS ? '20em' : '35em' }}
          >
            {' '}
            We had made so many beautiful, working websites. We are still
            developers but we made our website with html, css react, nextjs etc.
            Come and see our various type website.{' '}
            <a href="/projects/websites">See Websites</a>
          </Typography>
          <br />
          <Typography style={{ color: '#40c4ff' }}>Games</Typography>
          <Typography
            style={{ color: '#7c4dff', width: matchesXS ? '20em' : '35em' }}
          >
            We also made mini, fun games to play, that you won't get bored by
            seeing only our websites. <a href="/projects/games">See Games</a>
          </Typography>
          <br />
          <Typography style={{ color: '#40c4ff' }}>More</Typography>
          <Typography
            style={{ color: '#7c4dff', width: matchesXS ? '20em' : '35em' }}
          >
            It's not the end, we got <a href="/projects/More">More</a>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
