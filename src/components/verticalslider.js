import { makeStyles, Typography } from '@material-ui/core';
import React, { useRef } from 'react';
import Swiper from 'react-id-swiper';
import HomeContent from './Home/HomeContent';

const useStyles = makeStyles((theme) => ({
    container: {
        fontFamily: 'Raleway',
        padding: '1em 1em',
        display: 'flex',
        flexDirection: 'column',
        width: '200px',
        zIndex: 2,
        position: 'fixed'
    },
    borderXwidth: {
        '& a': {
            textDecoration: 'none',
            font: '20px Raleway',
            margin: '0px 10px',
            padding: '10px 10px',
            position: 'relative',
            zIndex: 0,
            cursor: 'pointer',
            "&:before": {
                position: 'absolute',
                opacity: 0,
                width: '0%',
                height: 2,
                content: '""',
                background: theme.palette.secondary.main,
                transition: 'all 0.3s',
                left: '0px',
                top: '0px',
            },
            "&:after": {
                position: 'absolute',
                opacity: 0,
                width: '0%',
                height: 2,
                content: '""',
                background: theme.palette.secondary.main,
                transition: 'all 0.3s',
                right: '0px',
                bottom: '0px',
            },
            '&:hover': {
                "&:before": {
                    opacity: 1,
                    width: '100%',
                },
                "&:after": {
                    opacity: 1,
                    width: '100%',
                }
            },
        }
    },
}))

export const VerticalSlider = () => {
    const classes = useStyles()
    const menuName = ['Home', 'Services', 'Resume', 'Projects', 'Blogs', 'Contact'];
    const swiperRef = useRef();

    const params = {
        direction: 'vertical',
        slidesPerView: 1,
        speed: 1000,
        mouseWheelControl: true,
        parallax: true,
        parallaxEl: {
            el: '.parallax-bg',
            value: '-23%'
        },

    }
    const changeSlider = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    }

    return (
        <div >
            <div className={`${classes.container} ${classes.borderXwidth}`}>
                {menuName.map((x, i) => <a onClick={() => changeSlider(i)}><Typography >{x}</Typography></a>)}
            </div>

            <Swiper {...params} className={classes.swiper} ref={swiperRef} >
                <div >
                <HomeContent />
                </div>
                <div styles={{ marginLeft: '30%' }}>
                <HomeContent />
                </div>
                <div >
                    <div data-swiper-parallax="-300">
                        Slide #2
                    </div>
                    <div data-swiper-parallax="-200">
                        Subtitle
                    </div>
                    <div data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam dictum mattis velit, sit
                            amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor.
                            Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                            euismod.
                        </p>
                    </div>
                </div>
                <div >
                    <div data-swiper-parallax="-300">
                        Slide #2
                    </div>
                    <div data-swiper-parallax="-200">
                        Subtitle
                    </div>
                    <div data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam dictum mattis velit, sit
                            amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor.
                            Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                            euismod.
                        </p>
                    </div>
                </div>
                <div styles={{ marginLeft: '30%' }}>
                    <div data-swiper-parallax="-300">
                        Slide #2
                    </div>
                    <div data-swiper-parallax="-200">
                        Subtitle
                    </div>
                    <div data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam dictum mattis velit, sit
                            amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor.
                            Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                            euismod.
                        </p>
                    </div>
                </div>
                <div styles={{ marginLeft: '30%' }}>
                    <div data-swiper-parallax="-300">
                        Slide #2
                    </div>
                    <div data-swiper-parallax="-200">
                        Subtitle
                    </div>
                    <div data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam dictum mattis velit, sit
                            amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor.
                            Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                            euismod.
                        </p>
                    </div>
                </div>
            </Swiper >
        </div >
    )
};
