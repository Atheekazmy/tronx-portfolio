import React from "react";
import { Grid, Typography, Avatar, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import GridItemWithSwiper from "../common/GridItemWithSwiper";
import OutlinedButtons from "../common/Button/OutlinedButtons";
import SocialIcons from "./SocialIcons";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > span": {
      margin: theme.spacing(2),
    },
  },
  sentImage: {
    height: "13em",
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

const HomeContent = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <GridItemWithSwiper xs={12} swiperParallax="-100">
          <Typography variant="h3" gutterBottom>
            Hi! I'm Nigga
          </Typography>
          <Typography variant="h6" gutterBottom>
            Hi! I'm Nigga
          </Typography>
        </GridItemWithSwiper>
        <GridItemWithSwiper xs={12} swiperParallax="-300">
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnePyQ74Es_GIewC2v2Q-mY3oiBjJ8c1xPg&usqp=CAU"
            }
          />
        </GridItemWithSwiper>
      </Grid>
      <Grid item xs={7}>
        <Grid container spacing={3}>
          <GridItemWithSwiper xs={12} swiperParallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
            </p>
          </GridItemWithSwiper>
          <GridItemWithSwiper xs={12} swiperParallax="-300">
            <SocialIcons />
          </GridItemWithSwiper>
          <Grid item xs={12}>
            <Grid container>
              <GridItemWithSwiper xs={3} swiperParallax="-500">
                <OutlinedButtons color="primary" label="CHECKOUT MY RESUME" />
              </GridItemWithSwiper>
              <GridItemWithSwiper xs={3} swiperParallax="-500">
                <OutlinedButtons color="primary" label="CONTACT ME" />
              </GridItemWithSwiper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

HomeContent.propTypes = {};

export default HomeContent;
