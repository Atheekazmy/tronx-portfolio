import { Typography } from '@material-ui/core';
import React from 'react';
import Swiper from 'react-id-swiper';

export const VerticalSlider = ({ classes }) => {
    const params = {
        direction: 'vertical',
        slidesPerView: 1,
        speed: 1000,
        parallax: true,
        parallaxEl: {
            el: '.parallax-bg',
            value: '-23%'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: (index, className) => {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            }
        }
    }
    return (
        <div >
            <Swiper {...params} className={classes.swiper} >
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
            </Swiper >
        </div >
    )
};
