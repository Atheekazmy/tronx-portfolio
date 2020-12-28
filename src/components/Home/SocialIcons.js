import React from "react";
import { Grid, Avatar, makeStyles } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({

  avatar: {
    backgroundColor: theme.palette.titleBar.main,
  },

}));

const SocialIcons = (props) => {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item xs={1}>
        <Avatar className={classes.avatar}>
          <FacebookIcon fontSize="medium" color={"primary"} />
        </Avatar>
      </Grid>
      <Grid item xs={1}>
        <Avatar className={classes.avatar}>
          <InstagramIcon fontSize="medium" color={"primary"} />
        </Avatar>
      </Grid>
      <Grid item xs={1}>
        <Avatar className={classes.avatar}>
          <TwitterIcon fontSize="medium" color={"primary"} />
        </Avatar>
      </Grid>
      <Grid item xs={1}>
        <Avatar className={classes.avatar}>
          <LinkedInIcon fontSize="medium" color={"primary"} />
        </Avatar>
      </Grid>
      <Grid item xs={1}>
        <Avatar className={classes.avatar}>
          <GitHubIcon fontSize="medium" color={"primary"} />
        </Avatar>
      </Grid>
    </Grid>
  );
};

SocialIcons.propTypes = {};

export default SocialIcons;
