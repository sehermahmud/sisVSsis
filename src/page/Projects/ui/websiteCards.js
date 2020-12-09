import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import BeachResort from './image/Seher/website/BeachResort.png';
import PhoneStore from './image/Seher/website/PhoneStore.png';
import MyMovieList from './image/Seher/website/MyMovieList.png';
import FavoriteMovies from './image/Seher/website/FavoriteMovies.png';
import MyShop from './image/Seher/website/MyShop.png';
import ProjectPlanner from './image/Seher/website/ProjectPlanner.png';
import UnconventionalCalculator from './image/Seher/website/UnconventionalCalculator.png';

import vacationTime from './image/Safin/website/vacationTime.png';

import { Grid, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('xl')]: {
      width: 331,
    },
    [theme.breakpoints.down('lg')]: {
      width: 320,
    },
    [theme.breakpoints.down('md')]: {
      width: 310,
    },
    [theme.breakpoints.down('sm')]: {
      width: 303,
    },
    [theme.breakpoints.down('xs')]: {
      width: 300,
    },
  },
  media: {
    height: 200,
  },
}));

export default function GameCards() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  /* ------ SeherAllWebsite ------ */
  const SeherAllWebsite = [
    {
      image: `${BeachResort}`,
      title: 'BeachResort',
      MadeBy: 'Seher Mahmud',
      href: 'https://react-beach-resort-recording-seher.netlify.app',
    },
    {
      image: `${PhoneStore}`,
      title: 'PhoneStore',
      MadeBy: 'Seher Mahmud',
      href: 'http://react-phone-store-recording-seher.netlify.app/',
    },
    {
      image: `${MyMovieList}`,
      title: 'MyMovieList',
      MadeBy: 'Seher Mahmud',
      href: 'https://my-movie-list-seher-demo.netlify.app',
    },
    {
      image: `${FavoriteMovies}`,
      title: 'FavoriteMovies',
      MadeBy: 'Seher Mahmud',
      href: 'https://personal-movie-database-seher-demo.netlify.app',
    },
    {
      image: `${MyShop}`,
      title: 'MyShop',
      MadeBy: 'Seher Mahmud',
      href: 'https://mini-admin-shop-seher-demo.web.app',
    },
    {
      image: `${ProjectPlanner}`,
      title: 'ProjectPlanner',
      MadeBy: 'Seher Mahmud',
      href: 'https://project-planner-seher-demo.web.app',
    },
    {
      image: `${UnconventionalCalculator}`,
      title: 'UnconventionalCalculator',
      MadeBy: 'Seher Mahmud',
      href: 'https://unconventional-calculator-seher-demo.netlify.app',
    },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ image, title, MadeBy, href }) => {
      return (
        <Card
          elevation={10}
          key={href}
          className={classes.root}
          style={{
            marginLeft: '1em',
            marginRight: '1em',
            marginBottom: '1.8em',
          }}
        >
          <CardActionArea>
            <CardMedia className={classes.media} image={image} title={title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                By: {MadeBy}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button target="_blank" href={href} size="small" color="primary">
              Visit {title}
            </Button>
          </CardActions>
        </Card>
      );
    });

  /* ------ SafinAllWebsite ------ */
  const SafinAllWebsite = [
    {
      image: `${vacationTime}`,
      title: 'Vacation Time',
      MadeBy: 'Safin Mahmud',
      href: 'https://vacationtime-safin.netlify.app/',
    },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ image, title, MadeBy, href }) => {
      return (
        <Card
          elevation={10}
          key={href}
          className={classes.root}
          style={{
            marginLeft: '1em',
            marginRight: '1em',
            marginBottom: '1.8em',
          }}
        >
          <CardActionArea>
            <CardMedia className={classes.media} image={image} title={title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                By: {MadeBy}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button target="_blank" href={href} size="small" color="primary">
              Visit {title}
            </Button>
          </CardActions>
        </Card>
      );
    });

  return (
    <div>
      <Typography
        style={{ color: '#ff4081', marginLeft: '0.5em', marginBottom: '0.8em' }}
        variant={matchesSM ? 'h5' : 'h4'}
      >
        This are all Seher's created websites. See, Explore and Share
      </Typography>{' '}
      {matchesXS ? (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        >
          <Grid item xs={10}>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {SeherAllWebsite}
            </div>
          </Grid>
        </Grid>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {SeherAllWebsite}
        </div>
      )}
      <br />
      <Typography
        style={{ color: '#ff4081', marginLeft: '0.5em', marginBottom: '0.8em' }}
        variant={matchesSM ? 'h5' : 'h4'}
      >
        This are all Safin's created websites. See, Explore and Share
      </Typography>{' '}
      {matchesXS ? (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        >
          <Grid item xs={10}>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {SafinAllWebsite}
            </div>
          </Grid>
        </Grid>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {SafinAllWebsite}
        </div>
      )}
    </div>
  );
}
