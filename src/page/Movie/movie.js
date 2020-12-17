import React, { useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, useMediaQuery } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import Movies from './ui/data';
import ReactPlayer from 'react-player';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('xl')]: {
      width: 331,
    },
    [theme.breakpoints.down('lg')]: {
      width: 300,
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
    height: 300,
  },
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  paper: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 700,
    border: '1px solid black',
    [theme.breakpoints.down('sm')]: {
      width: 400,
    },
  },
  input: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function GameCards() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const [open, setOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = Movies.filter((title) =>
      title.title.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Typography
        variant={matchesSM ? 'h3' : matchesXS ? 'h4' : 'h1'}
        style={{
          textAlign: 'center',
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          padding: '0.5em',
          textDecoration: 'none',
          fontFamily: 'Merienda One',
          color: 'white',
        }}
      >
        MiniMovies
      </Typography>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div
        style={{
          padding: '2px 4px',
          display: 'block',
          alignItems: 'center',
          width: matchesSM ? 400 : 700,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Typography variant="h6" style={{ color: '#9e9e9e' }}>
          Search Movie Collection
        </Typography>
        <Paper elevation={3} className={classes.paper}>
          <InputBase
            className={classes.input}
            placeholder="Search Movie"
            value={searchTerm}
            onChange={handleChange}
          />
          <IconButton className={classes.iconButton}>
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Typography
        variant="h4"
        style={{ textAlign: 'center', color: '#7c4dff' }}
      >
        All Movies Collection in sisVSsis Website
      </Typography>
      <br />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Movies.map((Watchs, index) => {
          return (
            <div
              style={{
                alignItems: 'center',
                alignContent: 'center',
                justify: 'center',
              }}
            >
              <a href={'/watch/' + Watchs.id}>
                <Card
                  elevation={10}
                  key={Watchs.title}
                  className={classes.root}
                  style={{
                    marginLeft: '1em',
                    marginRight: '1em',
                    marginBottom: '1.8em',
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      style={{
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                      }}
                      className={classes.media}
                      image={Watchs.image}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5">
                        {Watchs.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
