import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import MonterKiller from './image/Seher/games/MonterKiller.png';
import RPS from './image/Seher/games/RPS.png';

import UFOhunter from './image/Safin/games/UFOhunter.png';
import MemoryGame from './image/Safin/games/MemoryGame.png';
import SpaceImadrsGame from './image/Safin/games/SpaceImadrsGame.png';
import FroggerGame from './image/Safin/games/FroggerGame.png';
import WhackAMoleGame from './image/Safin/games/WhackAMoleGame.png';
import SnakeGame from './image/Safin/games/SnakeGame.png';
import ConnectFourGame from './image/Safin/games/ConnectFourGame.png';
import CupAnimation from './image/Safin/games/CupAnimation.png';
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

export default function WebsiteCards() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  /* ------ SeherAllGames ------ */
  const SeherAllGames = [
    {
      image: `${MonterKiller}`,
      title: 'MonterKiller',
      MadeBy: 'Seher Mahmud',
      href: 'https://react-beach-resort-recording-seher.netlify.app',
    },
    {
      image: `${RPS}`,
      title: 'Rock Paper Sissors',
      MadeBy: 'Seher Mahmud',
      href: 'http://react-phone-store-recording-seher.netlify.app/',
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

  /* ------ SafinAllGames ------ */
  const SafinAllGames = [
    {
      image: `${UFOhunter}`,
      title: 'UFO Hunter',
      MadeBy: 'Safin Mahmud',
      href: 'https://ufo-hunter.netlify.app/',
    },
    {
      image: `${MemoryGame}`,
      title: 'Memory Game',
      MadeBy: 'Safin Mahmud',
      href: 'https://memory-game-safin.netlify.app/',
    },
    {
      image: `${SpaceImadrsGame}`,
      title: 'SpaceImadrs',
      MadeBy: 'Safin Mahmud',
      href: 'https://space-imadrs-game-safin.netlify.app',
    },
    {
      image: `${FroggerGame}`,
      title: 'Frogger',
      MadeBy: 'Safin Mahmud',
      href: 'https://frogger-game-safin.netlify.app',
    },
    {
      image: `${WhackAMoleGame}`,
      title: 'WhackAMole',
      MadeBy: 'Safin Mahmud',
      href: 'https://whack-a-mole-game-safin.netlify.app',
    },
    {
      image: `${SnakeGame}`,
      title: 'Snake Game',
      MadeBy: 'Safin Mahmud',
      href: 'https://snake-game-safin.netlify.app',
    },
    {
      image: `${ConnectFourGame}`,
      title: 'ConnectFour',
      MadeBy: 'Safin Mahmud',
      href: 'https://connect-four-game-safin.netlify.app',
    },
    {
      image: `${CupAnimation}`,
      title: 'Cup, animation',
      MadeBy: 'Safin Mahmud',
      href: 'https://cup-animation.netlify.app/',
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
        This are all Seher's created games. See, Explore and Share
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
              {SeherAllGames}
            </div>
          </Grid>
        </Grid>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>{SeherAllGames}</div>
      )}
      <br />
      <Typography
        style={{ color: '#ff4081', marginLeft: '0.5em', marginBottom: '0.8em' }}
        variant={matchesSM ? 'h5' : 'h4'}
      >
        This are all Safin's created games. See, Explore and Share
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
              {SafinAllGames}
            </div>
          </Grid>
        </Grid>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>{SafinAllGames}</div>
      )}
    </div>
  );
}
