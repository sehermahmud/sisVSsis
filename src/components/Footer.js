import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { AiFillYoutube } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
  footer: {
    width: '100%',
    position: 'relative',
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'Handlee',
    fontSize: '1rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3em',
  },
  icon: {
    height: '2.3em',
    width: '2.5em',
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '11.9em',
    right: '1.5em',
    [theme.breakpoints.down('sm')]: {
      right: '0.6em',
      marginTop: '11.7em',
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  /* ------ footerIcons ------ */
  const footerIcons = [
    {
      href: 'https://www.facebook.com',
      icon: <FaFacebookF className={classes.icon} style={{ color: 'white' }} />,
    },
    {
      href:
        'https://www.youtube.com/channel/UCjA0qLX3fqLnrj4lu-VzhNA?view_as=subscriber',
      icon: (
        <AiFillYoutube className={classes.icon} style={{ color: 'white' }} />
      ),
    },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ href, icon }) => {
      return (
        <Grid
          item
          component={'a'}
          key={href}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {icon}
        </Grid>
      );
    });

  return (
    <footer className={classes.footer}>
      <Grid
        container
        justify="center"
        className={classes.mainContainer}
        style={{ backgroundColor: '#7c4dff' }}
      >
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/" className={classes.link}>
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/projects" className={classes.link}>
              Projects
            </Grid>
            <Grid
              item
              component={Link}
              to="/projects/games"
              className={classes.link}
            >
              Games
            </Grid>
            <Grid
              item
              component={Link}
              to="/projects/websites"
              className={classes.link}
            >
              Websites
            </Grid>
            <Grid
              item
              component={Link}
              to="/projects/More"
              className={classes.link}
            >
              More
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/gallery" className={classes.link}>
              Gallery
            </Grid>
            <Grid
              item
              component={Link}
              to="/gallery/photos"
              className={classes.link}
            >
              Photos
            </Grid>
            <Grid
              item
              component={Link}
              to="/gallery/video"
              className={classes.link}
            >
              Video
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/blog" className={classes.link}>
              Blog
            </Grid>
            <Grid item component={Link} to="/about" className={classes.link}>
              About Us
            </Grid>
            <Grid item component={Link} to="/contact" className={classes.link}>
              Contact Us
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        {footerIcons}
      </Grid>
    </footer>
  );
}
