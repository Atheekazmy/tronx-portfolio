import React from "react";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";

const GridItemWithSwiper = ({ xs, swiperParallax, children }) => {
  return (
    <Grid item xs={xs}>
      <div data-swiper-parallax={swiperParallax}>{children}</div>
    </Grid>
  );
};

GridItemWithSwiper.propTypes = {
  xs: PropTypes.number,
  swiperParallax: PropTypes.string,
  children: PropTypes.any,
};

export default GridItemWithSwiper;
