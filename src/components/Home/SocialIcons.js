import React from "react";
import { Grid, Avatar } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const SocialIcons = (props) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={1}>
        <Avatar>
          <FacebookIcon fontSize="large" color={"secondary"} />
        </Avatar>
      </Grid>
      <Grid item xs={1}>
        <Avatar>
          <InstagramIcon fontSize="large" color={"secondary"} />
        </Avatar>
      </Grid>
      <Grid item xs={1}>
        <Avatar>
          <TwitterIcon fontSize="large" color={"secondary"} />
        </Avatar>
      </Grid>
      <Grid item xs={1}>
        <Avatar>
          <LinkedInIcon fontSize="large" color={"secondary"} />
        </Avatar>
      </Grid>
      <Grid item xs={1}>
        <Avatar>
          <GitHubIcon fontSize="large" color={"secondary"} />
        </Avatar>
      </Grid>
    </Grid>
  );
};

SocialIcons.propTypes = {};

export default SocialIcons;
