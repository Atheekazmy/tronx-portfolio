import React, { Fragment } from "react";
import { Avatar, makeStyles } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.titleBar.main,
    },
  },

}));

const SocialIcons = (props) => {
  const classes = useStyles();
  return (
    <span className={classes.root}>
      <Avatar data-swiper-parallax="-100">
        <FacebookIcon fontSize="medium" color={"primary"} />
      </Avatar>
      <Avatar data-swiper-parallax="-200">
        <InstagramIcon fontSize="medium" color={"primary"} />
      </Avatar>
      <Avatar data-swiper-parallax="-300">
        <TwitterIcon fontSize="medium" color={"primary"} />
      </Avatar>
      <Avatar data-swiper-parallax="-400">
        <LinkedInIcon fontSize="medium" color={"primary"} />
      </Avatar>
      <Avatar data-swiper-parallax="-500">
        <GitHubIcon fontSize="medium" color={"primary"} />
      </Avatar>
    </span>
  );
};

SocialIcons.propTypes = {};

export default SocialIcons;
